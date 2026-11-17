export type EngagementStage = 'Production' | 'Discovery' | 'SOW sent' | 'To confirm' | 'Early discussion';
export type ClientWorkEntry = { client: string; workstream: string; stage: EngagementStage; nodeId: string; note?: string; starred?: boolean };

export const clientWork: ClientWorkEntry[] = [
  { client: 'MOFSL', workstream: 'Account management: KRA, account creation, account modifications', stage: 'Production', nodeId: 'account', note: 'Account Opening Checker and Audit are the specific live work identified.', starred: true },
  { client: 'MOFSL', workstream: 'End-of-day billing', stage: 'Production', nodeId: 'fees-billing' },
  { client: 'MOFSL', workstream: 'End-of-day settlement', stage: 'Production', nodeId: 'settlement-review' },
  { client: 'MOFSL', workstream: 'Depository Participant operations', stage: 'Production', nodeId: 'investment', starred: true },
  { client: 'MOFSL', workstream: 'Third-party products such as insurance and bonds', stage: 'Production', nodeId: 'wm', note: 'Product Distribution; workflow mapping remains open.', starred: true },
  { client: 'MOFSL', workstream: 'Compliance management', stage: 'Discovery', nodeId: 'compliance' },
  { client: 'MOFSL', workstream: 'Private wealth', stage: 'Discovery', nodeId: 'wm' },
  { client: 'IIFL', workstream: 'Account opening', stage: 'Discovery', nodeId: 'account-opening' },
  { client: 'IIFL', workstream: 'End-of-day operations', stage: 'Discovery', nodeId: 'investment' },
  { client: 'Centrum', workstream: 'Compliance management', stage: 'SOW sent', nodeId: 'compliance' },
  { client: 'Kotak', workstream: 'Scope and stage to confirm', stage: 'To confirm', nodeId: 'wm' },
  { client: 'Nuvama', workstream: 'Initial wealth discussions', stage: 'Early discussion', nodeId: 'wm' }
];
