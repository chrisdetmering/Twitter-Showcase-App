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
            setNasaTweets(res.data.status.text);
            console.log(res.data.status.text);
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div>
            <div class="nasa-container">
                <div class="nasa-tweet">
                    <div>NASA</div>

                </div>
                <div>
                    <button class="nasa-button">Get Tweet!</button>
                </div>


            </div>
            <NasaModal nasaTweets={nasaTweets}/>
        </div>
    )
}
export default Random