import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '~/pages/SignIn';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" exact component={SignIn} />
            <Route path="/dashboard" exact component={SignIn} isPrivate />
            <Route path="/profile" exact component={SignIn} isPrivate />
        </Switch>
    );
}
