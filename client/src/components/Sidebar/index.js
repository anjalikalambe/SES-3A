import React from 'react';
import './Sidebar.css'
import { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';



const Sidebar = (props) => {
    const [inactive, setInactive] = useState(true);

    return (
    <>
    <div className={`side-menu ${inactive ? "inactive" : ''}`}>
        <div className='top-section'> 
            <div 
                onClick={() => {
                    setInactive(!inactive);
                }}          
            className="toggle-menu-btn">
                {inactive ? <BiIcons.BiCaretRight/> : <BiIcons.BiCaretLeft/>}
            </div>
            
        </div>
        <div className="main-menu">
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <Link className="iconlink" component={RouterLink} to="/">
                           <BiIcons.BiHomeAlt/>
                           </Link>
                       </div>
                       <Link className="textlink" component={RouterLink} to="/">
                        <span>Dashboard</span></Link>
                        </a>  
                </li>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <Link className="iconlink" component={RouterLink} to="/">
                       <BiIcons.BiChat/>
                       </Link>
                       </div>
                       <Link className="textlink" component={RouterLink} to="/">
                       <span>Messages</span> </Link>
                       </a>
                </li>
                <li>
                    <a className='menu-item'>
                       <div className="menu-icon">
                       <Link className="iconlink" component={RouterLink} to="/">
                       <BsIcons.BsExclamationTriangleFill/>
                       </Link>
                       </div>
                       <Link className="textlink" component={RouterLink} to="/">
                       <span>Report</span>
                       </Link></a>
                </li>
        </div>

        <div className='footer'>
        <li>
                    <a className='bottom-menu'>
                       <div className="bottom-icon">
                       <Link className="iconlink" component={RouterLink} to="/">
                       <BsIcons.BsGear/>
                       </Link>
                       </div>
                       <Link className="textlink" component={RouterLink} to="/">
                       <span>Settings</span></Link></a>
                </li>
                <li>
                    <a className='bottom-menu'>
                       <div className="bottom-icon">
                       <Link className="iconlink" component={RouterLink} to="/">
                       <BiIcons.BiLogOut/>
                       </Link>
                       </div>
                       <Link className="textlink" component={RouterLink} to="/">
                       <span>Log Out</span></Link></a>
                </li>
        </div>

        
        
     </div>

    </>
    );
}

export default Sidebar;