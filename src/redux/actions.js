// Redux actions constants and actions generators file

const TYPES = {
  INIT_DASHBOARD: 'INIT_DASHBOARD',
  SET_DOWNLOAD_DONE: 'SET_DOWNLOAD_DONE',
  LISTS_DOWNLOADED: 'LISTS_DOWNLOADED',

  SET_COMPETITORS_LIST: 'SET_COMPETITORS_LIST',
  SET_SHOPPINGLISTS_LIST: 'SET_SHOPPINGLISTS_LIST',
};

const ACTIONS = {
  initDashboard: () => ({ type: TYPES.INIT_DASHBOARD }),
  setDownloadDone: (target) => ({ type: TYPES.SET_DOWNLOAD_DONE, payload: { target } }),

  setCompetitorsList:
    (competitorsList) => ({
      type: TYPES.SET_COMPETITORS_LIST, payload: { competitorsList },
    }),
  setShoppinglistsList:
    (shoppinglistsList) => ({
      type: TYPES.SET_SHOPPINGLISTS_LIST, payload: { shoppinglistsList },
    }),
};

export { TYPES, ACTIONS };
