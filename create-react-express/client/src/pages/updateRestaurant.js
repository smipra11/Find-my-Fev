import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/searchbar";
import API from "../utils/API";
import axios from "axios"
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import { Redirect } from 'react-router';


class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: "",
            url: "",
            address: "",
            rating: "",
            review: "",
            redirect: false

        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleurlChange = this.handleurlChange.bind(this);
        this.handleaddressChange = this.handleaddressChange.bind(this);
        this.handleratingChange = this.handleratingChange.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }


    componentDidMount() {
        this.loadRes();
    }

    loadRes = () => {
        axios.get(`http://localhost:3000/api/restaurant/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    url: res.data.url,
                    address: res.data.address,
                    rating: res.data.rating,

                })
                console.log(res)
            });
    }





    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handleurlChange(e) {
        this.setState({ url: e.target.value })
    }

    handleaddressChange(e) {
        this.setState({ address: e.target.value })
    }

    handleratingChange(e) {
        this.setState({ rating: e.target.value })
    }


    updateUser(event) {
        event.preventDefault();
        const userUpdate = {
            name: this.state.name,
            url: this.state.url,
            address: this.state.address,
            rating: this.state.rating
        }
        console.log(userUpdate)

        API.updaterecord(this.props.match.params.id, userUpdate)
            .then(res => this.loadRes())
            .catch(err => console.log(err));

            API.saverecord({
                name: this.state.name,
                url: this.state.url,
                address: this.state.address,
                rating: this.state.rating,

            })
                .then(res => this.loadRes())
                .catch(err => console.log(err));
    }

    /* const userUpdate = {
         name: this.state.name,
         url: this.state.url,
         address: this.state.rating,
         rating: this.state.rating
     }
     console.log(userUpdate)
     axios.post(`http://localhost:3000/api/restaurant/${this.props.match.params.id}`, userUpdate)
         .then(res => {
             console.log(res);
             this.setState({ redirect: this.state.redirect === false })
         })
         .catch(err => { console.log(err) });
    }*/

    render() {
        return (
            <div>
                <Navbar />
                <Searchbar />
                <Container>

                    <Row>
                        <Col size="md-4">

                            <form onSubmit={this.updateUser} >
                                <Input
                                    value={this.state.name}
                                    onChange={this.handleNameChange}
                                    name="name"
                                    placeholder="Name(required)"
                                />
                                <Input
                                    value={this.state.url}
                                    onChange={this.handleurlChange}
                                    name="url"
                                    placeholder="url (required)"
                                />
                                <Input
                                    value={this.state.address}
                                    onChange={this.handleaddressChange}
                                    name="address"
                                    placeholder="address (required)"
                                />
                                <Input
                                    value={this.state.rating}
                                    onChange={this.handleratingChange}
                                    name="rating"
                                    placeholder="rating (required)"
                                />


                                <FormBtn>

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

