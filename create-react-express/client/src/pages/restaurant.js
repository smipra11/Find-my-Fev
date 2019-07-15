import React, { Component } from "react";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import API from "../utils/API"
import DeleteBtn from "../components/DeleteBtn"


import Searchbar from "../components/searchbar";
import { Input, TextArea, FormBtn } from "../components/Form";

import { RestaurantList, RestaurantListItem } from "../components/RestaurantList"

import { Col, Row, Container } from "../components/Grid";


class Restaurant extends Component {
    state = {
        restaurants: [],
        name: "",
        url: "",
        address: "",
        rating: "",
        review: ""

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
                this.setState({ restaurants: res.data,name:"",url:"",address:"",rating:""})
            }
            )
            .catch(err => console.log(err));
    };

    deleteRecord = id => {
        API.deleterecord(id)
            .then(res => this.loadRes())
            .catch(err => console.log(err));
    };

    //updateRecord = id =>{
       // API.updateRecord

    //}


    

    render() {
        return (
            <div>
                <Navbar />
                <Searchbar />
                <Container>

                    <Row>
                        

                        <Col size="md-8">
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
                                                    
                                                    <DeleteBtn onClick={() => this.deleteRecord(restaurant._id
                        )} />

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
