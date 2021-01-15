import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h2 id="home-header">Welcome to the Twitter Showcase!</h2>
                    <p id="home-paragraph">This is a simple web application
                        that utilizes the Twitter API to retrieve twitter timeline information.
                        You can search based on user or content in the search page, or utilize
                        the random tweet page to pull a random tweet from the selected choices.
                    </p>
                <p id="second-home-paragraph">Hope you enjoy!</p>
            </div>
        )
    }
}

export default Home