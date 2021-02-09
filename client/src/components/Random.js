import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Random = () => {
    const [tweets, setTweets] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        const param = e.target.name;

        axios
        .get(`/api/tweets?search=${param}`)
        .then((res) => setTweets(res.data))
        .catch((err) => console.log(err))

        setIsOpen(!isOpen);
    };

    const randomNumber = Math.floor(Math.random() * tweets.length);
    const displayRandomTweet = tweets[randomNumber]?.text;
    
    
return (
        <div>
            <button id="nasa-button" name="NASA" onClick={handleClick}>get NASA tweet!</button>
            <button id="spacex-button" name="Spacex" onClick={handleClick}>Get SpaceX tweet!</button>
            {isOpen ? <div className="modal">{displayRandomTweet}</div> : null}
        
        </div>
    )
}
export default Random