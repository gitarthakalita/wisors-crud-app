import React, { Component } from 'react'


import axios from 'axios';
import { inject, observer } from "mobx-react";
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import {Button} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

@inject("store")
@observer
class Update extends Component {

  constructor(props) {
      super(props);

      this.state = {
          mobile: '',
      }


  }


//   handleChange = (event) => {
//     console.log(event.target.value);
//   };

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



        axios.get(`http://localhost:8080/user/phone?primaryPhone=${mobile} `, this.state)
            .then(response => {
                console.log(response);
                if (response.status === 200 ) {
                    store.notification = {
                        type: 'success',
                        message: response.data.status,
                        // phone: response.data.phone,
                    };
                    this.props.store.user = response.data;
                    this.props.history.push(`/updated-data`);
                    
                } if (response.status === null) {
                    this.props.history.push(`/404`);
                    console.log('Api error or bad request');
                } if (response.status === 200 && response.data.phone === "") {
                    store.notification = {
                        type: 'invalid',
                        message: `${mobile} ${response.data.status} , No data available`
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
            <div className="update-container">
               

                <form className="update-item" onSubmit={this.submitHandler.bind(this)}>
                <InputLabel id="demo-simple-select-label">Phone</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.mobile}
                    onChange={this.handleChange.bind(this)}
                  >
                  {store.mobile.map(no => <MenuItem value={no}>{no}</MenuItem>)}


                  </Select>
                    <Button className="update-btn" variant="contained" color="primary" type="submit" name="submit">Update Fields</Button>
                </form>
            </div>
        )
    }
}

export default Update;
