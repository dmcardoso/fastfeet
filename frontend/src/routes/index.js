import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Deliveries from '~/pages/Deliveries';
import SignIn from '~/pages/SignIn';

export default function Routes() {
    return (
        <Switch>
            <Route path="/deliveries" component={Deliveries} isPrivate />
            <Route path="/dashboard" exact component={SignIn} isPrivate />
            <Route path="/profile" exact component={SignIn} isPrivate />
            <Route path="/" exact component={SignIn} />
        </Switch>
    );
}
