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
                <Row>
                    <Col size="md-6">
                        <h3> Restaurant Details </h3>
                        <h5> {this.state.restaurant.name}</h5>
                        <h5> {this.state.restaurant.address}</h5>
                        <h5> {this.state.restaurant.rating}</h5>
                    </Col>
                    <Link to={"/updateRestaurant/" + this.state.restaurant._id}>
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
    export default Favorite;

