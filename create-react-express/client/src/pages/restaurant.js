import React, { Component } from "react";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import API from "../utils/API"
import DeleteBtn from "../components/DeleteBtn"
import UpdateBtn from "../components/updateBtn"
import Searchbar2 from "../components/searchbar2"

import "./restaurant.css"



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
                this.setState({ restaurants: res.data,name:"",url:"",address:"",rating:"",review:""})
            }
            )
            .catch(err => console.log(err));
    };

    deleteRecord = id => {
        API.deleterecord(id)
            .then(res => this.loadRes())
            .catch(err => console.log(err));
    };

    /*updateRecord = id => {
        API.updaterecord(id)
            .then(res => this.loadRes())
            .catch(err => console.log(err));
    };*/
       


    

    render() {
        return (
            <div>
                <Navbar />
                <Searchbar2 />
                

                   
                        
                      
                        
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


                                                    <p>Address:{restaurant.address}</p>
                                                    <p>Rating:{restaurant.rating}</p>
                                                    <p> Review:{restaurant.review}
                                                    </p>
                                                    <a rel="noreferrer noopener" target="_blank" href={restaurant.url}>
                                                       <strong>Go to restaurant</strong> 
                                                         </a>
                                                    <Link to={"/restaurant/" + restaurant._id}>
                                                        <p>
                                                            Restaurant Details
                                                            
                                                        </p>
                                                    </Link>
                                                    
                                                   
                                                </RestaurantListItem>
                                                

                                            ))}
                                    </RestaurantList>
                                )}
                                
                        
                    
                
            </div>
        );
    }
}

export default Restaurant;
