import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Api from './api';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

// we make use of this react library to configure connection to online dhis2 
//so that we can have access to the dashboards
const apiVersion = 30;
// const developmentServer = 'http://41.70.35.25/dhis/';
const developmentServer = 'https://play.dhis2.org/dev'
const root = document.getElementById('root');

const withBaseUrl = baseUrl => {
    Api.setConfig({
        baseUrl: `${baseUrl}/api/${apiVersion}`,
    });

    ReactDOM.render(<App />, root);
};

withBaseUrl(developmentServer);
