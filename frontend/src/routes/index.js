import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Deliveries from '~/pages/Deliveries';
import Delivery from '~/pages/Delivery';
import Deliveryman from '~/pages/Deliveryman';
import Deliverymans from '~/pages/Deliverymans';
import Problems from '~/pages/Problems';
import Recipient from '~/pages/Recipient';
import Recipients from '~/pages/Recipients';
import SignIn from '~/pages/SignIn';

export default function Routes() {
    return (
        <Switch>
            <Route path="/deliveries/new" component={Delivery} isPrivate />
            <Route path="/deliveries/:id" component={Delivery} isPrivate />
            <Route path="/deliveries" component={Deliveries} isPrivate />
            <Route path="/deliverymans/new" component={Deliveryman} isPrivate />
            <Route path="/deliverymans/:id" component={Deliveryman} isPrivate />
            <Route path="/deliverymans" component={Deliverymans} isPrivate />
            <Route path="/recipients/new" component={Recipient} isPrivate />
            <Route path="/recipients/:id" component={Recipient} isPrivate />
            <Route path="/recipients" component={Recipients} isPrivate />
            <Route path="/problems" component={Problems} isPrivate />
            <Route path="/profile" exact component={SignIn} isPrivate />
            <Route path="/" exact component={SignIn} />
        </Switch>
    );
}
