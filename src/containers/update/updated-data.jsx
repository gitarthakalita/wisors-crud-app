import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {USER_URL } from '../../config/api/base.js';

import axios from 'axios';
@inject("store")
@observer
class UpdatedData extends Component {


  constructor(props) {
    super(props);

    this.state = {
        mobile: '',

    }


}


// handleChange = (event) => {
//   console.log(event.target.value);
// };
handleChange = (event) => {
    this.setState({mobile:event.target.value})

 };




  changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
      const { store } = this.props;
      const { mobile } = this.state;

      e.preventDefault();




      // primaryPhone=${this.state.mobile}

      axios.put(`${USER_URL.update}?primaryPhone=${mobile} `, this.state)
          .then(response => {
              console.log(response);
              console.log(response.data.status);
              let resdata = response.data.status.split(' ');

              if (response.status === 200 && resdata[1] === "Successfull") {
                  store.notification = {
                      type: 'success',
                      message: `Phone no   ${mobile}  ${response.data.status}  `,
                      // phone: response.data.phone,
                  };
                  this.props.store.user = response.data;
                  this.props.history.push(`/update-success`);
              } if (response.status === null) {
                  this.props.history.push(`/404`);
                  console.log('Api error or bad request');
              } if (response.status === 200 &&  resdata[1] === "NotSuccessfull") {
                store.notification = {
                    type: 'invalid',
                    message: 'Not a valid Phone No'
                };
                this.props.history.push('/retrieved-failed');
            }
          })
          .catch(error => {
              console.log(error);
          })
  }




    render() {
        const { store } = this.props;
        return (
            <form className="updated-container" onSubmit={this.submitHandler.bind(this)}>
                <p>Phone number : {store.notification.phone}</p>
                <TextField className="update-data-item" label="Phone Number" defaultValue={store.user.phone} onChange={this.handleChange.bind(this)} />
                <TextField className="update-data-item" label="User Type" defaultValue={store.user.usertype} />
                <TextField className="update-data-item" label="First name" defaultValue={store.user.firstname} />
                <TextField className="update-data-item" label="Last name" defaultValue={store.user.lastname} />
                <TextField className="update-data-item" label="Address Line 1" defaultValue={store.user.addressline1} />
                <TextField className="update-data-item" label="Address Line 2" defaultValue={store.user.addressline2} />
                <TextField className="update-data-item" label="City" defaultValue={store.user.city} />
                <TextField className="update-data-item" label="State" defaultValue={store.user.state} />
                <TextField className="update-data-item" label="Country" defaultValue={store.user.country} />
                <TextField className="update-data-item" label="Pincode" defaultValue={store.user.pin} />
                <TextField className="update-data-item" label="Email" defaultValue={store.user.email} />
                <TextField className="update-data-item" label="Subscription Level" defaultValue={store.user.subscriptionlevel} />
                <TextField className="update-data-item" label="Date Of Birth" defaultValue={store.user.dob} />
                <TextField className="update-data-item" label="Gender" defaultValue={store.user.gender} />
                <TextField className="update-data-item" label="Group" defaultValue={store.user.groupid} />
                <TextField className="update-data-item" label="Address Type" defaultValue={store.user.addresstype} />


                <Button className="update-btn update-data-item" variant="contained" color="primary" type="submit" name="submit">Update</Button>
            </form>
        )
    }
}

export default UpdatedData;
