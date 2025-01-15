import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
function Navbar(){
    return (
        <nav className="navbar">
            <ul className="nav">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item" >Projects</li>
                <li className="nav-item">Skills</li>
                <li className="nav-item" >Contact</li>
            </ul>
            <div className="links">
                <a href="https://github.com/awangui"><FontAwesomeIcon icon={faGithub} size="lg"  /></a>
                <a href="https://www.linkedin.com/in/anita-wangui-9868001b9"><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
                <a href="#"><FontAwesomeIcon icon={faMoon} size="lg"  /></a>
            </div>
        </nav>
    )
}
export default Navbar;