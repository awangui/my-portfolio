import heroImage from "../assets/images/hero-img.jpg";
import landingPage from "../assets/images/landing-page.jpg";
import wandersoul from "../assets/images/wandersoul.png";
import scrabble from "../assets/images/scrabble.jpg";
import moringa from "../assets/images/moringa.png";
import construction from "../assets/images/construction.jpg";
function Projects(){
    return (
        <>
        <div className="projects">
            <h1>Projects</h1>
            <div className="row">
                <div className="project">
                <div className="project-image">
                    <img src={landingPage} />
                    </div>
                   
                    <div className="project-info">
                    <span className="number">01</span>
                    <h2 className="project-title">DeclutterKe</h2>
                    <p>
                        A resale platform for pre-loved household items. Users can post items they no longer need and other users can purchase them. The platform is built using HTML, CSS, PHP, SQL and Javascript.
                    </p>
                    <button className="btn link-btn"><a href="https://github.com/awangui/DeclutterKe">View Repo</a></button>
                    </div>
                    
                </div>
                <div className="project">
                <div className="project-info">
                    <span className="number">02</span>
                    <h2 className="project-title">Moringa IMS</h2>
                    <p>
                    Moringa IMS is an inventory management system for Moringa School, designed to track assets, manage borrowing/returns, and integrate barcode/QR scanning. As part of a team of five developers, I contributed to the frontend, building an intuitive user interface with React.js to ensure seamless inventory management. The system follows a microservice architecture, with a Flask backend and PostgreSQL for data management.
                    </p>
                    <button className="btn link-btn"><a href="https://moringa-ims.netlify.app/">View website</a></button>
                    <button className="btn link-btn" style={{ marginLeft: "10px" }}><a href="https://github.com/awangui/moringa-ims-frontend">View Repo</a></button>
                    </div>
                    <div className="project-image">
                    <img src={moringa} />
                    </div>
                    
                </div>
                <div className="project">
                <div className="project-image">
                    <img src={scrabble} />
                    </div>
                   
                    <div className="project-info">
                    <span className="number">03</span>
                    <h2 className="project-title">Scrabble CLI</h2>
                    <p>
                    Scrabble CLI is a command-line Scrabble game featuring valid word verification, bonus tiles, and AI-powered gameplay. It ensures proper adjacency and crossword validation while allowing players to compete against an intelligent computer opponent. Built with Python, it enforces Scrabble rules for an authentic word game experience.
                    </p>
                    <button className="btn link-btn"><a href="https://github.com/Patricia-Sigei/Scrabble-CLI">View Repo</a></button>
                    </div>
                </div>
                <div className="project">
                <div className="project-info">
                    <span className="number">04</span>
                    <h2 className="project-title">WanderSoul</h2>
                    <p>
                    An ongoing travel platform designed for solo travelers, allowing users to book guides, explore reviews, create wishlists, and share their travel experiences. Built with Bootstrap and React.js for the front end, and powered by Flask and PostgreSQL on the back end.
                    </p>
                    <button className="btn link-btn"><a href="https://wandersouls.netlify.app/">View Website</a></button>
                    <button className="btn link-btn" style={{ marginLeft: "10px" }}><a href="https://github.com/awangui/wandersoul-backend">View Repo</a></button>
                    </div>
                    <div className="project-image">
                    <img src={wandersoul} />
                    </div>
                    
                </div>
                <div className="project">
                <div className="project-image">
                    <img src={construction} />
                    </div>
                   
                    <div className="project-info">
                    <span className="number">05</span>
                    <h2 className="project-title">Cinex</h2>
                    <p>
                    Cinex is an ongoing movie website I’m working on as part of a team of five developers. It allows users to browse movie listings, read reviews, and receive personalized recommendations. he backend is powered by Flask/Node.js with PostgreSQL for data management, ensuring a smooth and interactive movie experience.
                    </p>
                    <button className="btn link-btn"><a href="https://github.com/CodAvengers/cinex-backend">View Repo</a></button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default Projects;