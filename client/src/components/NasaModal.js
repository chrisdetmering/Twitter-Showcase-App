import React from 'react'
import {  useState } from 'react'

const NasaModal = ({ nasaTweets }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button id="nasa-button" onClick={() => setIsOpen(!isOpen)}>Get NASA Tweet!</button>
            {isOpen ? (
                <div className="modal">
                    {nasaTweets.map(tweet => (
                        <p>{tweet.text}</p>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default NasaModal
