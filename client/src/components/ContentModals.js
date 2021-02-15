import React from 'react'

const ContentModals = ({ userTweet }) => {
    return (
        <div>
            <div class="modals-container">
            <div class="modals">
                <p>{userTweet.full_text}</p>
            </div>
        </div>
        </div>
    )
}

export default ContentModals
