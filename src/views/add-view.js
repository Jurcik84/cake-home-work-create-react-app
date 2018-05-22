import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Layout, List, Avatar, Button, Form, Icon, Input, Select } from 'antd';


import { createCake } from './../http-service';

const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;


class AddView extends Component {

  state = {
    cake: {
      name: "",
      comment: "",
      yumFactor: "",
      imageUrl: "",
    },
    isFormSend: false
  }

  onCreateCake = (name, event) => {

    if (name === "name" || name === "imageUrl" || name === "comment") {
      this.setState({
        ...this.state,
        cake: {
          ...this.state.cake,
          [name]: event.target.value
        }
      })
    }

    // Select > option has no event.target.value it has only value 
    if (name === "yumFactor") {
      this.setState({
        ...this.state,
        cake: {
          ...this.state.cake,
          [name]: parseInt(Number(event))
        }
      })
    }
  }

  handleSubmit = (e) => {

    e.preventDefault();

    // Add random number as id
    const addCakeId = Math.floor((Math.random() * 1000) + 1);

    createCake({ ...this.state.cake, addCakeId })
      .then((response) => {

        if (response) {

          this.setState({
            cake: {
              name: "",
              comment: "",
              yumFactor: "",
              imageUrl: "",
            }
          }, () => setTimeout(() => this.setState({
            isFormSend: true
          }), 2000))
        }
      })
  }

  render() {

    const { isFormSend, cake } = this.state;
    const {
      name,
      comment,
      yumFactor,
      imageUrl } = cake;

    if (isFormSend === true) {

      return <Redirect to={"/"} />;
    }
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

        <h1>Create new Cake</h1>
          <Form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
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
                  placeholder="Drop a comment"

                />
              </FormItem>
              <Button
                disabled={
                  name === "" ||
                  comment === "" ||
                  yumFactor === "" ||
                  imageUrl === ""
                }
                type="primary" htmlType="submit" className="login-form-button">
                Go and make them droll
          </Button>
            </FormItem>
          </Form>
        </Content>
        <Footer>
          Footer  | * All fields must be filled  | * sending button is disabled untill inputs are empty
         </Footer>
      </Layout>

    );
  }
}

export default AddView;
