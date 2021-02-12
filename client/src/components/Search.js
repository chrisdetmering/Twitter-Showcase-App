import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Search = () => {
    const [input, setInput] = useState('');
    const [userTweets, setUserTweets] = useState([]);

    const updateInput = (e) => {
        setInput(e.target.value);
        console.log(input);
    }

    const handleClick = (e) => {
        e.preventDefault();

        axios
        .get(`/api/tweets?search=${input}`)
        .then((res) => setUserTweets(res.data))
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <div>
                <input id="input" type="text" placeholder="Search here" onChange={updateInput} value={input} />

                <div class="search-buttons">
                    <button id="button-user" onClick={handleClick} type="submit">User</button>
                    <button id="button-content" type="submit">Content</button>
                </div>
            </div>
            {userTweets.map(user => (
                <div>{user.text}</div>
            ))}
        </div>
    )
}

export default Search