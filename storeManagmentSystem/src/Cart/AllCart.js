import React from 'react'
import { CartProvider, useCart } from 'react-use-cart';
import { Col, Container, Row } from 'reactstrap';
import SubHeader from '../SubHeader';
import Header from '../Header';
function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        totalItems
    } = useCart();

    if (isEmpty) {

        return <h2 className="text-center">Your cart is empty</h2>;
    }

    return (
        <div>
            <h1 className="text-center">Cart ({totalUniqueItems})</h1>
            <Container>
                <Row>
                    <Col md="10" className="m-auto">

                        <table className="table table-dark text-center">

                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quntity</th>
                                    <th>Price</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>

                            <tbody>

                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td><img src={item.images[0]} style={{ height: "70px", width: "70px" }}></img></td>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price*item.quantity}</td>
                                        <td>
                                            <button
                                            className="btn btn-warning"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <button
                                            className="btn btn-success mx-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Total</td>
                                    <td>------------------</td>
                                    <td>{totalItems}</td>
                                    <td>{cartTotal}</td>
                                    <td><a href="/shoping" className="btn btn-primary">Continue Shoping</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
function AllCart() {
  return (
    <CartProvider>
        <SubHeader/>
        <Header/>
        <Cart/>

    </CartProvider>
  )
}

export default AllCart