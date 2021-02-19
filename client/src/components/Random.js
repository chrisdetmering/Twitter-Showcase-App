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
    const displayRandomTweet = tweets[randomNumber];

    return (
        <div>
            <div class="random-container">
                <button id="nasa-button" name="NASA" onClick={handleClick}>Get NASA Tweet!</button>
                <button id="spacex-button" name="Spacex" onClick={handleClick}>Get SpaceX Tweet!</button>
                <button id="elon-button" name="elonmusk" onClick={handleClick}>Get Elon Musk Tweet!</button>
                <button id="gavriel-button" class="random-buttons-2" name="whitegavriel" onClick={handleClick}>Get Windows 96 Tweet!</button>
                <button id="dan-button" class="random-buttons-2" name="DanMasonVapor" onClick={handleClick}>Get Dan Mason Tweet!</button>
            </div>
            <div class="card-container">
                {isOpen ?
                    <div className="modals">
                        <div class="close-button-container">
                            <button id="modal-close-button" onClick={() => setIsOpen(false)}>X</button>
                        </div>
                        <div class="modal-header">
                            <div class="image-container">
                                <img src={displayRandomTweet?.user.profile_image_url} />
                                <div>{displayRandomTweet?.user.name}</div>
                                <div id="screen-name">@ {displayRandomTweet?.user.screen_name}</div>

                            </div>

                            <div class="stats-container">
                                <div><i class="fas fa-heart"></i>{displayRandomTweet?.favorite_count}</div>
                                <div><i class="fas fa-retweet"></i>{displayRandomTweet?.retweet_count}</div>

                            </div>
                        </div>
                        <div class="random-modal-section">
                            <p>{displayRandomTweet?.full_text}</p>
                        </div>
                    </div>
                : null}
            </div>
        </div>
    )
}

export default Random