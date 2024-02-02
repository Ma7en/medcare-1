/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaBars, FaHeartbeat, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import DarkModeToggle from "../themes/DarkModeToggle";
import Logo from "./Logo";

function Header() {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
        });
    }, []);

    return (
        <>
            <header className="header">
                <div className="container">
                    <Logo />

                    <DarkModeToggle />

                    <nav className={`${navbar ? "navbar active" : "navbar"}`}>
                        <ul>
                            <li>
                                <NavLink to="/home">home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/book">book</NavLink>
                            </li>

                            <li>
                                <NavLink to="/blogs">blogs</NavLink>
                            </li>

                            <li>
                                <NavLink to="/aboutus">aboutUs</NavLink>
                            </li>

                            <li>
                                <NavLink to="/login">login</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {navbar ? (
                        <FaTimes
                            className="fa-times"
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    ) : (
                        <FaBars
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    )}

                    {/* <FaBars id="menu-btn" /> */}
                    {/* <i id="menu-btn" className="fas fa-bars" /> */}
                </div>
            </header>
        </>
    );
}

export default Header;
