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
class Retrieve extends Component {

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


        // const primaryPhone = store.notification.phone;

        axios.get(`http://localhost:8080/user/phone?${mobile}`, this.state)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    store.notification = {
                        type: 'success',
                        message: response.data.status
                      };
                    store.user =  response.data;
                    
                    this.props.history.push(`/retrieved-data`);
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
        console.log(store.mobile[0]);
        return (
            <div className="retrieve-container">
                <form className="retrieve-item" onSubmit={this.submitHandler.bind(this)}>
                    <InputLabel id="demo-simple-select-label">Phone</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                      >
                      {store.mobile.map(no => <MenuItem value={no}>{no}</MenuItem>)}


                      </Select>
                  <Button className="rtrv" variant="contained" color="primary" type="submit" name="submit">Retrieve</Button>
                </form>


                <form className="retrieve-item" onSubmit={this.submitHandler.bind(this)}>
                    <p>User with Primary key : {store.notification.phone}</p>
                    <Button className="rtrv" variant="contained" color="secondary" type="submit" name="submit">Retrieve By Primary key</Button>
                </form>

                <div className="retrieve-item" onSubmit={this.submitHandler.bind(this)}>

                    <Button className="rtrv" variant="contained" color="default" type="submit" name="submit">Retrieve All</Button>
                </div>


            </div>
        )
    }
}

export default Retrieve;
