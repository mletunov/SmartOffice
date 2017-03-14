import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'


const store = createStore(reducer, {}, applyMiddleware(thunk, createLogger()));

if (module.hot) {
    module.hot.accept('../reducer', () => {
        const nextRootReducer = require('../reducer')
        store.replaceReducer(nextRootReducer)
    })
}

export default store;