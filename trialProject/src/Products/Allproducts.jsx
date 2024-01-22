import React, { Component } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";

export class Allproducts extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("/js/APi.json")
      .then((results) => {
        this.setState({
          products: results.data.products,
        });
      });
  }
  render() {
    return (
      <>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Row>
            {this.state.products.slice(0, 10).map((item) => (
              <Col className="text-center mb-3 " md="4" key={item.id}>
                <img
                  src={item.images[0]}
                  className="img-fluid"
                  style={{ height: "350px" }}
                />
                <h2>{item.title}</h2>
                <h5>{item.category  }</h5>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Allproducts;
