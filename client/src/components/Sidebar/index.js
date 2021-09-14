import React from 'react';
import './Sidebar.css'
import { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

const Sidebar = (props) => {
    const [inactive, setInactive] = useState(false);

    return (
    <>
    <div className={`side-menu ${inactive ? "inactive" : ''}`}>
        <div className='top-section'>
            
            <div 
                onClick={() => {
                    setInactive(!inactive);
                }}          
            className="toggle-menu-btn">
            <BiIcons.BiCaretLeft/>
            </div>
        </div>
        <div className="divider"></div>
        <div className="main-menu">
            <ul>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <BiIcons.BiHomeAlt/>
                       </div>
                        <span>Dashboard</span></a>
                </li>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <BiIcons.BiChat/>
                       </div>
                       <span>Messages</span></a>
                </li>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <BsIcons.BsExclamationTriangleFill/>
                       </div>
                       <span>Report</span></a>
                </li>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <BsIcons.BsGear/>
                       </div>
                       <span>Settings</span></a>
                </li>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <BiIcons.BiLogOut/>
                       </div>
                       <span>Log Out</span></a>
                </li>
            </ul>
        </div>

        <div className='footer'></div>

        
        
     </div>

    </>
    );
}

export default Sidebar;