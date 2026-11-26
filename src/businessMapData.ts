export type Evidence = 'live' | 'discovery' | 'scope' | 'published' | 'integration';
export type Overlay = 'motilal' | 'spectrum';
export type Focus = 'operations' | 'professional';
export type Activity = {
  label: string;
  focus: Focus;
  workflow: { input: string; llm: string; output: string };
  motilal?: [Evidence, string];
  spectrum?: [Evidence, string];
};
export type BusinessFunction = {
  title: string;
  activities: Activity[];
};

export type BusinessGroup = {
  title: string;
  areas: BusinessFunction[];
};

const primaryAreas = {
  acquisition: { title: 'Client Acquisition & Relationships', activities: [
    { label: 'Lead qualification and routing', focus: 'operations', workflow: { input: "Enquiry, referral source, and contact details.", llm: "Extracts the prospect’s needs and summarises why the lead is relevant.", output: "Qualified lead with a suggested sales queue." }, motilal: ['discovery', 'Digital Acquisition discovery covered lead allocation, scoring, and assisted sales.'] },
    { label: 'Advisor assignment and client retention', focus: 'professional', workflow: { input: "Client profile, advisor capacity, and activity history.", llm: "Summarises signs of disengagement and suggests a follow-up.", output: "Assignment proposal or advisor follow-up task." }, motilal: ['discovery', 'Discovery covered the move from new-client nurturing to advisory desks and reactivation.'], spectrum: ['published', 'Management dashboards track clients by relationship manager and flag engagement events.'] },
  ] },
  clientOps: { title: 'Client Ops', activities: [
    { label: 'Account opening and checker / audit', focus: 'operations', workflow: { input: "Application form, identity documents, and checklist.", llm: "Extracts key fields, compares documents, and flags gaps for the checker.", output: "Review checklist with discrepancies and evidence." }, motilal: ['live', 'Account Opening Checker and Audit are the specific live workflows reported for physical and eKYC applications.'], spectrum: ['integration', 'WealthSpectrum lists integration with account onboarding systems. Application-pack checks and resubmission depth remain open.'] },
    { label: 'KYC, KRA and UCC validation', focus: 'operations', workflow: { input: "Client data, KYC records, and exchange responses.", llm: "Explains rejection messages. Rules validate identifiers and required fields.", output: "Validation result and correction list." }, motilal: ['discovery', 'Discovery documented validation, exchange uploads, and rejection handling.'] },
    { label: 'Modifications, reactivation and closure', focus: 'operations', workflow: { input: "Client request, supporting documents, and account status.", llm: "Identifies the request type and flags missing proof.", output: "Routed request with a document checklist." }, motilal: ['discovery', 'Discovery included account changes, dormant activation, transfer-cum-closure, and transmission.'] },
  ] },
  advice: { title: 'Financial Planning & Advice', activities: [
    { label: 'Client goals and risk profiling', focus: 'professional', workflow: { input: "Client questionnaire, goals, and meeting notes.", llm: "Summarises goals and flags conflicting or missing answers.", output: "Draft client profile for advisor review." }, spectrum: ['published', 'The product publishes client profiling, a guided risk questionnaire, and investment policy alignment.'] },
    { label: 'Suitability and advice approval', focus: 'professional', workflow: { input: "Proposed investment, client profile, and suitability policy.", llm: "Summarises the rationale and flags gaps for the reviewer.", output: "Review brief with deviations and open questions." }, spectrum: ['published', 'The advisory workflow includes suitability, policy checks, and recommendation approval.'] },
    { label: 'Financial and succession planning', focus: 'professional', workflow: { input: "Assets, liabilities, family details, and planning goals.", llm: "Organises the facts and drafts questions for the planner.", output: "Planning brief and specialist follow-ups." } },
  ] },
  portfolio: { title: 'Investment Research & Portfolio Management', activities: [
    { label: 'Market research and investment insights', focus: 'professional', workflow: { input: "Holdings, market news, and approved research.", llm: "Summarises developments relevant to the holdings and cites sources.", output: "Short market brief for the advisor." }, motilal: ['discovery', 'Advisory discovery included market updates and investment research discussions.'], spectrum: ['published', 'Advisor tools include portfolio analysis and market views.'] },
    { label: 'Portfolio monitoring and restructuring', focus: 'professional', workflow: { input: "Holdings, target allocation, and risk limits.", llm: "Explains drift flagged by portfolio rules and drafts review notes.", output: "Portfolio review with positions to discuss." }, motilal: ['discovery', 'The operations materials document portfolio restructuring, holdings, positions, and gain/loss.'], spectrum: ['published', 'The portfolio modules cover accounting, monitoring, performance, and rebalancing.'] },
  ] },
  products: { title: 'Investment Product Ops & Distribution', activities: [
    { label: 'Product selection and distribution', focus: 'professional', workflow: { input: "Product terms, eligibility rules, and client mandate.", llm: "Summarises product terms. Rules check eligibility.", output: "Product comparison with eligible options for review." } },
    { label: 'Product transactions and servicing', focus: 'operations', workflow: { input: "Subscription, redemption, or servicing request and order records.", llm: "Extracts request details and summarises unclear instructions for review.", output: "Validated request or a queue of items needing review." }, motilal: ['scope', 'Third-party product operations are recorded in the client-work register. Exact live workflows remain to confirm.'], spectrum: ['published', 'Published coverage spans distribution and managed portfolios across multiple product types.'] },
    { label: 'Registrar feeds and partner operations', focus: 'operations', workflow: { input: "Registrar files, partner records, and feed specifications.", llm: "Explains rejected records. File checks and matching use rules.", output: "Accepted records and a correction queue." }, motilal: ['discovery', 'Discovery documented mutual-fund registrar files, partner mapping, and business-associate operations.'], spectrum: ['integration', 'The platform connects to mutual-fund registrars and execution platforms.'] },
  ] },
  trade: { title: 'Trade Processing / EDP', activities: [
    { label: 'Orders and execution monitoring', focus: 'operations', workflow: { input: "Approved orders and broker execution updates.", llm: "Summarises rejected, delayed, or partially filled orders.", output: "Order status list with exceptions." }, spectrum: ['published', 'Trade order management and digital advice-to-execution workflows are published capabilities.'] },
    { label: 'Exchange files and end-of-day processing', focus: 'operations', workflow: { input: "Exchange files, run calendar, and job dependencies.", llm: "Explains failed or missing steps. Rules route files and start jobs.", output: "Run status and alerts for missing or failed jobs." }, motilal: ['discovery', 'Discovery covered file routing, downstream jobs, and trade reconciliation.'] },
  ] },
  settlement: { title: 'Settlement', activities: [
    { label: 'End-of-day settlement', focus: 'operations', workflow: { input: "Trade obligations, settlement files, and clearing responses.", llm: "Summarises failed or pending items. Rules reconcile obligations.", output: "Settlement status with an exception queue." }, motilal: ['live', 'The client-work register reports live end-of-day settlement work.'], spectrum: ['integration', 'Broker interfaces provide settlement updates.'] },
    { label: 'Securities pay-in, payout and exceptions', focus: 'operations', workflow: { input: "Delivery obligations, holdings, and depository responses.", llm: "Groups rejected movements and explains likely causes from the available evidence.", output: "Exception list with cases for operations review." }, motilal: ['discovery', 'Discovery documented securities movement, shortages, and exception handling.'] },
  ] },
  banking: { title: 'Banking', activities: [
    { label: 'Cash pay-in and payout', focus: 'operations', workflow: { input: "Client request, balance, bank details, and risk checks.", llm: "Summarises exceptions. Rules and approvals control fund release.", output: "Approved payout instruction or a case for review." }, motilal: ['discovery', 'Discovery covered client receipts, risk checks, and cash payout cycles.'] },
    { label: 'Bank statements and cash reconciliation', focus: 'operations', workflow: { input: "Bank statements, client ledger, and payment references.", llm: "Suggests explanations for unmatched items. Rules match known references.", output: "Matched transactions and a list of unresolved breaks." }, motilal: ['discovery', 'Bank statement uploads and handling unmatched transactions appear in the discovery inventory.'] },
  ] },
  depository: { title: 'Depository Ops', activities: [
    { label: 'Demat holdings and depository reconciliation', focus: 'operations', workflow: { input: "Depository balances and internal holdings records.", llm: "Summarises breaks. Rules compare balances by account and security.", output: "Holdings reconciliation report and exception queue." }, motilal: ['scope', 'Depository Participant work is recorded in the client-work register. Exact live workflows remain to confirm.'], spectrum: ['integration', 'The platform connects to custodians and tracks security transfers.'] },
    { label: 'Securities transfers, pledges and unpledges', focus: 'operations', workflow: { input: "Client instructions, holdings, and depository responses.", llm: "Explains rejected requests. Rules and approvals control execution.", output: "Movement status and actions for rejected items." }, motilal: ['discovery', 'Operating materials cover depository instructions, pledge batches, and response checks.'] },
  ] },
  billing: { title: 'Billing & Compensation', activities: [
    { label: 'End-of-day billing', focus: 'operations', workflow: { input: "Executed trades, rate cards, and charge schedules.", llm: "Explains billing exceptions. Rules calculate charges.", output: "Billing file and exceptions for review." }, motilal: ['live', 'The client-work register reports live end-of-day billing work.'] },
    { label: 'Fees, invoices and commission reconciliation', focus: 'operations', workflow: { input: "Fee schedules, invoices, and commission receipts.", llm: "Summarises discrepancies. Rules compare expected and received amounts.", output: "Reconciliation report with items to resolve." }, motilal: ['discovery', 'Discovery covered brokerage, charges, fee adjustments, and product commissions.'], spectrum: ['published', 'The platform publishes advisory fee calculations, invoicing, and commission reconciliation.'] },
  ] },
  clientService: { title: 'Client Service & Reporting', activities: [
    { label: 'Queries, objections and complaints', focus: 'operations', workflow: { input: "Client message, case history, and approved guidance.", llm: "Identifies the issue and drafts a reply or an escalation summary.", output: "Draft response or routed case." }, motilal: ['discovery', 'Customer Service discovery covered routing, rejection explanations, and complaints.'] },
    { label: 'Portfolio reports and statements', focus: 'professional', workflow: { input: "Holdings, transactions, and calculated performance figures.", llm: "Drafts plain-language commentary using approved figures.", output: "Client report with commentary for review." }, spectrum: ['published', 'The client and advisor portals provide portfolio views, performance reports, and transaction history.'] },
    { label: 'Meeting notes and follow-up actions', focus: 'professional', workflow: { input: "Meeting transcript or notes and client context.", llm: "Summarises the discussion and extracts decisions and actions.", output: "Meeting note and follow-up task list." }, spectrum: ['published', 'WealthSpectrum describes AI-generated meeting notes and actions using portfolio reviews and market views.'] },
  ] },
} satisfies Record<string, BusinessFunction>;

