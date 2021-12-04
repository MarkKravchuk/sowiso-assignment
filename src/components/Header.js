import React from "react";
import './Header.css'

const Header = () => {
    return <div className={'header'}>
        <ul>
            <li>
                <div className="logo">
                    <a href="https://sowiso.nl/en/">
                        <img alt="company logo" src="https://sowiso.nl/images/logo-cl.svg"/>
                    </a>
                </div>
            </li>
            <li id={'title'}>
                <p>Count exercise for technical interview</p>
            </li>
        </ul>
    </div>
}

export default Header;
