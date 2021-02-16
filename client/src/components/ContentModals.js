import React from 'react'

const ContentModals = ({ contentTweet }) => {
    return (
        <div class="modals-container">
            <div class="modals">
                <img src={contentTweet.user.profile_image_url} />
                
                <p>{contentTweet.full_text}</p>
            </div>
        </div>
        
    )
}

export default ContentModals
