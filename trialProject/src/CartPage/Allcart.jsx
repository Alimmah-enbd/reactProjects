import React from 'react'
import { Link } from 'react-router-dom';
import { CartProvider, useCart, } from 'react-use-cart'
import { Col, Container, Row } from 'reactstrap';
import Navbar from '../Navbar';


function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        totalItems,
        cartTotal,
        emptyCart
    } = useCart();

    if (isEmpty) return <p className='text-center'>Your cart is empty</p>;

    return (
        <CartProvider>

            <Container>
                <Row>
                    <Col>
                        <h1 className='m-auto text-center'>Cart {totalUniqueItems} <button onClick={emptyCart} className='btn btn-warning'> Empty your cart</button></h1>
                        

                        <table className='table table-tarnsparnt border'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Operation</th>
                                </tr>

                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={item.images[0]} className='img-fluid' style={{ height: "70px", width: "70px" }}></img>
                                        </td>
                                        <td>
                                            <h4>{item.title}</h4>
                                        </td>
                                        <td>
                                            <h4>{item.quantity}</h4>
                                        </td>
                                        <td>
                                            <h4>{item.price} </h4>
                                        </td>

                                        <td>

                                            <button className='btn btn-warning mx-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <button className='btn btn-success mx-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button className='btn btn-danger mx-2' onClick={() => removeItem(item.id)}>&times;</button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>total</td>
                                    <td>---------</td>
                                    <td>{totalItems}</td>
                                    <td>{cartTotal}</td>
                                    <td><Link to="/allShopping" > Contiue Shopping </Link> </td>
                                </tr>

                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>




        </CartProvider>


    );
}

function Allcart() {
    return (
    <CartProvider>
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <br></br>
        <Cart/>
    </CartProvider>
  )
}

export default Allcart