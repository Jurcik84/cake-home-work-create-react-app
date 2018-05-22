import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, List, Avatar, Button, Form, Icon, Input, Select, Mention } from 'antd';


import {createCake} from './../http-service'

const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
const { toString } = Mention;

class AddView extends Component {

  state = {
    cake: {
      name: "",
      comment: "",
      yumFactor: "",
      imageUrl: "",
      id: Math.floor((Math.random() * 1000) + 1)
    },
    isLoading: true
  }

  componentDidMount() {
    // To disabled submit button at the beginning.

  }

  onCreateCake = (name, event)=> {
            
      if(name === "name" || name === "imageUrl" || name === "comment"){
          this.setState({
            ...this.state,
            cake: {
              ...this.state.cake,
              [name] : event.target.value
            }
          })
      }

      // Select > option has no event.target.value it has only value 
      if(name==="yumFactor") {
        this.setState({
          ...this.state,
          cake: {
            ...this.state.cake,
            [name] : parseInt(Number(event))
          }
        })
      }
  }

  handleSubmit=(e)=>{

    e.preventDefault();
    
    createCake(this.state.cake)
    .then((response)=>{

      console.log('response', response)

    })
  }

  render() {

    const { isLoading, cake } = this.state;

    console.log(cake)


    return (
      <Layout>
        <Header>
          <Link to="/">
            <Button>
              Return to Home Page
              </Button>
          </Link>
        </Header>
        <Content style={{ width: 440, margin: "auto" }}>
          <Form onSubmit={(e)=>this.handleSubmit(e)} className="login-form">
            <FormItem>
              <Input
                name="name"
                onChange={(e) => this.onCreateCake("name", e)}
                prefix={<Icon type=""
                  style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Enter a name" />
            </FormItem>

            <FormItem>
              <Input
                onChange={(e) => this.onCreateCake("imageUrl", e)}
                prefix={<Icon type=""
                  style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Enter a imageUrl" />
            </FormItem>
            <FormItem>
              <FormItem>
                <Select
                  placeholder="Choose your rating"
                  style={{ width: '32%' }}
                  onChange={(e) => this.onCreateCake("yumFactor", e)}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Input.TextArea
                  style={{ width: '100%', height: 100 }}
                  onChange={(e) => this.onCreateCake("comment", e)}

                />
              </FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
          </Button>
            </FormItem>
          </Form>
        </Content>
        <Footer>
          Footer
         </Footer>
      </Layout>

    );
  }
}

export default AddView;
