import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, List, Avatar, Button, Card } from 'antd';

import { fetchCakeById } from './../http-service';

const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;

class DetailView extends Component {

    state = {

        cake: {},
        isLoading: true
    }

    async componentDidMount() {

        const { match: { params: { id } } } = this.props;

        fetchCakeById(id)
            .then(cake => this.setState((prevState) => ({
                cake,
                isLoading: false
            })))
    }

    render() {

        const { cake, isLoading } = this.state;

        return (
            <Layout>
                <Header>
                    <Link to="/">
                        <Button>
                            Return to Home Page
              </Button>
                    </Link>
                </Header>
                <Content>
                    <Card
                        hoverable
                        style={{ width: 440, textAlign: "center", margin: "auto" }}
                        cover={<img alt="example" src={cake.imageUrl ? cake.imageUrl : "http://sanitationsolutions.net/wp-content/uploads/2015/05/empty-image.png"} />}
                    >
                        <Meta
                            title={cake.name  + "   |   "  + cake.yumFactor }
                            description={cake.comment}

                        />
                    </Card>
                </Content>
                <Footer>
                  {" "}
         </Footer>
            </Layout>
        );
    }
}

export default DetailView;
