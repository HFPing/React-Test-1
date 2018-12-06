import { TYPES, ACTIONS } from './actions';

import CompetitorService from '../utils/CompetitorService';
import ShoppingListsService from '../utils/ShoppingListsService';

async function initDashboardData() {
  const competitorsList = await CompetitorService.getCompetitorsList();
  const shoppinglistsList = await ShoppingListsService.getShoppinglistsList();
  return {
    competitorsList,
    shoppinglistsList,
  };
}

const dashboardMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case TYPES.INIT_DASHBOARD:
      console.log('In middleware: ', action);
      next(action);
      initDashboardData()
        .then(res => {
          dispatch(ACTIONS.setCompetitorsList(res.competitorsList));
          dispatch(ACTIONS.setShoppinglistsList(res.competitorsList));
          dispatch(ACTIONS.setDownloadDone(TYPES.LISTS_DOWNLOADED));
        });
      break;
    default:
      next(action);
      break;
  }
};

export default [
  dashboardMiddleware,
];
