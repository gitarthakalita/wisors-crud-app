// import React from 'react';


// import axios from 'axios';
// import { inject, observer } from "mobx-react";
// import {Button} from '@material-ui/core';
// @inject("store")
// @observer
// class UpdateForm extends React.Component {

//         constructor(props) {
//                 super(props);

//                 this.state = {

//                         firstname: '',
//                         lastname: '',
//                         email: '',
//                         phone: '',
//                         streetnumber: '',
//                         streetname: '',
//                         city: '',
//                         state: '',
//                         country: '',
//                         servicename: "",
//                         servicedescription: "",
//                         plane: '',
//                         cardnumber: '',
//                         nameoncard: '',
//                         expirydate: '',
//                         billingaddress: ''
//                 }
//         }

//         // handleChangeForServiceName = (servicename) => {
//         //         this.setState({ servicename });
//         // }

//         // handleChangeForServiceDescription = (servicename) => {
//         //         this.setState({ servicedescription: servicename });
//         // }

//         changeHandler = (e) => {
//                 this.setState({ [e.target.name]: e.target.value })
//         }

//         submitHandler = (e) => {
//                 const { store } = this.props;

//                 e.preventDefault();

//                 // user/registration/create
//                 // http://localhost:8080/user/kafka/publishMsg

//                 axios.post('http://localhost:8080/user/registration/create', this.state)
//                         .then(response => {   
//                                 console.log(response);
                                                              
//                         if(response.status === 200){
//                                 store.notification = {type: 'success', message: response.data.status, phone: response.data.phone};
//                                 this.props.history.push(`/thank-you`);      
//                         } if(response.status === null) {
//                                 this.props.history.push(`/404`);      
//                                 console.log('Api error or bad request');      
//                         }
//                         })
//                         .catch(error => {
//                                 console.log(error);
//                         })
//         }

//         render() {
//                 // const { store } = this.props;

//                 const { firstname, lastname, email, phone, streetnumber, streetname, city, state, country, servicename, servicedescription, plane, cardnumber, nameoncard, expirydate, billingaddress } = this.state;

//                 return (
//                         <div className="registration-form-container">

//                                 <div className="form-heading">
//                                         <h1>Registration Form</h1>
//                                 </div>

//                                 <form className="form-container" onSubmit={this.submitHandler.bind(this)} >


//                                         <div className="group-form-container">
//                                                 <div className="group-form heading">Personal Information </div>

//                                                 <div className="group-form item">


//                                                         <div className="form-group">
//                                                                 <label className="form-item">First Name</label>
//                                                                 <input className="form-item" type="text" name="firstname" formNoValidate placeholder="First Name" value={firstname} onChange={this.changeHandler} />
//                                                         </div>

//                                                         <div className="form-group">
//                                                                 <label className="form-item">Last Name</label>
//                                                                 <input className="form-item" type="text" name="lastname" formNoValidate placeholder="Last Name" value={lastname} onChange={this.changeHandler} />
//                                                         </div>

//                                                         <div className="form-group">
//                                                                 <label className="form-item">Email</label>
//                                                                 <input className="form-item" type="text" name="email" formNoValidate placeholder="Email" value={email} onChange={this.changeHandler} />
//                                                         </div>

//                                                         <div className="form-group">
//                                                                 <label className="form-item"> Phone Number </label>
//                                                                 <input className="form-item" type="text"  name="phone" formNoValidate placeholder="Phone Number" value={phone} onChange={this.changeHandler} />
//                                                         </div>

//                                                         <div className="form-group">
//                                                                 <label className="form-item"> Street Number </label>
//                                                                 <input className="form-item" type="text" name="streetnumber" formNoValidate placeholder="Street Number" value={streetnumber} onChange={this.changeHandler} />
//                                                         </div>

//                                                         <div className="form-group">
//                                                                 <label className="form-item"> Street Name </label>
//                                                                 <input className="form-item" type="text" name="streetname" formNoValidate placeholder="Street Name" value={streetname} onChange={this.changeHandler} />
//                                                         </div>

