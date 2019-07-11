import React, { Component } from "react";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import API from "../utils/API"
import Input from "../components/input"
import Button from "../components/Buttons"
import Searchbar from "../components/searchbar";

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
        API.getrecords()
            .then(res => {
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
    handleSavedButton = event => {

    }

    render() {
        return (
            <div>
                <Navbar />
                <Searchbar />
                <Container>

                    <Row>
                        <Col size="xs-12">
                            {!this.state.restaurants.length ? (
                                <h1 className="text-center">No Restaurant to Display</h1>
                            ) : (
                                    <RestaurantList>
                                        {this.state.restaurants.map(restaurant =>
                                            (
                                                <RestaurantListItem
                                                    key={restaurant._id}>
                                                    
                                                        <strong>
                                                            {restaurant.name}
                                                        </strong>
                                                
                                                                                                      
                                                    <p>address:{restaurant.address}</p>
                                                    rating:{restaurant.rating}
                                                    <a rel="noreferrer noopener" target="_blank" href={restaurant.url}>
                                                     Go to restaurant
                                                         </a>
                                                         <Link to={"/restaurant/" + restaurant._id}>
                                                        <strong>
                                                           Add to Favorite
                                                        </strong>
                                                    </Link>
                                                         
                                            
                                                </RestaurantListItem>
                                            
                                        ))}
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
