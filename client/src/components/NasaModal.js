import React from 'react'
import { useState } from 'react'

const NasaModal = ({ nasaTweets }) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="nasa-modal">
            <button onClick={() => setIsOpen(!isOpen)}>Get Tweet!</button>
            {isOpen ? (
                <div className="modal"><p>{nasaTweets}</p></div>
            ) : null}


        </div>
    )
}

export default NasaModal
