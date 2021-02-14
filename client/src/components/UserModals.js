import React from 'react'
import { useState } from 'react';

const UserModals = ({ userTweet }) => {
    const [isOpen, setisOpen] = useState(false);
    
    return (
        <div class="modals-container">
            <div class="modals">
                <p>{userTweet.full_text}</p>
            </div>
        </div>
       
    )
}

export default UserModals
