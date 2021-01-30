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
            setTweets(response.data)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
            
    })

    return (
        <div>
            {tweets}

        </div>
    )
}

export default Random
