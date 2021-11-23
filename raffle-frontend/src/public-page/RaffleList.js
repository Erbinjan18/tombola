import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Wave from '../assets/img/wave1.png';
import Shop from '../assets/img/addtocart.svg';
import Navbar from './home-components/Navbar';

function RaffleList() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <div>
            <section id="nav-bar">
                <Navbar />
            </section>
            <div className="raffle-list">
                <br /><br />
                <div className="container text-white py-5 text-center">
                    <h2 className="display-4">
                        My Raffle List
                    </h2>
                </div>
                <div className="px-4 px-lg-0">
                    <div className="pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                    {/* SHOPPING CART TABLE */}
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">
                                                            Raffle
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 text-uppercase">
                                                            Price
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 text-uppercase">
                                                            Quantity
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 text-uppercase">
                                                            Remove
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* FIRST ITEM */}
                                                <tr>
                                                    <th scope="row" className="border-0">
                                                        <div className="p-2">
                                                            <img src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg" alt="" width="70" className="img-fluid rounded shadow-sm" />
                                                            <div className="ml-3 d-inline-block align-middle">
                                                                <div className="p-4">
                                                                    <h5 className="mb-1">
                                                                        <Link to="#" className="text-dark d-inline-block align-middle">
                                                                            Rolex
                                                                        </Link>
                                                                    </h5>
                                                                    <span className="text-muted font-weight-normal font-italic">Category: Fashion</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="border-0 align-middle">
                                                        <strong>₱79.00</strong>
                                                    </td>
                                                    <td className="border-0 align-middle">
                                                        <strong>3</strong>
                                                    </td>
                                                    <td className="border-0 align-middle">
                                                        <Link to="#" className="text-dark">
                                                            <i className='bx bxs-trash'></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                {/* SECOND ITEM */}
                                                <tr>
                                                    <th scope="row" className="border-0">
                                                        <div className="p-2">
                                                            <img src="https://cdn.mos.cms.futurecdn.net/HGtimMvYwhLXn4EixJKTfS-970-80.jpg.webp" alt="" width="70" className="img-fluid rounded shadow-sm" />
                                                            <div className="ml-3 d-inline-block align-middle">
                                                                <div className="p-4">
                                                                    <h5 className="mb-1">
                                                                        <Link to="#" className="text-dark d-inline-block align-middle">
                                                                            Dell XPS 13
                                                                        </Link>
                                                                    </h5>
                                                                    <span className="text-muted font-weight-normal font-italic">Category: Laptops</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="border-0 align-middle">
                                                        <strong>₱79.00</strong>
                                                    </td>
                                                    <td className="border-0 align-middle">
                                                        <strong>3</strong>
                                                    </td>
                                                    <td className="border-0 align-middle">
                                                        <Link to="#" className="text-dark">
                                                            <i className='bx bxs-trash'></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row py-5 p-4 bg-white rounded shadow-sm">
                                <div className="col-lg-6">
                                    <div className="imggift">
                                        <img src={Shop} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                    <div className="p-4">
                                        {/* <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p> */}
                                        <ul className="list-unstyled mb-4">
                                            {/* <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>                              */}
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                                <h5 className="font-weight-bold">₱158.00</h5>
                                            </li>
                                        </ul>
                                        <Button onClick={() => setLgShow(true)} className="btn btn-dark rounded-pill py-2 btn-block">Proceed to checkout</Button>
                                        <Modal
                                            size="lg"
                                            show={lgShow}
                                            onHide={() => setLgShow(false)}
                                            aria-labelledby="example-modal-sizes-title-lg"
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-lg">
                                                    Raffle Ticket Form
                                                    <p className="sub-text">
                                                        Please fill this form. Your Raffle ticket costs ₱158.00.
                                                    </p>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>...</Modal.Body>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Wave} alt="" className="buttom-img" />
            </div>
        </div>
    )
}

export default RaffleList
