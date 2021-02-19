import React from 'react'

const ContentModals = ({ contentTweet }) => {
    return (
        <div class="modals-container">
            <div class="modals">
                <div class="modal-header">
                    <div class="image-container">
                        <img src={contentTweet.user.profile_image_url} />
                        <div>{contentTweet.user.name}</div>
                        <div id="screen-name">@ {contentTweet.user.screen_name}</div>
                    </div>
                    <div class="stats-container">
                        <div><i class="fas fa-heart"></i>{contentTweet.favorite_count}</div>
                        <div><i class="fas fa-retweet"></i>{contentTweet.retweet_count}</div>
                    </div>
                </div>

                <p>{contentTweet.full_text}</p>
            </div>
        </div>

    )
}

export default ContentModals
