import React from 'react'
import style from './style.module.css';
function Sidebar() {
    return (
        <div className={style.sidebar}>
            <div className={style.sidebarNavigation}>
                <li>Overview</li>
                <li>Profile</li>
                <li>Appointments</li>
                <li>History
                    <ul>
                        <li>Videos</li>
                        <li>Videos Library</li>
                    </ul>
                </li>
                <li>Messages</li>
                <li>Support
                    <ul>
                        <li>FAQ’s</li>
                        <li>Procedure Information</li>
                    </ul>
                </li>
                <li>Aftercare
                    <ul>
                        <li>Quizzes</li>
                        <li>Health & Skin Assesment</li>
                    </ul>
                </li>
                <li>Finances</li>
                <li>Virtual Consultation</li>



            </div>
        </div>
    )
}

export default Sidebar;
