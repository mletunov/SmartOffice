import React, {Component} from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Provider } from "react-redux";
import store from "./store";
import IntlWrapper from "./intl/IntlWrapper";

import Root from "./RouteHandlers/root";

render(
    <Provider store={store}>
      <IntlWrapper>
          {routes}
      </IntlWrapper>
    </Provider>,
    document.getElementById('app')
)
