import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API"
import Navbar from "../components/Navbar"
import Searchbar from "../components/searchbar"
import Restaurant from "../pages/restaurant"
class Addrestaurant extends Component {
    state = {
        restaurants: [],
        name: "",
        url: "",
        address: "",
        rating: "",
        review: ""

    };

    componentDidMount() {
        this.loadRes();
    }

    // Loads all books  and sets them to this.state.books
    loadRes = () => {
        API.getrecords()
            .then(res => {
                console.log(res.data)
                this.setState({ restaurants: res.data,name:"",url:"",address:"",rating:""})
            }
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.url && this.state.address && this.state.rating) {
            API.saverecord({
                name: this.state.name,
                url: this.state.url,
                address: this.state.address,
                rating: this.state.rating,

            })
                .then(res => this.loadRes())
                .catch(err => console.log(err));
        }

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
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    placeholder="Name(required)"
                                />
                                <Input
                                    value={this.state.url}
                                    onChange={this.handleInputChange}
                                    name="url"
                                    placeholder="url (required)"
                                />
                                <Input
                                    value={this.state.address}
                                    onChange={this.handleInputChange}
                                    name="address"
                                    placeholder=" address (required)"
                                />
                                <Input
                                    value={this.state.rating}
                                    onChange={this.handleInputChange}
                                    name="rating"
                                    placeholder=" rating (required)"
                                />


                                <FormBtn
                                    disabled={!(this.state.name && this.state.url && this.state.address && this.state.rating)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Add new Restaurant
              </FormBtn>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Addrestaurant