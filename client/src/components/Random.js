import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'

const Random = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3002/api/tweets/search'
        })
            .then(function (response) {
                console.log(response.data);
                setTweets(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        Random();
        
    },[])

    return (
        <div>
            {tweets}
        </div>
    )
}

export default Random