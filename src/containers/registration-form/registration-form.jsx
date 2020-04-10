import React from 'react';
import axios from 'axios';
import { inject, observer } from "mobx-react";
import { Button } from '@material-ui/core';
import { USER_URL } from '../../config/api/base.js';



@inject("store")
@observer
class RegistrationForm extends React.Component {

        constructor(props) {
                super(props);

                this.state = {

                        usertype: "",
                        firstname: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        addressline1: '',
                        addressline2: '',
                        city: '',
                        state: '',
                        pin: '',
                        country: '',
                        subscriptionlevel: "",
                        gender: "",
                        dob: '',
                        groupid: '',
                        addresstype: ''
                }
        }


        changeHandler = (e) => {
                this.setState({ [e.target.name]: e.target.value })
        }

        submitHandler = (e) => {
                const { store } = this.props;

                e.preventDefault();

                // user/registration/create
                // http://localhost:8080/user/kafka/publishMsg

                axios.post(`${USER_URL.create}`, this.state)
                        .then(response => {
                                console.log(response);

                                if (response.status === 200) {
                                        store.notification = { type: 'success', message: response.data.status, phone: response.data.phone };
                                        store.mobile.push(response.data.phone);
                                        this.props.history.push(`/thank-you`);
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
                // const { store } = this.props;

                const { usertype, firstname, lastname, email, phone, addressline1, addressline2, city, state, pin, country, subscriptionlevel, dob, gender, groupid, addresstype } = this.state;

                return (
                        <div className="registration-form-container">

                                <div className="form-heading">
                                        <h1>Registration Form</h1>
                                </div>

                                <form className="form-container" onSubmit={this.submitHandler.bind(this)} >


                                        <div className="group-form-container">
                                                {/* <div className="group-form heading">Personal Information </div> */}

                                                <div className="group-form item">


                                                        <div className="form-group">
                                                                <label className="form-item"> User Type </label>
                                                                <select className="form-item" type="dropdown"

                                                                        name="usertype" defaultValue={usertype} onChange={this.changeHandler} >

                                                                        <option value="selectusertype">Select User Type</option>
                                                                        <option value="admin">Admin</option>
                                                                        <option value="consumer">Consumer</option>

                                                                </select>
                                                        </div>



                                                        <div className="form-group">
                                                                <label className="form-item">First Name</label>
                                                                <input className="form-item" type="text" name="firstname" formNoValidate placeholder="First Name" value={firstname} onChange={this.changeHandler} />
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item">Last Name</label>
                                                                <input className="form-item" type="text" name="lastname" formNoValidate placeholder="Last Name" value={lastname} onChange={this.changeHandler} />
                                                        </div>


                                                        <div className="form-group">
                                                                <label className="form-item"> Address Line 1 </label>
                                                                <input className="form-item" type="text" name="addressline1" formNoValidate placeholder="Address Line 1" value={addressline1} onChange={this.changeHandler} />
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item"> Address Line 2  </label>
                                                                <input className="form-item" type="text" name="addressline2" formNoValidate placeholder="Address Line 2" value={addressline2} onChange={this.changeHandler} />
                                                        </div>



                                                        <div className="form-group">
                                                                <label className="form-item"> City </label>
                                                                <input className="form-item" type="text" name="city" formNoValidate placeholder="City" value={city} onChange={this.changeHandler} />
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item"> State </label>
                                                                <input className="form-item" type="text" name="state" formNoValidate placeholder="State" value={state} onChange={this.changeHandler} />
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item"> Pincode </label>
                                                                <input className="form-item" type="text" name="pin" formNoValidate placeholder="Pincode" value={pin} onChange={this.changeHandler} />
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item"> Country </label>
                                                                <input className="form-item" type="text" name="country" formNoValidate placeholder="Country" value={country} onChange={this.changeHandler} />
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item"> Phone Number </label>
                                                                <input className="form-item" type="text" name="phone" formNoValidate placeholder="Phone Number" value={phone} onChange={this.changeHandler} />
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item">Email</label>
                                                                <input className="form-item" type="text" name="email" formNoValidate placeholder="Email" value={email} onChange={this.changeHandler} />
                                                        </div>



                                                </div>
                                        {/* </div> */}

                                        {/* <div className="group-form-container"> */}


                                                <div className="group-form item">
                                                        <div className="form-group">
                                                                <label className="form-item"> Subscription Level </label>
                                                                <select className="form-item" type="dropdown"

                                                                        name="subscriptionlevel" defaultValue={subscriptionlevel} onChange={this.changeHandler} >

                                                                        <option value="selectsubscriptionlevel">Select a Subscription Level</option>
                                                                        <option value="weakly">Weakly</option>
                                                                        <option value="monthly">Monthly</option>
                                                                        <option value="yearly">Yearly</option>

                                                                </select>
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item"> Date of birth </label>
                                                                <input className="form-item" type="date" name="dob" value={dob} onChange={this.changeHandler} />
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item"> Select Gender </label>
                                                                <select className="form-item" type="dropdown"

                                                                        name="gender" defaultValue={gender} onChange={this.changeHandler} >

                                                                        <option value="selectservice">Select Gender</option>
                                                                        <option value="male">Male</option>
                                                                        <option value="female">Female</option>
                                                                        <option value="other">Other</option>

                                                                </select>
                                                        </div>

                                                        <div className="form-group">
                                                                <label className="form-item"> Select Group </label>
                                                                <select className="form-item" type="dropdown"

                                                                        name="groupid" defaultValue={groupid} onChange={this.changeHandler} >

                                                                        <option value="selectgroup">Select a Group</option>
                                                                        <option value="1">Group 1</option>
                                                                        <option value="2">Group 2</option>
                                                                        <option value="3">Group 3</option>
                                                                        <option value="4">Group 4</option>
                                                                </select>
                                                        </div>
                                                        {/* Do not change this */}
                                                        <div className="form-group">
                                                                <label className="form-item"> Address Type </label>
                                                                <select className="form-item" type="dropdown"

                                                                        name="addresstype" value={addresstype} onChange={this.changeHandler} >

                                                                        <option defaultValue='selected' value="selectaddresstype">Select Address Type</option>
                                                                        <option value="home">Home</option>
                                                                        <option value="office">Office</option>
                                                                        <option value="other">Other</option>
                                                                </select>
                                                        </div>

                                                </div>

                                        </div>


                                        <div className="form-submit">
                                                <Button variant="contained" color="primary" type="submit" name="submit"  >Sign Up</Button>
                                        </div>


                                </form>

                        </div>
                )
        }
}


export default RegistrationForm;
