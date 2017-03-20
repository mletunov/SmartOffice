import constants from './actionConsts';

let selectedCell = {

  cellSelected(firstKey, secondKey, value) {
        return {
            type: constants.CELL_SELECTED,
            firstKey: firstKey,
            secondKey: secondKey,
            value: value
        };
  },
};

export default selectedCell;
