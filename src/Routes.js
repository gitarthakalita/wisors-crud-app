import React from 'react'

import { Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Homepage from './layouts/homepage/homepage';

export default function Routes() {
    return (
        <Switch>
            <Redirect exact from="/" to="/homepage" />
            <Route path="/homepage" component={Homepage} />
            {/* <Route path="/registration-form" component={} /> */}

        </Switch>
    )
}
