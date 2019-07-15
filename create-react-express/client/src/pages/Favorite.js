import React, { Component } from "react";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Searchbar from "../components/searchbar";
import DeleteBtn from "../components/DeleteBtn"
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";


class Favorite extends Component {
    state = {
        restaurant: {},
        
    };

    
    componentDidMount(){
        this.loadRes();
        
    }
    loadRes = () => {
        API.getrecord(this.props.match.params.id)
            .then(res => this.setState({ restaurant: res.data }))
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
                                        value={this.state.restaurant.name}
                                        onChange={this.handleInputChange}
                                        name="address"
                                        placeholder=" address (required)"
                                    />
                                    <Input
                                        value={this.state.restaurant.name}
                                        onChange={this.handleInputChange}
                                        name="rating"
                                        placeholder=" rating (required)"
                                    />
    
    
                                    <FormBtn
                                        disabled={!(this.state.name && this.state.url && this.state.address && this.state.rating)}
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
    export default Favorite

    

    /*render() {
        return (
            <div>
                <Navbar/>
                <Searchbar />
            <Container>
                <Row>
                    <Col size="md-6">
                        <h3> Restaurant Details </h3>
                        <h5> {this.state.restaurant.name}</h5>
                        <h5> {this.state.restaurant.address}</h5>
                        <h5> {this.state.restaurant.rating}</h5>
                    </Col>
                    <Link to={"/updateRestaurant"}>
                      <button className="btn btn-primary">Edit user</button>
                    </Link> 
                    
                </Row>
                <Row>
          <Col size="md-2">
            <Link to="/">← Back to Restaurant</Link>
          </Col>
        </Row>

            </Container>
            </div>
        )
    }
}
    export default Favorite;*/

