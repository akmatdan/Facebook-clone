import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'


function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post 
        profilePic="https://randomuser.me/api/portraits/men/52.jpg"
        message="WOW this works!"
        image="https://picsum.photos/536/354"
        username="Jorja Melton"
      />
      <Post 
        profilePic="https://randomuser.me/api/portraits/women/90.jpg"
        message="WOW this works!"
        image=""
        username="Elara Gibson"
      />
      <Post 
        profilePic="https://randomuser.me/api/portraits/men/9.jpg"
        message="WOW this works!"
        image="https://unsplash.it/300/300"
        username="Otis Arnold"
      />
    </div>
  )
}

export default Feed
