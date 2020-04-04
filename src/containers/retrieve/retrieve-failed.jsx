import React, { Component } from 'react'
import { inject, observer } from "mobx-react";

import {Button } from '@material-ui/core';

import {Link} from 'react-router-dom';

@inject("store")
@observer
class RetrieveFailed extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="form-success-container">
                  <div className="success">
                    {store.notification.message}
                </div>


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

export default RetrieveFailed;
