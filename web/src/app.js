import React, {Component} from 'react';
import { render } from 'react-dom';
import routes from './routes';

import Root from "./RouteHandlers/root";

render(
    routes,
    document.getElementById('app')
)
