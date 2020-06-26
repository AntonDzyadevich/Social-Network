import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
return <div>
            <ProfileInfo />
            <div>
                <img src='https://cdn.fishki.net/upload/post/2017/01/01/2180792/tn/franciya-lazurnyy-bereg-more.jpg'/>
            </div>
            <div>ava + description</div>
            <div>
               <MyPosts /> 
            </div>
        </div>
            
            

         
}

export default Profile;