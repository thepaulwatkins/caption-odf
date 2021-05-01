import React, { Component } from 'react'
import logo from './img/captioncatch.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="logo" src={logo} alt="caption catch" />
                    <p>
                        Making content consuming more pleasant by removing bias
                        and hateful language from social media platforms
                    </p>
                </div>
            </div>
        )
    }
}

export default Home
