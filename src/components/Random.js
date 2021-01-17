import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Random = () => {
     

        useEffect(() => {
            const fetchNasa = async () => {
                const response = await axios(`https://api.twitter.com/1.1/search/tweets.json?q=nasa`)
                console.log(response.statuses.text)
                
            }

            fetchNasa();
        })


        return (
            <div>

            </div>
        )
}

export default Random
