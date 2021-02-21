import React from 'react'
import { useState } from 'react';

const UserCards = ({ userTweet, isOpen }) => {
    const imageTweet = userTweet.retweeted_status?.extended_entities?.media[0].media_url
    

    return (
        <div class="modals-container">
            
                <div class="modals">
                    <div class="modal-header">
                        <div class="image-container">
                            <img src={userTweet.user.profile_image_url} />
                            <div>{userTweet.user.name}</div>
                            <div id="screen-name">@ {userTweet.user.screen_name}</div>

                        </div>

                        <div class="stats-container">
                            <div><i class="fas fa-heart"></i>{userTweet.favorite_count}</div>
                            <div><i class="fas fa-retweet"></i>{userTweet.retweet_count}</div>
                        </div>
                    </div>

                    <section>
                        <p>{userTweet.full_text}</p>
                        <div class="card-image">
                            <img id="card-image" src={imageTweet} />
                        </div>
                    </section>
                </div>
                
        </div>
    )
}

export default UserCards