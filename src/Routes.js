import React from 'react'

import { Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Homepage from './layouts/homepage/homepage';
import RegistrationForm from './containers/registration-form/registration-form';
import FormSuccess from './containers/success-status/success-status';
import Retrieve from './containers/retrieve/retrieve';
import RetrievedData from './containers/retrieve/retrieved-data';
import Update from './containers/update/update';
import UpdateData from './containers/update/updated-data';
import Delete from './containers/delete/delete';
import DeleteSuccess from './containers/delete/delete-success';
import UpdateSuccess from './containers/update/update-success';

export default function Routes() {
    return (
        <Switch>
            <Redirect exact from="/" to="/homepage" />
            <Route path="/homepage" component={Homepage} />
            <Route path="/registration" component={RegistrationForm} />
            <Route  path='/thank-you'  component={FormSuccess} />
            <Route  path='/retrieve'  component={Retrieve} />
            <Route  path='/retrieved-data'  component={RetrievedData} />
            <Route  path='/update'  component={Update} />
            <Route  path='/updated-data'  component={UpdateData} />
            <Route  path='/update-success'  component={UpdateSuccess} />

            <Route  path='/delete'  component={Delete} />
            <Route  path='/delete-success'  component={DeleteSuccess} />

        </Switch>
    )
}
