import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import TweetCard from './TweetCard';


const Search = () => {
    const [input, setInput] = useState('');
    const [searchedTweets, setSearchedTweets] = useState([]);


    const updateInput = (e) => {
        setInput(e.target.value);
    }

    const isInputValid = () => { 
        return input.match(' ') || input.length === 0; 
    }

    const handleClick = (e) => {
        if (isInputValid()) { 
            alert('Username cant be blank or have a space')
            return; 
        }
       
        getTweets(`/api/tweets?search=${input}`, 
            result => { 
                if (result.data.length === 0) { 
                    alert('could not find any users by that username'); 
                    return; 
                }
                    setSearchedTweets(result.data);
            })
    }


    const handleClickContent = (e) => {
        getTweets(`/api/tweets/content?content=${input}`, 
             result => setSearchedTweets(result.data.statuses)) 
                    
    }


    const getTweets = (url, cb) => { 
        axios.get(url)
        .then(cb)
        .catch((err) => console.log(err)); 
    }


    const searchedTweetsList = searchedTweets.map((userTweet, idx) => (
        <TweetCard key={idx} userTweet={userTweet}></TweetCard>
    ))


    return (
        <div>
            <div>
                <input style={{color: "white", width: "300px"}} id="input" type="text" placeholder="Search here (e.g joerogan)" onChange={updateInput} value={input} />
                <div class="search-buttons">
                    <button id="button-user" onClick={handleClick} type="submit">User</button>
                    <button id="button-content" onClick={handleClickContent} value={input} type="submit">Content</button>
                </div>
            </div>
            {searchedTweetsList}
        </div>
    );
}

export default Search;