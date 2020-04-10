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
import { USER_URL } from '../../config/api/base.js';


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
        this.setState({ mobile: event.target.value })




    };


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        const { store } = this.props;
        const { mobile } = this.state;

        e.preventDefault();


        // const primaryPhone = store.notification.phone;

        axios.get(`${USER_URL.search}?primaryPhone=${mobile}`, this.state)
            .then(response => {
                console.log(response);
                if (response.status === 200 && response.data.phone !== null) {
                    store.notification = {
                        type: 'success',
                        message: response.data.status
                    };
                    store.user = response.data;

                    this.props.history.push(`/retrieved-data`);

                } if (response.status === null) {
                    this.props.history.push(`/404`);
                    console.log('Api error or bad request');

                } if (response.status === 200 && response.data.phone === "") {
                    store.notification = {
                        type: 'invalid',
                        message: `${mobile} is not a valid phone no  for searching`
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
        console.log(store.mobile[0]);
        return (
            <div className="retrieve-container">
                <form className="retrieve-item" onSubmit={this.submitHandler.bind(this)}>
                    <InputLabel id="demo-simple-select-label">Phone</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.mobile}
                        onChange={this.handleChange.bind(this)}
                    >
                        {store.mobile.map(no => <MenuItem  key={no}  value={no}>{no}</MenuItem>)}


                    </Select>
                    <Button className="rtrv" variant="contained" color="primary" type="submit" name="submit">Retrieve</Button>
                </form>



                <div className="retrieve-item" onSubmit={this.submitHandler.bind(this)}>

                    <Button className="rtrv" variant="contained" color="default" type="submit" name="submit">Retrieve All</Button>
                </div>


            </div>
        )
    }
}

export default Retrieve;
