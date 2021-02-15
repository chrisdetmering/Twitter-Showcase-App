import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import UserModals from './UserModals'
import ContentModals from './ContentModals'

const Search = () => {
    const [input, setInput] = useState('');
    const [userTweets, setUserTweets] = useState([]);
    const [isOpen, setisOpen] = useState(false);
    
    const updateInput = (e) => {
        setInput(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();

        axios
        .get(`/api/tweets?search=${input}`)
        .then((res) => setUserTweets(res.data))
        .catch((err) => console.log(err))

        setisOpen(!isOpen);
    }

    const handleClickContent = (e) => {
        e.preventDefault();

        axios
        .get(`/api/tweets/cont?=${input}`)
        .then((res) => setUserTweets(res.data))
        .catch((err) => console.log(err))

        setisOpen(!isOpen);
    }

    return (
        <div>
            <div>
                <input id="input" type="text" placeholder="Search here" onChange={updateInput} value={input} />

                <div class="search-buttons">
                    <button id="button-user" onClick={handleClick} type="submit">User</button>
                    <button id="button-content" onClick={handleClickContent} type="submit">Content</button>
                </div>
            </div>
            
            <section>
                {userTweets.map((userTweet) => (
                    <UserModals userTweet={userTweet}></UserModals>
                ))}
                 {userTweets.map((userTweet) => (
                    <ContentModals userTweet={userTweet}></ContentModals>
                ))}
            </section>
            
            
        </div>
    )
}

export default Search