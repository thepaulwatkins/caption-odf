/*global chrome*/
import React, { Component } from 'react'

class Home extends Component {
    executeScripts = () => {
        chrome.tabs.executeScript({
            file: 'jquery.js',
        })

        chrome.tabs.executeScript({}, function () {
            chrome.tabs.executeScript({
                file: 'caption/caption.js',
            })
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Caption-ODF</h1>
                    <p>Catching bias in online captions</p>
                </div>
                <div className="contentHolder">
                    <div>
                        <p>Placeholder text</p>
                        <button onClick={this.executeScripts}>Start</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
