import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import '../../assets/css/card.css';
import '../../assets/css/float.css';

function Prize() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="bgcolor prize">
                <h2 className="title-style">Prize</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-blog">
                            <div className="card-image">
                                <img className="img" alt="" src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" />
                                <div className="ripple-cont"></div>
                            </div>
                            <div className="table">
                                <h4 className="card-caption">
                                    <Link to="#">Prize 1</Link>
                                </h4>
                                <br />
                                <p className="card-description">
                                    <br />
                                    Prize Name: Mouse
                                </p>
                                <p className="card-description">
                                    <br />
                                    Descripiton:
                                </p>
                                <div className="ftr text-center">
                                    {/* <Link to="/admin/raffle/drawraffle" className="btn btn-primary btn-sm">Draw</Link> */}
                                    <Link to="/admin/prize/updatesprize" className="btn btn-warning btn-sm">Edit</Link>
                                    <Link to="#" className="btn btn-danger btn-sm">Delete</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-blog">
                            <div className="card-image">
                                <img className="img" alt="" src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" />
                                <div className="ripple-cont"></div>
                            </div>
                            <div className="table">
                                <h4 className="card-caption">
                                    <Link to="#">Prize 2</Link>
                                </h4>
                                <br />
                                <p className="card-description">
                                    <br />
                                    Prize Name: Mouse
                                </p>
                                <p className="card-description">
                                    <br />
                                    Descripiton:
                                </p>
                                <div className="ftr text-center">
                                    {/* <Link to="/admin/raffle/drawraffle" className="btn btn-primary btn-sm">Draw</Link> */}
                                    <Link to="#" className="btn btn-warning btn-sm">Edit</Link>
                                    <Link to="#" className="btn btn-danger btn-sm">Delete</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-blog">
                            <div className="card-image">
                                <img className="img" alt="" src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" />
                                <div className="ripple-cont"></div>
                            </div>
                            <div className="table">
                                <h4 className="card-caption">
                                    <Link to="#">Prize 3</Link>
                                </h4>
                                <br />
                                <p className="card-description">
                                    <br />
                                    Prize Name: Mouse
                                </p>
                                <p className="card-description">
                                    <br />
                                    Descripiton:
                                </p>
                                <div className="ftr text-center">
                                    {/* <Link to="/admin/raffle/drawraffle" className="btn btn-primary btn-sm">Draw</Link> */}
                                    <Link to="#" className="btn btn-warning btn-sm">Edit</Link>
                                    <Link to="#" className="btn btn-danger btn-sm">Delete</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="#" onClick={handleShow} className="float">
                <i className="bx bxs-gift my-float"></i>
            </Link>
            <div className="label-container">
                <div className="label-text">Add Prize</div>
                <i className="bx bx-play label-arrow"></i>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Prize</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-horizontal form-material">
                        <br />
                        <div className="form-group">
                            <input required type="file" name="image" className="btn btn-primary form-control" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Prize name</label>
                            <input required type="text" name="prize" className="form-control" />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Description</label>
                            <input required type="number" name="num" className="form-control" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-body">Select "Add" below if you are ready to post this prize.</div>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default Prize;