import React from 'react'

const UserModals = ({ userTweet }) => {

    return (
        <div class="modals-container">
            <div class="modals">
                <div class="modal-header">
                    <div>
                        <img src={userTweet.user.profile_image_url}/>
                    </div>
                    <div>
                        <div id="modal-name">{userTweet.user.name}  </div>
                        
                    </div>
                    
                </div>
                <div>
                    <div id="screen-name"> @{userTweet.user.screen_name}</div>
                </div>
                
                
                <p>{userTweet.full_text}</p>
                
            </div>
        </div>

    )
}

export default UserModals
