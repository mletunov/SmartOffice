import { combineReducers } from "redux";
import user from "./user";
import selectedCell from "./selectedCell";
import intl from "../intl/IntlReducer";

export default combineReducers({
    user,
    intl,
    selectedCell
});
