import React from 'react'

const UserModals = ({ userTweet }) => {
    
    return (
        <div class="modals-container">
            <div class="modals">
                
                <p>{userTweet.full_text}</p>
            </div>
        </div>
       
    )
}

export default UserModals