//                                                         <div className="form-group">
//                                                                 <label className="form-item"> City </label>
//                                                                 <input className="form-item" type="text" name="city" formNoValidate placeholder="City" value={city} onChange={this.changeHandler} />
//                                                         </div>

//                                                         <div className="form-group">
//                                                                 <label className="form-item"> State </label>
//                                                                 <input className="form-item" type="text" name="state" formNoValidate placeholder="State" value={state} onChange={this.changeHandler} />
//                                                         </div>

//                                                         <div className="form-group">
//                                                                 <label className="form-item"> Country </label>
//                                                                 <input className="form-item" type="text" name="country" formNoValidate placeholder="Country" value={country} onChange={this.changeHandler} />
//                                                         </div>
//                                                 </div>
//                                         </div>

//                                         <div className="group-form-container">
//                                                 <div className="group-form heading">Service Information </div>

//                                                 <div className="group-form item">
//                                                 <div className="form-group">
//                                                 <label className="form-item"> Service Name </label>
//                                                 <select className="form-item" type="dropdown"

//                                                         name="servicename"  defaultValue={servicename} onChange={this.changeHandler} >

//                                                         <option   value="selectservicecategory">Select a Service Category</option>
//                                                         <option value="healthcare">Health Care</option>
//                                                         {/* <option value="education">Education</option>
//                                                         <option value="financialservice">Financial Services</option> */}
//                                                 </select>
//                                         </div>
//                                         <div className="form-group">
//                                                 <label className="form-item"> Service Description </label>
//                                                 <select className="form-item" type="dropdown"

//                                                         name="servicedescription" defaultValue={servicedescription} onChange={this.changeHandler} >

//                                                         <option  value="selectservice">Select a Service</option>
//                                                         <option value="wisorsbasic">Diabetic Test</option>
//                                                         <option value="wisorsplus">Thyroid Test</option>
//                                                         <option value="wisorspremium">Blood Test</option>
//                                                 </select>
//                                         </div>
//                                         {/* Do not change this */}
//                                         <div className="form-group">
//                                                 <label className="form-item"> Service Plans </label>
//                                                 <select className="form-item" type="dropdown"

//                                                         name="plane" value={plane} onChange={this.changeHandler} >

//                                                         <option defaultValue='selected' value="selectplan">Select a Plan</option>
//                                                         <option value="wisorsbasic">Wisors Basic</option>
//                                                         <option value="wisorsplus">Wisors Plus</option>
//                                                         <option value="wisorspremium">Wisors Premium</option>
//                                                 </select>
//                                         </div>

//                                                 </div>

//                                         </div>

//                                         <div className="group-form-container">
//                                                 <div className="group-form heading">Payment Information </div>

//                                                 <div className="group-form item">

//                                                 </div>

//                                         </div>


//                                         <div className="form-group">
//                                                 <label className="form-item"> Card Number </label>
//                                                 <input className="form-item" type="text" name="cardnumber" formNoValidate placeholder="Card Number" maxLength="12" pattern="\d*" value={cardnumber} onChange={this.changeHandler} />
//                                         </div>

//                                         <div className="form-group">
//                                                 <label className="form-item"> Name on card </label>
//                                                 <input className="form-item" type="text" name="nameoncard" formNoValidate placeholder="Name on Card" value={nameoncard} onChange={this.changeHandler} />
//                                         </div>

//                                         <div className="form-group">
//                                                 <label className="form-item"> Expiry Date </label>
//                                                 <input className="form-item" type="date" name="expirydate" value={expirydate} onChange={this.changeHandler} />
//                                         </div>

//                                         <div className="form-group">
//                                                 <label className="form-item"> Billing Address </label>
//                                                 <input className="form-item" type="text" name="billingaddress" formNoValidate placeholder="Billing Address" value={billingaddress} onChange={this.changeHandler} />
//                                         </div>

//                                         <div className="form-submit">
//                                                 <Button variant="contained" color="primary" type="submit" name="submit"  >Sign Up</Button>
//                                         </div>


//                                 </form>

//                         </div>
//                 )
//         }
// }


// export default UpdateForm;