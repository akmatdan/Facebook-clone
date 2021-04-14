import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/536/354"
        profileSrc="https://randomuser.me/api/portraits/men/52.jpg"
        title="Jorja Melton"
      />
      <Story
        image="https://picsum.photos/seed/picsum/536/354"
        profileSrc="https://randomuser.me/api/portraits/women/90.jpg"
        title="Elara Gibson"
      />
      <Story
        image="https://unsplash.it/300/300"
        profileSrc="https://randomuser.me/api/portraits/men/9.jpg"
        title="Otis Arnold"
      />
      <Story
        image="https://source.unsplash.com/collection/888146/300x300"
        profileSrc="https://randomuser.me/api/portraits/women/17.jpg"
        title="Maliha Ingram"
      />
      <Story
        image="https://source.unsplash.com/320x240"
        profileSrc="https://randomuser.me/api/portraits/women/11.jpg"
        title="Raheel Santos"
      />
    </div>
  )
}

export default StoryReel
