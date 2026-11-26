import { useId, useState } from 'react';
import { primary, secondary, type Activity, type BusinessGroup, type Evidence, type Focus, type Overlay } from './businessMapData';
import './businessMap.css';

type EvidenceStatus = Evidence | 'unmapped';
type EvidenceView = Overlay | 'all';
type FocusView = Focus | 'all';

const evidenceLabels: Record<EvidenceStatus, string> = {
  live: 'Reported live',
  discovery: 'Discovery',
  scope: 'Scope to confirm',
  published: 'Published feature',
  integration: 'Published integration',
  unmapped: 'No mapped evidence',
};

const evidenceOptions = [
  ['all', 'Full map'],
  ['motilal', 'Motilal Oswal'],
  ['spectrum', 'WealthSpectrum'],
] as const;

const focusOptions = [
  ['all', 'All areas'],
  ['operations', 'Operations'],
  ['professional', 'Professional Enablement'],
] as const;

const sections = [
  { title: 'Primary functions', groups: primary },
  { title: 'Secondary functions', groups: secondary },
];

function badgeTone(status: EvidenceStatus) {
  return status === 'unmapped' ? 'unmapped' : 'mapped';
}

export function BusinessMap() {
  const [view, setView] = useState<EvidenceView>('all');
  const [focus, setFocus] = useState<FocusView>('all');
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const overlay = view === 'all' ? undefined : view;

  const groups = sections.flatMap(section => section.groups).map(group => {
    const activities = group.areas.flatMap(area => area.activities);
    const covered = overlay ? activities.filter(activity => activity[overlay]).length : 0;
    const matches = activities.filter(activity =>
      (focus === 'all' || activity.focus === focus) && (!overlay || activity[overlay])
    ).length;
    return { ...group, total: activities.length, covered, matches };
  });
  const selected = groups.find(group => group.title === selectedTitle);
  const activeFilters = overlay || focus !== 'all';
  const totalMatches = groups.reduce((sum, group) => sum + group.matches, 0);
  const statuses: EvidenceStatus[] = view === 'motilal' ? ['live', 'discovery', 'scope', 'unmapped']
    : view === 'spectrum' ? ['published', 'integration', 'unmapped'] : [];

  return <section className="business-map" aria-labelledby="business-map-title">
    <div className="business-map-inner">
      <header className="business-map-header">
        <h1 id="business-map-title">Wealth Management</h1>
        <details className="business-map-filter-menu">
          <summary>Coverage &amp; focus{activeFilters && <span>Active</span>}</summary>
          <div className="business-map-controls">
            <Filter label="Evidence" options={evidenceOptions} value={view} onChange={setView} />
            <Filter label="SERAA focus" options={focusOptions} value={focus} onChange={setFocus} />
          </div>
        </details>
      </header>

      {activeFilters && <div className="business-map-context">
        <span className="business-map-results" role="status">
          {totalMatches === 0 ? 'No matching use cases' : totalMatches + (totalMatches === 1 ? ' matching use case' : ' matching use cases')}
        </span>
        {!!statuses.length && <ul className="business-map-legend" aria-label="Evidence legend">
          {statuses.map(status => <li key={status}><EvidenceLabel status={status} /></li>)}
        </ul>}
      </div>}

      <div className={selected ? 'business-map-workspace has-selection' : 'business-map-workspace'}>
        <div className="business-map-overview" role="group" aria-label="All business functions">
          {sections.map((section, index) => <section key={section.title} className="business-map-category"
            data-category={index === 0 ? 'primary' : 'secondary'}>
            <h2>{section.title}</h2>
            <ul className="business-map-tiles">
              {section.groups.map(group => {
                const summary = groups.find(item => item.title === group.title)!;
                const tone = overlay && summary.covered === 0 ? 'unmapped'
                  : activeFilters && summary.matches > 0 ? 'mapped' : undefined;
                return <li key={group.title}>
                  <button type="button" className="business-map-tile" data-tone={tone}
                    aria-expanded={selectedTitle === group.title} aria-controls="business-map-function-panel"
                    onClick={() => setSelectedTitle(current => current === group.title ? null : group.title)}>
                    <span>{group.title}</span>
                    {activeFilters && <small>
                      {focus !== 'all' ? summary.matches + ' matches' : summary.covered + ' of ' + summary.total + ' mapped'}
                    </small>}
                  </button>
                </li>;
              })}
            </ul>
          </section>)}
        </div>
        <div id="business-map-function-panel" className="business-map-function-panel" hidden={!selected}>
          {selected && <FunctionDetail key={selected.title} group={selected} overlay={overlay} focus={focus} />}
        </div>
      </div>

      {view === 'spectrum' && <div className="business-map-sources">
        <span>WealthSpectrum sources</span>
        <a href="https://www.wealthspectrum.com/wealth-managers.html" target="_blank" rel="noreferrer">Wealth managers</a>
        <a href="https://www.wealthspectrum.com/portfolio-managers.html" target="_blank" rel="noreferrer">Portfolio managers</a>
        <a href="https://www.wealthspectrum.com/about-company.html" target="_blank" rel="noreferrer">Platform overview</a>
      </div>}
    </div>
  </section>;
}

