import React from "react";
import { removeFromStorage } from "../../constants/Settings";

function Header() {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link text-primary" href="/">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-primary" href="/contact">
                        Contact
                    </a>
                </li>
                {/* Due to no description of how to verify if the user 
                is a user in the Strapi, I created a verifier for my own 
                useraccount on this precreated Strapi installation, 
                if you choose to use a seperate Strapi installation, please remove:
                
                '|| JSON.parse(localStorage.user).email !== "eskjelbred@gmail.com"' 
                
                from the code below.*/}
                {localStorage.length === 0 || JSON.parse(localStorage.user).email !== "eskjelbred@gmail.com" ? (
                    <>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="/login">
                                Login
                            </a>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="/admin">
                                Admin
                            </a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-primary bg-dark border-0" onClick={removeFromStorage}>
                                Logout
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </>
    );
}

export default Header;
