import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Layout, List, Avatar, Button } from 'antd';


import {fetchAllCakes, fetchCakeById} from './../http-service'


const { Header, Footer, Sider, Content } = Layout;


class HomeView extends Component {

  state = {

    cakes: [],
    isLoading: true
  }

  componentDidMount() {

    fetchAllCakes()
    .then(cakes=>this.setState((prevState) => ({
      cakes,
      isLoading: false
    })))
    .catch(error=>error);  
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
          <Content style={{width: 660, margin: "auto"}}>
            <List
              loading={isLoading}
              itemLayout={"horizontal"}
              header={<div>Cake List</div>}
              footer={<div>End Of Cake List</div>}
              dataSource={cakes}
              renderItem={cake => (<Link  to={`/detail/${cake.id}`}>
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={cake.imageUrl} />}
                  title={<div>  {cake.name}</div>}
                />
              </List.Item>
              </Link>)}
            />
          </Content>
          <Footer>
            Footer
         </Footer>
        </Layout>
  
    );
  }
}

export default HomeView;
