import React, { Component } from "react";

import API from "../utils/API"
import Input from "../components/input"
import Button from "../components/Buttons"
import { RestaurantList, RestaurantListItem } from "../components/RestaurantList"

import { Col, Row, Container } from "../components/Grid";

class Restaurant extends Component {
    state = {
        restaurants: [],
        
    };

    // When the component mounts, load all books and save them to this.state.books
    componentDidMount() {
        this.loadRes();
    }

    // Loads all books  and sets them to this.state.books
    loadRes = () => {
        API.getrecord()
            .then(res =>{
                console.log(res.data)
                this.setState({ restaurants: res.data })
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

    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="resturantsearch"
                                                value={this.state.recipeSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search For a Recipe"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <Button
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg"
                                            >
                                                Search
                          </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            {!this.state.restaurants.length ? (
                                <h1 className="text-center">No Restaurant to Display</h1>
                            ) : (
                                    <RestaurantList>
                                        {this.state.restaurants.map(restaurant => {
                                            return (
                                                <RestaurantListItem
                                                    key={restaurant.name}
                                                    name={restaurant.name}
                                                    url={restaurant.url}
                                                    address={restaurant.address}
                                                    rating={restaurant.rating}
                                                />
                                            );
                                        })}
                                    </RestaurantList>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Restaurant;




