import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { PersistGate } from 'redux-persist/es/integration/react';

import '../config/ReactotronConfig';
import { store, persistor } from '../store';
import Theme from './theme';
import Routes from '~/routes';
import history from '~/services/history';
import GlobalStyle from '~/styles/global';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Theme>
                    <Router history={history}>
                        <GlobalStyle />
                        <Routes />
                        <ToastContainer autoClose={3000} />
                    </Router>
                </Theme>
            </PersistGate>
        </Provider>
    );
}

export default App;
