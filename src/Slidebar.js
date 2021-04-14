import React from 'react'
import SlidebarRow from './SlidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Slidebar() {
  return (
    <div className="slidebar">
      <SlidebarRow src='https://avatars.githubusercontent.com/u/80453075?s=400&u=9eaf87c9cf62ea1274d630072c9dc34fc6fa8da4&v=4' title="Dan Akmat" />
      <SlidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
      <SlidebarRow Icon={EmojiFlagsIcon} title="Pages"/> 
      <SlidebarRow Icon={PeopleIcon} title="Friends"/>
      <SlidebarRow Icon={ChatIcon} title="Messenger"/>
      <SlidebarRow Icon={StorefrontIcon} title="Marketplace"/>
      <SlidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SlidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace"/>
    </div>
  )
}

export default Slidebar
