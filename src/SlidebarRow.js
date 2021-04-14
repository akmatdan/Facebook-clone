import React from 'react'
import './SlidebarRow.css'
import { Avatar } from '@material-ui/core';


function SlidebarRow({src, Icon, title}) {
  return (
    <div className="slideBarRow">
    {src && <Avatar src={src} />}
    {Icon && <Icon />}
    <h4>{title}</h4>
    </div>
  )
}

export default SlidebarRow
