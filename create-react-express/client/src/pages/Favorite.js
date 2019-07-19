import React, { Component } from "react";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Searchbar from "../components/searchbar";
import DeleteBtn from "../components/DeleteBtn"
import API from "../utils/API";
import "./favorite.css"


class Favorite extends Component {
    state = {
        restaurant: {},
        name: "",
        url: "",
        address: "",
        rating: "",
        review: ""

        
    };

    
    componentDidMount(){
        this.loadRes();
        
    }
    
    loadRes = () => {
        API.getrecord(this.props.match.params.id)
            .then(res => this.setState({ restaurant: res.data }))
            .catch(err => console.log(err));
        }
     
        
        

    
       

    

    render() {
        return (
            <div>
                <Navbar/>
                <Searchbar />
            <Container>
                
                        <h3> Restaurant Details </h3>
                        <div className="image-container">
          <img src={this.state.restaurant.image} alt={this.state.restaurant.name}/>
        </div>
                        <h5> Restaurant Name:{this.state.restaurant.name}</h5>
                        <h5> Address:{this.state.restaurant.address}</h5>
                        <h5> Rating: {this.state.restaurant.rating}</h5>
                        <h5> Review: {this.state.restaurant.review}</h5>

                    
                
                
                    <Link to={"/updateRestaurant/" + this.state.restaurant._id}>
                      <button className="btn btn-primary">Edit user</button>
                    </Link> 
                    
          <Col size="md-2">
            <Link to="/">← Back to Restaurant</Link>
          </Col>
        

            </Container>
            </div>
        )
    }
}
    export default Favorite;

