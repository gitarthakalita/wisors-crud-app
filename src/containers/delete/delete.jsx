import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { inject, observer } from "mobx-react";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
@inject("store")
@observer
 class Delete extends Component {

  constructor(props) {
      super(props);

      this.state = {
          mobile: '',
      }


  }
  changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
      const { store } = this.props;
      const { mobile } = this.state;

      e.preventDefault();


      // const primaryPhone = store.notification.phone;

      axios.delete(`http://localhost:8080/user/registration/delete/phone?${mobile}`, this.state)
          .then(response => {
              console.log(response);
              if (response.status === 200) {
                  store.notification = {
                      type: 'success',
                      message: response.data.status,
                      phone: response.data.phone
                    };
                  let index = store.mobile.indexOf(mobile);
                  store.mobile.splice(index,1);
                  store.mobile.push(response.data.phone);
                  this.props.history.push(`/delete-success`);
                //   alert(response.data.status);

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
      const { mobile } = this.state;
        return (
          <div className="retrieve-container">
              <form className="retrieve-item" onSubmit={this.submitHandler.bind(this)}>
                  <InputLabel id="demo-simple-select-label">select Phone of the user to delete</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.mobile}
                      onChange={this.handleChange}
                    >
                    {store.mobile.map(no => <MenuItem value={no}>{no}</MenuItem>)}


                    </Select>
                <Button className="rtrv" variant="contained" color="secondary" type="submit" name="submit">delete</Button>
              </form>
              </div>
        )
    }
}

export default Delete;
