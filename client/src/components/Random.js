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
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
           <ul class="unordered-list">
               {tweets.map(tweet => (
                   <li>{tweet.text}</li>
               ))}
           </ul>
        </div>
    )
}

export default Random

// {tweets.map(tweet => (
//     <h1>{tweet.text}</h1>
// ))}