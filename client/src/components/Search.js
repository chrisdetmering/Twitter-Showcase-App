import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import UserModals from './UserModals'

const Search = () => {
    const [input, setInput] = useState('');
    const [userTweets, setUserTweets] = useState([]);
    const [isOpen, setisOpen] = useState(false);
    
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

        setisOpen(!isOpen);

        console.log(userTweets);
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
            
            <section>
                {userTweets.map((userTweet) => (
                    <UserModals userTweet={userTweet}></UserModals>
                ))}
            </section>
            
            
        </div>
    )
}

export default Search