function Filter<T extends string>({ label, options, value, onChange }: {
  label: string;
  options: readonly (readonly [T, string])[];
  value: T;
  onChange: (value: T) => void;
}) {
  return <div className="business-map-control">
    <span>{label}</span>
    <div className="business-map-switch" role="group" aria-label={label}>
      {options.map(([key, text]) => <button key={key} type="button" aria-pressed={value === key} onClick={() => onChange(key)}>{text}</button>)}
    </div>
  </div>;
}

function EvidenceLabel({ status }: { status: EvidenceStatus }) {
  return <span className="business-map-evidence" data-tone={badgeTone(status)}>{evidenceLabels[status]}</span>;
}

function FunctionDetail({ group, overlay, focus }: { group: BusinessGroup; overlay?: Overlay; focus: FocusView }) {
  const [openCase, setOpenCase] = useState<string | null>(null);
  return <section className="business-map-detail" aria-labelledby="business-map-detail-title">
    <header className="business-map-detail-header">
      <h2 id="business-map-detail-title">{group.title}</h2>
    </header>
    <div className="business-map-detail-body">
      {group.areas.map(area => <div key={area.title} className="business-map-case-group">
        {group.areas.length > 1 && <h3>{area.title}</h3>}
        <ul className="business-map-activities">
          {area.activities.map(activity => <ActivityCard key={activity.label} activity={activity} overlay={overlay} focus={focus}
            open={openCase === activity.label} onToggle={() => setOpenCase(current => current === activity.label ? null : activity.label)} />)}
        </ul>
      </div>)}
    </div>
  </section>;
}

function ActivityCard({ activity, overlay, focus, open, onToggle }: {
  activity: Activity;
  overlay?: Overlay;
  focus: FocusView;
  open: boolean;
  onToggle: () => void;
}) {
  const detailsId = useId();
  const evidence = overlay && activity[overlay];
  const inFocus = focus === 'all' || activity.focus === focus;
  const status = evidence && inFocus ? evidence[0] : overlay && !evidence ? 'unmapped' : undefined;
  const tone = status ? badgeTone(status) : focus !== 'all' && !overlay && inFocus ? 'mapped' : undefined;

  return <li className="business-map-activity" data-tone={tone} data-open={open}>
    <button type="button" className="business-map-activity-trigger" aria-expanded={open} aria-controls={detailsId} onClick={onToggle}>
      <span className="business-map-activity-name">{activity.label}</span>
      {status && <EvidenceLabel status={status} />}
      <span className="business-map-indicator" aria-hidden="true">{open ? '−' : '+'}</span>
    </button>
    <div id={detailsId} className="business-map-activity-detail" hidden={!open}>
      <dl className="business-map-workflow">
        <div><dt>Input</dt><dd>{activity.workflow.input}</dd></div>
        <div><dt>LLM role</dt><dd>{activity.workflow.llm}</dd></div>
        <div><dt>Output</dt><dd>{activity.workflow.output}</dd></div>
      </dl>
      {overlay && <div className="business-map-evidence-note">
        {!status && evidence && <EvidenceLabel status={evidence[0]} />}
        <span>{evidence ? evidence[1] : 'The available sources have no mapped evidence for this use case.'}</span>
      </div>}
    </div>
  </li>;
}
