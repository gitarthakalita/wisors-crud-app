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
                <div className="success">
                    {store.notification.message}
                </div>
                <TextField className="retrieved-item" disabled  label="User Type" defaultValue={store.user.usertype} />
                <TextField className="retrieved-item" disabled  label="Active " defaultValue={store.user.activeflag} />

                              
                <TextField className="retrieved-item" disabled  label="First name" defaultValue={store.user.firstname} />
                <TextField className="retrieved-item" disabled  label="Last name" defaultValue={store.user.lastname} />
                <TextField className="retrieved-item" disabled  label="Address Line 1" defaultValue={store.user.addressline1} />
                <TextField className="retrieved-item" disabled  label="Address Line 2" defaultValue={store.user.addressline2} />
                <TextField className="retrieved-item" disabled  label="state" defaultValue={store.user.state} />
                <TextField className="retrieved-item" disabled  label="Country" defaultValue={store.user.country} />
                <TextField className="retrieved-item" disabled  label="Pincode" defaultValue={store.user.pin} />
                <TextField className="retrieved-item" disabled  label="Phone Number" defaultValue={store.user.phone} />
                <TextField className="retrieved-item" disabled  label="Email" defaultValue={store.user.email} />
                <TextField className="retrieved-item" disabled  label="Subscription Level" defaultValue={store.user.subscriptionlevel} />
                <TextField className="retrieved-item" disabled  label="Date Of Birth" defaultValue={store.user.dob} />
                <TextField className="retrieved-item" disabled  label="Gender" defaultValue={store.user.gender} />
                <TextField className="retrieved-item" disabled  label="Group" defaultValue={store.user.groupid} />
                <TextField className="retrieved-item" disabled  label="Address Type" defaultValue={store.user.addresstype} />

                <TextField className="retrieved-item" disabled  label="Create Date" defaultValue={store.user.createdate} />
                <TextField className="retrieved-item" disabled  label="Update Date" defaultValue={store.user.updatedate} />
                <TextField className="retrieved-item" disabled  label="Inactive Date" defaultValue={store.user.inactivedate} />


                <div className="btn-ok">
                    <Link to='/'>
                        <Button variant="outlined" color="secondary" className="goback">
                            Ok
                </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default RetrievedData;



// id="standard-disabled"