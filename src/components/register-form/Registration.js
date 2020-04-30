import React, { useState, useEffect } from 'react';
import { Form, Input, Button ,Layout, InputNumber ,Select, DatePicker } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

class Registration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

   onFinish = values => {
    console.log('Finish:', values);
  };
render(){
 //  const [form] = Form.useForm();
 //  const [, forceUpdate] = useState();
 //
 // // To disable submit button at the beginning.
 // useEffect(() => {
 //   forceUpdate({});
 // }, []);

  return (
    <Layout style={{padding: '10vh'}} >
    <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'fname']} label="First Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'lname']} label="Last Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'phone']} label="Phone" rules={[{ required: true,type: 'number' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'password']} label="Password" rules={[{ type: 'password', }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'gender']} label="Gender" rules={[{ required: true }]}>
       <Select defaultValue="Option1">
         <Option value="Option1">Male</Option>
         <Option value="Option2">Female</Option>
         <Option value="Option2">Others</Option>
       </Select>
       </Form.Item>
       <Form.Item name={['user', 'dob']} label="Date of birth" rules={[{ required: true }]}>
         <DatePicker />
       </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </Layout>
  );
}
};

export default Registration;
