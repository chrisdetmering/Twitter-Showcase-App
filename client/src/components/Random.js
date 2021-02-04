import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import NasaModal from './NasaModal'

const Random = () => {
    const [nasaTweets, setNasaTweets] = useState([]);
    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3002/api/tweets/search'
        }).then(res => {
            setNasaTweets(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    
    



    return (
        <div>
            <NasaModal nasaTweets={nasaTweets}/>
        </div>
    )
}
export default Random