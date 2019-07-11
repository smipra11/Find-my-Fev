import React, { Component } from "react";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

import API from "../utils/API";

class Favorite extends Component {
    state = {
        restaurant: {}
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getrecord(this.props.match.params.id)
            .then(res => this.setState({ restaurant: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Navbar/>
            <Container>
                <Row>
                    <Col size="md-6">
                        <h5> {this.state.restaurant.name}</h5>
                        <h5> {this.state.restaurant.address}</h5>
                        <h5> {this.state.restaurant.rating}</h5>
                    </Col>
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

