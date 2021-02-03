import React from 'react'
import { useState } from 'react'

const NasaModal = ({ nasaTweets }) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            
            <h1>{nasaTweets}</h1>
        </div>
    )
}

export default NasaModal
