import React, {useState}from 'react'
import { Wheel } from 'react-custom-roulette'
import Wave from '../assets/img/wave1.png';
import Navbar from './home-components/Navbar';
import { Button, Modal } from 'react-bootstrap';

const data = [
    { option: 'John' },
    { option: 'Ervin' },
    { option: 'Flores' },
    { option: 'Nico' },
    { option: 'Penales' },
    { option: 'Joevie' },
    { option: 'Panuncia' },
    { option: 'Vin' },
    { option: 'Jay' },
    { option: 'Steve' },
]

function RaffleDraw() {

    const [lgShow, setLgShow] = useState(false);

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const [winner, setWinner] = useState([]);
    return (
        <div>
            <section id="nav-bar">
                <Navbar />
            </section>
            <div className="buy-raffle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <h3 className="title-style">
                                Grand Prize: Price Name
                            </h3>

                            <>
                                <Wheel
                                    mustStartSpinning={mustSpin}
                                    prizeNumber={prizeNumber}
                                    data={data}
                                    backgroundColors={["#ff8f43", "#70bbe0", "#0b3351", "#f9dd50"]}
                                    textColors={["white"]}
                                    outerBorderColor={"#eeeeee"}
                                    outerBorderWidth={10}
                                    innerBorderColor={"#30261a"}
                                    innerBorderWidth={0}
                                    innerRadius={0}
                                    radiusLineColor={"#eeeeee"}
                                    radiusLineWidth={8}
                                    fontSize={17}
                                    textDistance={60}
                                    onStopSpinning={() => {
                                        setMustSpin(false)
                                        setWinner(data[prizeNumber].option)
                                    }}
                                />

                            </>
                        </div>
                        <div className="col-md-6 py-3">
                            <h3 className="subtitle-style">
                                Ticket Price: {/*raffles.ticket*/} <Button onClick={() => setLgShow(true)} className="btn btn-dark rounded-pill py-2 btn-block">Buy Tickets</Button>
                            </h3>
                            <div className="card card-content">
                                <h2>Winner: </h2>
                            </div>
                            <br />
                            <div className="card card-content">
                                <h3>Participants</h3>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 bg-white rounded shadow-sm mb-5">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="border-0 bg-light">
                                                                <div className="p-2 text-uppercase">
                                                                    Ticket No.
                                                                </div>
                                                            </th>
                                                            <th scope="col" className="border-0 bg-light">
                                                                <div className="p-2 text-uppercase">
                                                                    Name
                                                                </div>
                                                            </th>
                                                            <th scope="col" className="border-0 bg-light">
                                                                <div className="p-2 text-uppercase">
                                                                    Email
                                                                </div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            // tickets.map((item) => {
                                                                     <tr>
                                                                        <td className="bg-white text-dark">tombola1234</td>
                                                                        <td className="bg-white text-dark">Ervin Penales</td>
                                                                        <td className="bg-white text-dark">email@test.com</td>
                                                                    </tr>

                                                            // })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Wave} alt="" className="buttom-img" />
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <h1>Raffle Ticket Form</h1>
                            <h6 className="text-secondary">Please fill this form to enter the raffle. Raffle Ticket costs <b className="text-dark">100</b>.</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <label><h5>Name</h5></label>

                            <div className="col-md-6 mb-3">
                                <input type="text" name="firstname" value="Firstname" className="form-control" placeholder="First name" required />
                                <small className="text-danger">Firstname</small>
                            </div>

                            <div className="col-md-6 mb-4">
                                <input type="text" name="lastname" value="Lastname" className="form-control" placeholder="Last name" required />
                                <small className="text-danger">Lastname</small>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label><h5>Email</h5></label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                    </div>
                                    <input type="text" name="email" value="Email" className="form-control" id="validationDefaultUsername" placeholder="Email" aria-describedby="inputGroupPrepend2" required />
                                </div>
                                <small className="text-danger">Email</small>
                            </div>

                            <div className="col-md-6 mb-5">
                                <label><h5>Phone Number</h5></label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend2">+63</span>
                                    </div>
                                    <input type="text" name="phone" value="Phone" className="form-control" id="validationDefaultUsername" placeholder="(000)-000-0000" aria-describedby="inputGroupPrepend2" required />

                                </div>
                                <small className="text-danger">Phone</small>
                            </div>

                        </div>
                        {/* <PayPalButton style={{
                                shape: 'rect',
                                color: 'silver',
                                layout: 'horizontal',
                                label: 'paypal',
                            }}
                                createOrder={(data, actions) => createOrder(data, actions)}
                                onApprove={(data, actions) => onApprove(data, actions)}
                            /> */}
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default RaffleDraw
