import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/searchbar";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";


class Update extends Component {
    state = {
        restaurant: {},
        name: "",
        url: "",
        address: "",
        rating: "",
        review: ""

    };


    componentDidMount() {
        this.loadRes();

    }
    loadRes = () => {
        API.getrecord(this.props.match.params.id)
            .then(res => this.setState({ restaurant: res.data,name:"",url:"",address:"",rating:"" }))
                    .catch(err => console.log(err));
            
            

    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        
            API.updaterecord({
                name: this.state.name,
                url: this.state.url,
                address: this.state.address,
                rating: this.state.rating,

            })
                .then(res => this.loadRes())
                .catch(err => console.log(err));
        

    };
    render() {
        return (
            <div>
                <Navbar />
                <Searchbar />
                <Container>

                    <Row>
                        <Col size="md-4">

                            <form>
                                <Input
                                    value={this.state.restaurant.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    placeholder="Name(required)"
                                />
                                <Input
                                    value={this.state.restaurant.url}
                                    onChange={this.handleInputChange}
                                    name="url"
                                    placeholder="url (required)"
                                />
                                <Input
                                    value={this.state.restaurant.address}
                                    onChange={this.handleInputChange}
                                    name="address"
                                    placeholder="address (required)"
                                />
                                <Input
                                    value={this.state.restaurant.rating}
                                    onChange={this.handleInputChange}
                                    name="rating"
                                    placeholder="rating (required)"
                                />


                                <FormBtn
                                    disabled={!(this.state.restaurant.name && this.state.restaurant.url && this.state.restaurant.address && this.state.restaurant.rating)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Save Results
                  </FormBtn>

                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Update;

