import constants from "../actionCreators/actionConsts";

const initialState = {
  firstKey: null,
  secondkey: null,
  value: null
};


const selectedCell = (state = initialState, action) => {
  switch (action.type) {
    case constants.CELL_SELECTED: {
      const { type, ...actionWithoutType } = action; // eslint-disable-line
      return { ...state, ...actionWithoutType };
    }
    default:
      return state;
  }
};

export default selectedCell;
