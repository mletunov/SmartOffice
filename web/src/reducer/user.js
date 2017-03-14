import { START, SUCCESS, FAIL } from "../constants";

const defaultState = {
    loading: false,
    user: []
}

export default (state = defaultState, action) => {
    const { type, payload, error } = action

    return state
}