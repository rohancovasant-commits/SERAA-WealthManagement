export type Prospect = { firm: string; who: string; offer: string; fit: string; capability: string; demo?: boolean };
export type ProspectMarket = { focused: Prospect[]; institutions: Prospect[] };

export const prospects: Record<string, ProspectMarket> = {
  UAE: {
    focused: [
      { firm: 'WRISE Middle East', who: 'DIFC wealth manager serving UHNW clients and family offices', offer: 'Complex account-opening document checks', fit: 'Its client mix gives us a reason to test entity and signatory checks.', capability: 'account-opening' },
      { firm: 'GSB', who: 'Independent DIFC adviser to international families', offer: 'Cross-border client-file completeness checks', fit: 'Its international client base gives us a reason to qualify variable documentation requirements.', capability: 'account' },
      { firm: 'Hoxton Wealth UAE', who: 'Cross-border financial planning firm', offer: 'Periodic review briefs and follow-up', fit: 'Its multi-jurisdiction advice business gives us a recurring workflow to discuss with advisers.', capability: 'advisor' }
    ],
    institutions: [
      { firm: 'ADCB', who: 'Major UAE bank', offer: 'Private banking onboarding exception review', fit: 'One private banking account type gives us a bounded pilot.', capability: 'account' },
      { firm: 'Emirates NBD', who: 'Major regional banking group', offer: 'Relationship manager client-review briefs', fit: 'A single wealth team can test time saved on meeting prep.', capability: 'advisor' },
      { firm: 'Mashreq', who: 'UAE bank with private banking and wealth services', offer: 'Account-maintenance request triage', fit: 'Wealth operations can assess how it handles incomplete service requests.', capability: 'account-maintenance' }
    ]
  },
  UK: {
    focused: [
      { firm: 'Wren Sterling', who: 'Independent UK financial planning group and acquirer', offer: 'Client-file checks for acquired practices', fit: 'Acquisitions create a reason to ask how incoming practices hand over files.', capability: 'account' },
      { firm: 'Ascot Lloyd', who: 'Independent financial advice group and acquirer', offer: 'Client-file migration exception review', fit: 'Practice integration gives us a specific operations workflow to qualify.', capability: 'investment' },
      { firm: 'The Private Office', who: 'Independent chartered financial planning firm', offer: 'Adviser review preparation and follow-up', fit: 'Ongoing planning gives us a way to measure meeting preparation time.', capability: 'advisor' }
    ],
    institutions: [
      { firm: 'Rathbones', who: 'Large UK wealth manager', offer: 'Client-review briefs for one adviser team', fit: 'A single team gives us a clear starting scope.', capability: 'advisor' },
      { firm: 'AJ Bell', who: 'Large UK investment platform', offer: 'Transfer exception triage', fit: 'Platform operations can test the handling of incomplete or inconsistent transfers.', capability: 'investment' },
      { firm: 'St. James’s Place', who: 'National wealth manager with an adviser network', offer: 'Client-review preparation for one partner practice', fit: 'A practice-level pilot gives advisers a way to measure time saved.', capability: 'advisor' }
    ]
  },
  US: {
    focused: [
      { firm: 'Modera Wealth Management', who: 'Fee-only adviser expanding into new markets', offer: 'Account-transfer file checks for a joining team', fit: 'Its first West Coast transaction gives us a reason to ask about record handover.', capability: 'account' },
      { firm: 'Merit Financial Advisors', who: 'Multi-office advisory firm and acquirer', offer: 'Post-acquisition onboarding exception queue', fit: 'Recent deals create a workflow to qualify with the integrations team.', capability: 'account' },
      { firm: 'Beacon Pointe Advisors', who: 'National advisory firm and active acquirer', offer: 'Pre-transfer completeness checks for acquired practices', fit: 'Recent acquisitions give us a specific integrations opportunity to investigate.', capability: 'account' }
    ],
    institutions: [
      { firm: 'Cetera', who: 'Large advisor network and wealth platform', offer: 'Advisor-transition exception review', fit: 'Recruitment of advisor practices creates a reason to ask about client transfers.', capability: 'advisor' },
      { firm: 'LPL Financial', who: 'National broker-dealer and advisory platform', offer: 'Transfer-file validation for one transition team', fit: 'One transition queue gives us a bounded place to test repeatable checks.', capability: 'investment' },
      { firm: 'Raymond James', who: 'Major wealth firm with affiliation and custody services', offer: 'Onboarding quality checks for one affiliation channel', fit: 'Its different affiliation models give us a clear way to scope the pilot.', capability: 'account' }
    ]
  },
  'Australia / NZ': {
    focused: [
      { firm: 'Invest Blue · AU', who: 'Multi-office financial advice group using Salesforce', offer: 'Follow-up on missing onboarding information', fit: 'Its multi-office model and known CRM give us a specific integration conversation.', capability: 'account' },
      { firm: 'Cambridge Partners · NZ', who: 'Independent financial advice and wealth practice', offer: 'Client-review briefs and follow-up drafting', fit: 'Ongoing advice gives us a clearly scoped adviser workflow.', capability: 'advisor' },
      { firm: 'Craigs Investment Partners · NZ', who: 'National investment advisory firm', offer: 'Client-service request triage', fit: 'Its nationwide advisory business provides a defined operations team to approach.', capability: 'account-servicing' }
    ],
    institutions: [
      { firm: 'HUB24 · AU', who: 'Major investment and superannuation platform', offer: 'Reconciliation exception review', fit: 'A specific platform operations workflow complements its existing advice technology work.', capability: 'investment' },
      { firm: 'Netwealth · AU', who: 'Large investment and superannuation platform', offer: 'Transfer exception triage', fit: 'Platform operations gives us a buyer and a measurable workflow.', capability: 'investment' },
      { firm: 'ASB · NZ', who: 'Major bank with a KiwiSaver business', offer: 'KiwiSaver servicing exception review', fit: 'Retirement savings gives us a defined servicing team to approach.', capability: 'account-servicing' }
    ]
  }
};
