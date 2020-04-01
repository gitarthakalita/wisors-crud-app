import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { inject, observer } from "mobx-react";


@inject("store")
@observer
class Retrieve extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phoneno: ''
        }



    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        const { store } = this.props;

        e.preventDefault();



        axios.get('http://localhost:8080/user/phone', this.state)
            .then(response => {
                console.log(response);
                
                

                if (response.status === 200 && this.state.phoneno === response.data.phone) {
                    store.notification = {
                        type: 'success',
                        message: response.data.status,
                        phone: response.data.phone,

                    };
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
        return (
            <div className="retrieve-container">
                <form className="retrieve-item" onSubmit={this.submitHandler.bind(this)}>
                    <TextField className="rtrv" id="standard-basic" name="phoneno" label="Retrieve by Phone Number" />
                    <Button className="rtrv" variant="contained" color="primary" type="submit" name="submit">Retrieve</Button>
                </form>
                <div className="retrieve-item" onSubmit={this.submitHandler.bind(this)}>

                    <Button className="rtrv" variant="contained" color="standard" type="submit" name="submit">Retrieve All</Button>
                </div>
            </div>
        )
    }
}

export default Retrieve;
