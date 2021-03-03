import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//TODO: Change to function
class Nav extends Component {
    render() {
        return (
            <nav>
                <header>
                    <div class="container">
                        <div id="branding">
                            <h1 class="highlight">Twitter Showcase</h1>
                        </div>
                        <nav>
                            <ul>
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                                <Link to="/Search">
                                    <li>Search</li>
                                </Link>
                                <Link to="/Random">
                                    <li>Random</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </header>
            </nav>
        )
    }
}

export default Nav