import React from 'react'
import { useState } from 'react'

const SpaceXModal = ({ spaceXTweets }) => {
    const [isOpen, setIsOpen] = useState(false);
    let randomTweet = [ spaceXTweets[Math.floor(Math.random() * spaceXTweets.length)] ];
    return (
        <div>
            <button id="spacex-button" onClick={() => setIsOpen(!isOpen)}>Get SpaceX tweet!</button>
            {isOpen ? (
                <div className="modal">
                    {randomTweet.map(tweet => (
                        <p>{tweet.text}</p>
                    ))}
                </div>
            ) : null }
        </div>
    )
}

export default SpaceXModal
