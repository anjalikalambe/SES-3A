import React from 'react';
import './Sidebar.css'
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

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
            <FaIcons.FaBeer/>
            </div>
        </div>
        <div className="divider"></div>
        <div className="main-menu">
            <ul>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <FaIcons.FaBeer/>
                       </div>
                        <span>Dashboard</span></a>
                </li>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <FaIcons.FaBeer/>
                       </div>
                       <span>Messages</span></a>
                </li>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <FaIcons.FaBeer/>
                       </div>
                       <span>Report</span></a>
                </li>
            </ul>
        </div>

        <div className='footer'></div>

        
        
     </div>

    </>
    );
}

export default Sidebar;