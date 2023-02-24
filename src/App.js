import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'

const App = () => {
    const [advise, setAdvise] = useState({});

    useEffect(() => {

        var options = { method: 'GET', url: 'https://api.adviceslip.com/advice' };

        axios.request(options)
            .then(function (response) {
                console.log(response.data);
                const { slip } = response.data;
                setAdvise(slip)
            }).catch(function (error) {
                console.error(error);
            });
    }, [])

    // console.log(advise.length)
    console.log(advise.id)
    console.log(advise.advice)

    return (
        <>
            <div className='complete'>
                <main>
                    <p className='advice_no'>advice #{advise.id}</p>
                    <p className='advice'>"{advise.advice}"</p>
                    <img src="images/pattern-divider-desktop.svg" alt="" />
                    <div className='dice'>
                        <img src="images/icon-dice.svg" alt="" />
                    </div>
                </main>
            </div>

            <div class="attribution">
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