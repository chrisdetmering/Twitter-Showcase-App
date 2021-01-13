import React, { Component } from 'react'

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
                                <li>Home</li>
                                <li>Search</li>
                                <li>Random</li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </nav>
        )
    }
}

export default Nav