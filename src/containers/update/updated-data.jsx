import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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


handleChange = (event) => {
  console.log(event.target.value);
};



  changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
      const { store } = this.props;
      const { mobile } = this.state;

      e.preventDefault();


      

      // primaryPhone=${this.state.mobile}

      axios.put(`http://localhost:8080/user/registration/update/phone?${mobile} `, this.state)
          .then(response => {
              console.log(response);
              if (response.status === 200 ) {
                  store.notification = {
                      type: 'success',
                      message: response.data.status,
                      // phone: response.data.phone,
                  };
                  this.props.store.user = response.data;
                  this.props.history.push(`/update-success`);
              } if (response.status === null) {
                  this.props.history.push(`/404`);
                  console.log('Api error or bad request');
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
                <TextField className="update-data-item" label="Phone Number" defaultValue={store.user.phone} />
                <TextField className="update-data-item" label="First name" defaultValue={store.user.firstname} />
                <TextField className="update-data-item" label="Last name" defaultValue={store.user.lastname} />
                <TextField className="update-data-item" label="state" defaultValue={store.user.state} />
                <TextField className="update-data-item" label="Country" defaultValue={store.user.country} />
                <TextField className="update-data-item" label="Email" defaultValue={store.user.email} />
                <TextField className="update-data-item" label="Street numberr" defaultValue={store.user.streetnumber} />

                <Button className="update-btn update-data-item" variant="contained" color="primary" type="submit" name="submit">Update</Button>
            </form>
        )
    }
}

export default UpdatedData;
