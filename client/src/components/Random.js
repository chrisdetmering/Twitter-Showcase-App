import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'

const Random = () => {
    const [tweets, setTweets] = useState([]);
   


    useEffect(() => {
       axios.get(`http://localhost:3002/api/tweets/search`)
            .then(response => {
                setTweets(response.data)
                console.log(response.data.statuses)
            })
            .catch(error => {
                console.log(error)
            })
            
    })

    return (
        <div>
            {tweets}

        </div>
    )
}

export default Random
