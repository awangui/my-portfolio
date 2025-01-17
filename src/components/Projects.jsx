import heroImage from "../assets/images/hero-img.jpg";
import landingPage from "../assets/images/landing-page.jpg";
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
                        A resale platform for preloved household items. Users can post items they no longer need and other users can purchase them. The platform is built using HTML, CSS, PHP, SQL and Javascript.
                    </p>
                    <button className="btn link-btn"><a href="https://github.com/awangui/DeclutterKe">View Repo</a></button>
                    </div>
                    
                </div>
                <div className="project">
                <div className="project-info">
                    <span className="number">02</span>
                    <h2 className="project-title">Project 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut felis cursus varius. Integer nec felis sed nunc ultricies ultricies. Phasellus nec nunc auctor, ultricies elit vitae, fermentum lorem. In hac habitasse platea dictumst.
                    </p>
                    <button className="btn link-btn"><a href="#">View website</a></button>
                    </div>
                    <div className="project-image">
                    <img src={heroImage} />
                    </div>
                    
                </div>
                <div className="project">
                <div className="project-image">
                    <img src={heroImage} />
                    </div>
                   
                    <div className="project-info">
                    <span className="number">03</span>
                    <h2 className="project-title">Project 3</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut felis cursus varius. Integer nec felis sed nunc ultricies ultricies. Phasellus nec nunc auctor, ultricies elit vitae, fermentum lorem. In hac habitasse platea dictumst.
                    </p>
                    <button className="btn link-btn"><a href="#">View website</a></button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default Projects;