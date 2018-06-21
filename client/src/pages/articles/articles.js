// this is where everything is going to be compiled 

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Articles extends Component {
    state = {
        articles: [],
        title:  "",
        num: "",
        start: "",
        end: ""
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Jumbotron>
                        <h1> New York Times Search </h1>
                    </Jumbotron>
                    <form>
                        <p>Search Term:</p>
                        <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Search Term" 
                        />
                        <p>Number of records to Retrieve</p>
                        <Input
                            value={this.state.num}
                            onChange={this.handleInputChange}
                            name="num"
                            placeholder="5"
                        />
                    </form>
                </Row>
            </Container>
        )
    }
}//articles