import React from "react";
import profile from '../profile.svg';

function Nav() {
    return (
        <div>
            <nav>
                <a href="http://google.com">qxtionary</a>
                <img src={profile} alt="logo" width="60" />
            </nav>
        </div>
    ); 
}

export default Nav;