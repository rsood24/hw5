import React, { Component} from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import {submitReview} from "../actions/reviewActions";
import { connect } from 'react-redux';
//import DropdownInput from 'react-dropdown-input';
import { Dropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {withRouter} from "react-router-dom";
import {fetchMovie} from "../actions/movieActions";

class Review extends Component {

    constructor() {
        super();

        this.updateDetails = this.updateDetails.bind(this);
        this.submitAgain = this.submitAgain.bind(this);
        this.review = this.review.bind(this);
        this.state = {
            details: {
                Title: '',
                name: '',
                quote: '',
                rating: 0

            },

        };
    }

    updateDetails(event) {
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    review() {

        //var movie = localStorage.getItem('selectedMovie');
        const {dispatch} = this.props;
        dispatch(submitReview(this.state.details));
    }



    submitAgain(){
        window.location.reload();
    }

    render() {


    return (
    <Form horizontal>
    <FormGroup controlId="Title">
    <Col componentClass={ControlLabel} sm={2}>
    Title:
    </Col>
    <Col sm={10}>
    <FormControl onChange={this.updateDetails} value={this.state.details.Title} type="text"
    placeholder="Movie Title"/>
    </Col>
    </FormGroup>

    <FormGroup controlId="name">
    <Col componentClass={ControlLabel} sm={2}>
    Name:
    </Col>
    <Col sm={10}>
    <FormControl onChange={this.updateDetails} value={this.state.details.name} type="text"
    placeholder="User Name"/>
    </Col>
    </FormGroup>


    <FormGroup controlId="quote">
    <Col componentClass={ControlLabel} sm={2}>
    Review:
    </Col>
    <Col sm={10}>
    <FormControl onChange={this.updateDetails} value={this.state.details.quote} type="text"
    placeholder="Description"/>
    </Col>
    </FormGroup>

        <FormGroup controlId="rating">
            <Col componentClass={ControlLabel} sm={2}>
                Rating:
            </Col>
            <Col sm={10}>
                <FormControl onChange={this.updateDetails} value={this.state.details.rating} type="number" min="0" max="5"
                             placeholder="0-5">
                </FormControl>
            </Col>
        </FormGroup>

    <FormGroup>
    <Col smOffset={2} sm={10}>
    <Button onClick={this.review}>Submit</Button>
    </Col>
    </FormGroup>

        <FormGroup>
            <Col smOffset={2} sm={10}>
                <Button onClick={this.submitAgain}>Reload</Button>
            </Col>
        </FormGroup>

    </Form>
    );

    }
    }

    const mapStateToProps = (state) => {
        return {
        }
    };

export default withRouter(connect(mapStateToProps)(Review));


