import React, { Component } from 'react'
import Preloader from '../Preloader'
import SubHeader from '../SubHeader'
import Header from '../Header'
import axios from 'axios'
import { Col, Container, Row } from 'reactstrap'

export class AllProduct extends Component {
    state = {
        persons : []
    }

    componentDidMount(){
        axios.get('/assets/js/Api.json')
        .then( (item)=>{
            this.setState(
                {
                    persons : item.data
                }
            
            )

        })
    }
  render() {
    return (
      <div>

        <Preloader/>
        <SubHeader/>
        <Header/>
        <div className='section properties'>

        <Container>
            <Row className='properties-box'>
            {this.state.persons.map( (result)=>(
                <Col md="4"  className='align-self-center mb-30 properties-items adv' key={result.id}>
                            <div className="item">
                                <a href="property-details.html"><img src={result.images[0]} alt="" /></a>
                                <span className="category">{result.title}</span>
                                <h6>${result.price}</h6>
                                <h4><a href="property-details.html">{result.description}</a></h4>
                                <ul>
                                    <li>brand: <span>{result.brand}</span></li>
                                    <li>category: <span>{result.category}</span></li>
                                    <li>rating: <span>{result.rating}</span></li>
                                    <li>stock: <span>{result.stock}</span></li>
                                    <li>discountPercentage: <span>{result.discountPercentage}</span></li>
                                </ul>
                                <div className="main-button">
                                    <a href="property-details.html">Schedule a visit</a>
                                </div>
                            </div>
                        

                </Col>
            ))}

            </Row>
        </Container>
        </div>




      </div>
    )
  }
}

export default AllProduct