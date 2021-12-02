import React from 'react'
import {Link} from 'react-router-dom'

function RaffleParticipants() {
    return (
        <div>
            <div className="bgcolor raffle">
                <h2 className="title-style">List of Participants in Lenovo</h2>
            </div>
            <div className="container">
                <div className="px-4 px-lg-0">
                    <div className="pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
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
                                                    {/* <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 text-uppercase">
                                                            Ticket Qty
                                                        </div>
                                                    </th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border-0 align-middle">tombola12345</td>
                                                    <td className="border-0 align-middle">Ervin Penales</td>
                                                    <td className="border-0 align-middle">email@test.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                    <Link to="/admin/raffle/drawraffle" className="btn btn-primary me-md-2 float-start">Begin Raffle</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RaffleParticipants
