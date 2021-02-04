import React from 'react'
import { useState } from 'react'

const SpaceXModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button id="spacex-button" onClick={() => setIsOpen(!isOpen)}>Get SpaceX tweets!</button>
            {isOpen ? (
                <div className="modal">
                    <p>Hello</p>
                </div>
            ) : null }
        </div>
    )
}

export default SpaceXModal
