import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div>
                <input id="input"
                    type="text"
                    placeholder="Search here"
                />
                <div class="search-buttons">
                    <button id="button-user">User</button>
                    <button id="button-content">Content</button>
                </div>
            </div>
        )
    }
}

export default Search