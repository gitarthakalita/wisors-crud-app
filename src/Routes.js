import React from 'react'

import { Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Homepage from './layouts/homepage/homepage';
import RegistrationForm from './containers/registration-form/registration-form';
import FormSuccess from './containers/success-status/success-status';
import Retrieve from './containers/retrieve/retrieve';
import RetrievedData from './containers/retrieve/retrieved-data';

export default function Routes() {
    return (
        <Switch>
            <Redirect exact from="/" to="/homepage" />
            <Route path="/homepage" component={Homepage} />
            <Route path="/registration" component={RegistrationForm} />
            <Route  path='/thank-you'  component={FormSuccess} />
            <Route  path='/retrieve'  component={Retrieve} />
            <Route  path='/retrieved-data'  component={RetrievedData} />

        </Switch>
    )
}
