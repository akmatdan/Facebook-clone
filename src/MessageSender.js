import React from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core';


function MessageSender() {
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input 
            placeholder
          />
          <input /> 
        </form>
      </div>
      <div className="messageSender__bottom">

      </div>
    </div>
  )
}

export default MessageSender
