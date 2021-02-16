import React from 'react'

const UserModals = ({ userTweet }) => {

    return (
        <div class="modals-container">
            <div class="modals">
                <div class="modal-header">
                    <div class="image-container">
                        <img src={userTweet.user.profile_image_url} />
                        <div>{userTweet.user.name}</div>
                    </div>
                    <div class="stats-container">
                        <div><i class="fas fa-heart"></i>{userTweet.favorite_count}</div>
                        <div><i class="fas fa-retweet"></i>{userTweet.retweet_count}</div>
                    </div>
                </div>
                <section>
                    <p>{userTweet.full_text}</p>
                </section>
            </div>
        </div>

    )
}

export default UserModals