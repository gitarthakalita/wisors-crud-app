import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import {Link } from 'react-router-dom';
@inject("store")
@observer
class RetrievedData extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="retrieve-container">
                <TextField className="retrieved-item" disabled  label="Phone Number" defaultValue={store.user.phone} />
                <TextField className="retrieved-item" disabled  label="First name" defaultValue={store.user.firstname} />
                <TextField className="retrieved-item" disabled  label="Last name" defaultValue={store.user.lastname} />
                <TextField className="retrieved-item" disabled  label="state" defaultValue={store.user.state} />
                <TextField className="retrieved-item" disabled  label="Country" defaultValue={store.user.country} />
                <TextField className="retrieved-item" disabled  label="Email" defaultValue={store.user.email} />
                <TextField className="retrieved-item" disabled  label="Street numberr" defaultValue={store.user.streetnumber} />


                <div className="btn-ok">
                    <Link to='/'>
                        <Button variant="outlined" color="secondary" className="goback">
                            Go Back
                </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default RetrievedData;



// id="standard-disabled"