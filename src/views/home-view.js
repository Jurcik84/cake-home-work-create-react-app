import React, { Component } from 'react';

import { Layout, List, Avatar } from 'antd'



const { Header, Footer, Sider, Content } = Layout;

const CAKES_END_POINT = `http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/`;

class HomeView extends Component {

  state = {

    cakes: [],
    isLoading: true
  }

  async componentDidMount() {

    const url = CAKES_END_POINT;

    const resposne = await fetch(url);

    const cakes = await resposne.json();

    this.setState(() => ({
      cakes,
      isLoading: false
    }))

    console.log(cakes)
  }


  render() {

    const { cakes, isLoading } = this.state;
    
    return (
   
        <Layout>
          <Header>
            Header
         </Header>
          <Content>
            <List
              loading={isLoading}
              itemLayout={"horizontal"}
              header={<div>Cake List</div>}
              footer={<div>End Of Cake List</div>}
              dataSource={cakes}
              renderItem={cake => (<List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={cake.imageUrl} />}
                  title={<div>  {cake.name}</div>}

                />
              </List.Item>)}
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
