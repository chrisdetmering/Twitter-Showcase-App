import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'

const Random = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3002/api/tweets/search'
        }).then(res => {
            setTweets(res.data);
        })
    }, [])

    return (
        <div>
           {tweets.map(tweet => (
               <h1>{tweet.text}</h1>
           ))}
        </div>
    )
}

export default Random