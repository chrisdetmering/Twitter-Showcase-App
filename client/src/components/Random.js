import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'

const Random = () => {
    const [nasaTweets, setNasaTweets] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3002/api/tweets/search'
        }).then(res => {
            setNasaTweets(res.data);
            console.log(res.data[0]);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div class="random-container">
            <div class="nasa-container">
                {nasaTweets.map(nasaTweet => (
                    <div>{nasaTweet.text}</div>
                ))}
            </div>
           
        </div>
    )
}

export default Random



// {nasaTweets.map(tweet => (
//     <div class="nasa-container">
//         <div>{tweet.text}</div>