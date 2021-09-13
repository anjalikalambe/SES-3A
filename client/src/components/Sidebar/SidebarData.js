import React from 'react'
import * as AiIcons from 'react-icons/ai';
import { BsChatSquareDotsFill, BsExclamationTriangleFill, BsFillPeopleFill, BsGearFill, BsBoxArrowInRight } from "react-icons/bs"

export const SidebarData = [

  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },

  {
    title: 'Rooms',
    path: '/',
    icon: <BsFillPeopleFill />,
    cName: 'nav-text'
  },

  {
    title: 'Messages',
    path: '/',
    icon: <BsChatSquareDotsFill/>,
    cName: 'nav-text'
  },

  {
    title: 'Report',
    path: '/',
    icon: <BsExclamationTriangleFill/>,
    cName: 'nav-text'
  },

  {
    title: 'Settings',
    path: '/',
    icon: <BsGearFill/>,
    cName: 'nav-text'
  },

  {
    title: 'Sign Out',
    path: '/',
    icon: <BsBoxArrowInRight/>,
    cName: 'nav-text'
  }


]