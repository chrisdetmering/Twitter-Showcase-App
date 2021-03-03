import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import UserCards from './UserCards';
import ContentCards from './ContentCards';

const Search = () => {
    const [input, setInput] = useState('');
    const [userTweets, setUserTweets] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [contentTweets, setContentTweets] = useState([]);


    const updateInput = (e) => {
        setInput(e.target.value);
    }

    // Username Tweets
    
    const handleClick = (e) => {
        e.preventDefault();

        axios
            .get(`/api/tweets?search=${input}`)
            .then((res) => setUserTweets(res.data))
            .catch((err) => console.log(err))

    input.match(' ') ? alert("Please write an appropriate user handle") : null
    }

    // Content Tweets
    
    const handleClickContent = (e) => {
        e.preventDefault();
        setUserTweets([]);

            axios
                .get(`/api/tweets/content?content=${input}`)
                .then((res) => setContentTweets(res.data.statuses))
                .catch((err) => console.log(err))
        }

    return (
        <div>
            <div>
                <input id="input" type="text" placeholder="Search here (e.g joerogan)" onChange={updateInput} value={input} />

                <div class="search-buttons">
                    <button id="button-user" onClick={handleClick} type="submit">User</button>
                    <button id="button-content" onClick={handleClickContent} value={input} type="submit">Content</button>
                </div>
            </div>

            <div>
                {userTweets.map((userTweet) => (
                    <UserCards isOpen={isOpen} userTweet={userTweet}></UserCards>
                ))}
            </div>

            {contentTweets.map((contentTweet) => (
                <ContentCards contentTweet={contentTweet}></ContentCards>
            ))}
        </div>
    )
}

export default Search