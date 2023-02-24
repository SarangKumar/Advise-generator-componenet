import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'

const App = () => {
    const [advise, setAdvise] = useState({});


    function changeAdvise() {
        var options = { method: 'GET', url: 'https://api.adviceslip.com/advice' };

        axios.request(options)
            .then(function (response) {
                const { slip } = response.data;
                setAdvise(slip)
            }).catch(function (error) {
                console.error(error);
            });
    }

    useEffect(() => {
        changeAdvise()
    }, [])

    return (
        <>
            <div className='complete'>
                <main>
                    <p className='advice_no'>advice #{advise.id}</p>
                    <p className='advice'>“{advise.advice}”</p>
                    <img className='divide_d' src="images/pattern-divider-desktop.svg" alt="" />
                    <img className='divide_m' src="images/pattern-divider-mobile.svg" alt="" />
                    <button id='dice' onClick={changeAdvise}>
                        <img src="images/icon-dice.svg" alt="dice" />
                    </button>
                </main>
            </div>

            <div className="attribution">
                <span>
                    Challenge by <a className='attr_link' href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                </span>
                <span>
                    Coded by <a className='attr_link' href="/">Your Name Here</a>.
                </span>
            </div>
        </>
    )
}

export default App


