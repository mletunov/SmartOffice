import { combineReducers } from "redux";
import user from "./user";
import intl from "../intl/IntlReducer";

export default combineReducers({
    user,
    intl
});
