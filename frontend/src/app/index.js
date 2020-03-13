import React from 'react';
import { Router } from 'react-router-dom';

import Theme from './theme';
import Routes from '~/routes';
import history from '~/services/history';
import GlobalStyle from '~/styles/global';

function App() {
    return (
        <Theme>
            <Router history={history}>
                <GlobalStyle />
                <Routes />
            </Router>
        </Theme>
    );
}

export default App;
