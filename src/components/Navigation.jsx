import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Navbar({ darkMode, toggleDarkMode }) {
    const toggleNavbar = () => {
        const nav = document.querySelector('.navbar');
        nav.classList.toggle('nav-toggle');
    };

    return (
        <>
            <nav className="navbar">
                <div className="menu" onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={faHamburger} size="lg" />
                </div>
                <ul className="nav">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/projects">Projects</Link></li>
                    <li className="nav-item"><Link to="/skills">Skills</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="links">
                    <a href="https://github.com/awangui" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/anita-wangui-9868001b9" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
                {/* Dark Mode toggle */}
                <span className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? <FontAwesomeIcon icon={faSun} size="lg" /> : <FontAwesomeIcon icon={faMoon} size="lg" />}
                </span>
            </nav>
        </>
    );
}

export default Navbar;