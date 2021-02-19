import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import UserModals from './UserModals'
import ContentModals from './ContentModals'

const Search = () => {
    const [input, setInput] = useState('');
    const [userTweets, setUserTweets] = useState([]);
    const [isOpen, setisOpen] = useState(false);
    const [contentTweets, setContentTweets] = useState([]);
    
    const updateInput = (e) => {
        setInput(e.target.value);
    }

    // User Tweets

    const handleClick = (e) => {
        e.preventDefault();

        axios
        .get(`/api/tweets?search=${input}`)
        .then((res) => setUserTweets(res.data))
        .catch((err) => console.log(err))

        setisOpen(!isOpen);
        
    }

    // Content Tweets

    const handleClickContent = (e) => {
        e.preventDefault();

        axios
        .get(`/api/tweets/content?content=${input}`)
        .then((res) => setContentTweets(res.data.statuses))
        .catch((err) => console.log(err))

        setisOpen(!isOpen);
    }

    return (
        <div>
            <div>
                <input id="input" type="text" placeholder="Search here" onChange={updateInput} value={input}
                />
                
                <div class="search-buttons">
                    <button id="button-user" onClick={handleClick} type="submit">User</button>
                    <button id="button-content" onClick={handleClickContent} type="submit">Content</button>
                </div>
            </div>
            
            <div>
                {userTweets.map((userTweet) => (
                    <UserModals userTweet={userTweet}></UserModals>
                ))}
            </div>
            
                {contentTweets.map((contentTweet) => (
                    <ContentModals contentTweet={contentTweet}></ContentModals>
                ))}
            </div>
    )
}

export default Search