export const primary: BusinessGroup[] = [
  { title: 'Client Ops & Service', areas: [primaryAreas.acquisition, primaryAreas.clientOps, primaryAreas.clientService] },
  { title: 'Advice & Portfolio Management', areas: [primaryAreas.advice, primaryAreas.portfolio] },
  { title: 'Investment Products & Distribution', areas: [primaryAreas.products] },
  { title: 'Trade Processing / EDP', areas: [primaryAreas.trade] },
  { title: 'Settlement, Banking & Depository Ops', areas: [primaryAreas.settlement, primaryAreas.banking, primaryAreas.depository] },
  { title: 'Billing & Compensation', areas: [primaryAreas.billing] },
];

const secondaryAreas: BusinessFunction[] = [
  { title: 'Risk & Compliance', activities: [
    { label: 'Policy, screening and surveillance', focus: 'operations', workflow: { input: "Policy rules, activity records, and screening alerts.", llm: "Summarises alert evidence for the compliance reviewer.", output: "Review brief with flagged activity and source references." }, motilal: ['discovery', 'Discovery covered surveillance and compliance workflows.'], spectrum: ['published', 'The investment platform publishes pre- and post-trade compliance and portfolio policy monitoring.'] },
    { label: 'Regulatory oversight and submissions', focus: 'operations', workflow: { input: "Reporting requirements, transaction data, and evidence files.", llm: "Drafts explanations and flags apparent evidence gaps.", output: "Submission pack and checklist for sign-off." }, motilal: ['discovery', 'The operating materials cover regulatory reporting and escalation.'] },
  ] },
  { title: 'Audit & Quality', activities: [
    { label: 'Independent audit and control testing', focus: 'operations', workflow: { input: "Control checklist, sample records, and evidence.", llm: "Organises evidence and drafts observations for the auditor.", output: "Audit workpapers with issues for review." } },
    { label: 'Call quality, complaints analysis and NPS', focus: 'operations', workflow: { input: "Call transcripts, survey responses, and QA scorecard.", llm: "Summarises themes and assesses sampled calls against the scorecard.", output: "Quality findings, themes, and coaching points." }, motilal: ['discovery', 'BPEX materials cover case management, call audits, complaints reporting, and NPS.'] },
  ] },
  { title: 'Technology & Data', activities: [
    { label: 'Platforms, data quality and integrations', focus: 'operations', workflow: { input: "Feed logs, schemas, and data validation errors.", llm: "Explains failures and groups similar issues for support.", output: "Issue summary with affected feeds and records." }, motilal: ['discovery', 'Core IT discovery covered system boundaries and integration dependencies.'], spectrum: ['integration', 'Published interfaces include market-data providers, custodians, brokers, and registrars.'] },
    { label: 'Cybersecurity and AI governance', focus: 'operations', workflow: { input: "Policy requirements, model records, and incident reports.", llm: "Summarises control gaps and documents evidence for reviewers.", output: "Governance review pack with open actions." }, motilal: ['discovery', 'AI governance and Core IT guardrails were discussed as part of discovery.'] },
  ] },
  { title: 'Finance & Tax', activities: [
    { label: 'Corporate accounting, GST and TDS', focus: 'operations', workflow: { input: "Ledger, invoices, and tax records.", llm: "Summarises exceptions. Approved rules calculate tax and reconcile amounts.", output: "Tax and accounting exceptions for review." }, motilal: ['discovery', 'Banking operations materials include GST, TDS, invoicing, and internal reconciliation.'] },
    { label: 'Business planning and financial control', focus: 'operations', workflow: { input: "Budget, actuals, and business performance figures.", llm: "Summarises major variances and flags missing explanations.", output: "Management brief with variances to investigate." } },
  ] },
  { title: 'People, Training & Administration', activities: [
    { label: 'Hiring, training and workforce planning', focus: 'operations', workflow: { input: "Staffing plan, training records, and quality trends.", llm: "Summarises capacity and skills gaps for managers.", output: "Staffing and training priorities for review." }, motilal: ['discovery', 'Digital Acquisition discovery covered training and coaching for sales and advisory teams.'] },
    { label: 'Vendor management and administration', focus: 'operations', workflow: { input: "Vendor records, contracts, and service metrics.", llm: "Extracts renewal dates and summarises service issues.", output: "Renewal tracker and vendor review notes." } },
  ] },
];

export const secondary: BusinessGroup[] = secondaryAreas.map(area => ({ title: area.title, areas: [area] }));
