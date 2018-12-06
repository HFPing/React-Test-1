import { TYPES } from './actions';

const systemReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_DOWNLOAD_DONE:
      return {
        ...state,
        loading: false,
        error: false,
        type: '',
        [payload.target]: true,
      };
    case TYPES.INIT_DASHBOARD:
      return {
        ...state,
        loading: true,
        error: false,
        type: 'Loading Lists',
      };
    default:
      return state;
  }
};

const listsReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_COMPETITORS_LIST:
      return { ...state, competitorsList: payload.competitorsList };
    case TYPES.SET_SHOPPINGLISTS_LIST:
      return { ...state, shoppinglistsList: payload.shoppinglistsList };
    default:
      return state;
  }
};

// Root reducer
const REDUCERS = (state, action = { type: '' }) => {
  console.log('Reducer: ', action);
  return {
    ...state,
    system: systemReducer(state.system, action),
    lists: listsReducer(state.lists, action),
  };
};

export default REDUCERS;
