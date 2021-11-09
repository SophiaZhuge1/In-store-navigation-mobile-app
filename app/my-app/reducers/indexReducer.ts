import { ITEM_INDEX_CHANGE } from '../constants';

const initialState = {
  index: 0,
};

interface IndexAction {
  type: string;
  payload: number;
}

const indexReducer = (state = initialState, action: IndexAction) => {
  switch (action.type) {
    case ITEM_INDEX_CHANGE:
      return {
        ...state,
        index: action.payload,
      };
    default:
      return state;
  }
};

export default indexReducer;

