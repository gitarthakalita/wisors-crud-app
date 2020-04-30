import React from 'react';
import { Steps, Button, message , Layout, Menu} from 'antd';
import  Registration  from '../../components/register-form/Registration';
import  Group  from '../../components/register-form/Group';
import  Address  from '../../components/register-form/Address';


const { Step } = Steps;
const { Header, Content, Footer } = Layout;
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
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
    const { current } = this.state;
    return (
      <Layout className="layout" style={{ height: '100vh'}}>
   <Header>
     <div className="logo" />
     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
       <Menu.Item key="1">nav 1</Menu.Item>
       <Menu.Item key="2">nav 2</Menu.Item>
       <Menu.Item key="3">nav 3</Menu.Item>
     </Menu>
   </Header>
   <Content style={{ padding: '5vw 10vh' }}>


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
        {current == 2 && (
          <Group />
        )}


      </Content>
      <Footer >
      <div className="steps-content">{steps[current].content}</div>
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

export default App;
