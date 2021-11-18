import React, { useState } from "react";
import { Wheel } from 'react-custom-roulette';

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

function DrawRaffle() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length)
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)
    }

    return (
        <div>
            <div className="bgcolor raffle">
                <h2 className="title-style">Draw Raffle</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="App-header">
                            <Wheel
                                outerBorderColor={"#eeeeee"}
                                radiusLineColor={"#eeeeee"}

                                mustStartSpinning={mustSpin}
                                prizeNumber={prizeNumber}
                                data={data}
                                backgroundColors={['#3e3e3e', '#df3428']}
                                textColors={['#ffffff']}
                            />
                            <button className={"spin-button"} onClick={handleSpinClick}>SPIN</button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="col-lg-6 col-xlg-3 col-md-5">
                        <div className="card result-card">
                            <div className="card-body">
                                <h2>Result</h2>
                                <br/>
                                <br/>
                                {/* <h2>CONGRATS    !!</h2>
                                <br/>
                                <h3>name</h3> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DrawRaffle;