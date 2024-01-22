import React from 'react'

function Header() {
    return (
        <div>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="index.html" className="logo">
                                    <h1>Villa</h1>
                                </a>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li><a href="/" className="active">Home</a></li>
                                    <li><a href="/ahmed">Properties</a></li>
                                    <li><a href="/detials">Property Details</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                    <li><a href="/product">Products</a></li>
                                    <li><a href="/shoping">Shoping</a></li>
                                    <li><a href="/cart"><i class="fa-solid fa-cart-shopping"></i> Go To Cart</a></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header