import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Layout, List, Avatar, Button } from 'antd';


const { Header, Footer, Sider, Content } = Layout;


class AddView extends Component {

  state = {
    cakes: [],
    isLoading: true
  }

  async componentDidMount() {

  }

  render() {

    const { cakes, isLoading } = this.state;
    
    return (
        <Layout>
          <Header>
            <Link to="/addcake">
              <Button>
              Add New Cake
              </Button>
            </Link>
         </Header>
          <Content>
          
          </Content>
          <Footer>
            Footer
         </Footer>
        </Layout>
  
    );
  }
}

export default AddView;
