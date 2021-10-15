import React from 'react'
import Profile from '../Media/profile.jpeg';

export const Header = () => {
    return (
        <div className="Header">
            <a className="headerlinks" href="https://mail.google.com/"><b>Gmail</b></a>
            <a className="headerlinks" href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl"><b>Images</b></a>&nbsp;

            <a><img src={Profile} alt="profile" className="profile"></img></a>

        </div>
    )
}
