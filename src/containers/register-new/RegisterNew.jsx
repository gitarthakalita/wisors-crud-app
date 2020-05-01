import React from 'react';
import { Steps, Button, message, Layout } from 'antd';
import Registration from '../../components/register-form/Registration';
import Group from '../../components/register-form/Group';
import Address from '../../components/register-form/Address';

import { inject, observer } from "mobx-react";

import axios from 'axios';

import { USER_URL } from '../../config/api/base.js';




const { Step } = Steps;
const { Content, Footer } = Layout;

const steps = [
    {
        id: 0,
        title: 'Registration',
        content: 'First-content',
    },
    {
        id: 1,
        title: 'Address',
        content: 'Second-content',
    },
    {
        id: 2,
        title: 'Group',
        content: 'Last-content',
    },
];


@inject("store")
@observer
class RegisterNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,


            register_data: {

                wsrUserAccount: {

                    usertype: "",
                    firstname: '',
                    lastname: '',
                    phone: '',
                    email: '',
                    password: '',
                    activeflag: '',
                    dob: '',
                    gender: ''

                },
                wsrUserAddressList: [
                    {
                        addresstype: '',
                        addressline1: '',
                        addressline2: '',
                        phone: '',
                        state: '',
                        country: '',
                        postalcode: '',
                        email: '',
                        activeflag: ''
                    }
                ],

                wsrUserGroupTypeList: [
                    {
                        group_name: '',
                        wsrUserGroupXref: {
                            wsrUserInGroup: {
                                group_admin: ''
                            }
                        }
                    }
                ]


            }
        };
    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        const { store } = this.props;

        e.preventDefault();

        // user/registration/create
        // http://localhost:8080/user/kafka/publishMsg

        axios.post(`${USER_URL.create}`, JSON.stringify(this.state))
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
                console.log(JSON.stringify(this.state));
                // alert(JSON.stringify(this.state)+ "\n");
            })
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {

        const { current, usertype, firstname, lastname, email, phone, addressline1, addressline2, city, state, pin, country, subscriptionlevel, dob, gender, groupid, addresstype } = this.state;
        {
            console.log(this.state);
        }
        return (
            <Layout className="layout" style={{ height: '100vh' }}>

                <Content style={{ padding: '1rem' }}>


                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>

                    {current === 0 && (
                        <Registration />
                    )}
                    {current === 1 && (
                        <Address />
                    )}
                    {current === 2 && (
                        <Group />
                    )}


                </Content>
                <Footer >
                    {/* <div className="steps-content">{steps[current].content}</div> */}
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => this.next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
                </Footer>
            </Layout>
        );
    }
}

export default RegisterNew;
