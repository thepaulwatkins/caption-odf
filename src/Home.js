/*global chrome*/
import React, { Component } from 'react'
import logo from './img/captioncatch.jpg'

class Home extends Component {
    render() {
        return (
            <div className="popup">
                <div className="header">
                    <div className="imgDiv">
                        <img className="logo" src={logo} alt="caption catch" />
                    </div>
                    <div className="description">
                        <p>
                            Creating a more culturally-inclusive <br/> online experience by removing bias
                            and hateful <br/> language from social media platforms
                        </p>
                    </div>
                    <hr />
                    <div className="description">
                        <a target="_blank" href="https://captioncatch.carrd.co/">Learn more about Caption Catch</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
