import React from 'react';
// import { useParams } from "react-router-dom";

import { inject, observer } from "mobx-react";
import { Link } from 'react-router-dom';

import {Button} from '@material-ui/core';

@inject("store")
@observer

class FormSuccess extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const { store } = this.props;
        return (
            <div className="form-success-container">
                <div className="success">
                    {store.notification.message}
                </div>

                <div className="submit-data">
                    <div className="submit-data-item">
                        User has been registered using phone number  <span>
                            {store.notification.phone}
                        </span> 
                    </div>


                </div>

                <div className="btn-ok">
                    <Link to='/'>
                        <Button variant="outlined" color="secondary" className="goback">
                            OK
                </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default FormSuccess;