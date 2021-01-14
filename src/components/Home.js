import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h2 className="h3-container">Welcome to the Twitter Showcase!</h2>
                <p>This is a simple web application that utilizes the Twitter API 
                to retrieve twitter timeline information. You can search based on user 
                or content in the search page, or utilize the random tweet page to pull 
                a random tweet from the selected choices. Hope you enjoy it!</p>
            </div>
           
        )
    }
}

export default Home