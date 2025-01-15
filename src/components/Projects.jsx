import heroImage from "../assets/images/hero-img.jpg";
function Projects(){
    return (
        <>
        <div className="projects">
            <h1>Projects</h1>
            <div className="row">
                <div className="project">
                <div className="project-image">
                    <img src={heroImage} />
                    </div>
                   
                    <div className="project-info">
                    <span className="number">01</span>
                    <h3 className="project-title">Project 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut felis cursus varius. Integer nec felis sed nunc ultricies ultricies. Phasellus nec nunc auctor, ultricies elit vitae, fermentum lorem. In hac habitasse platea dictumst.
                    </p>
                    <button className="btn link-btn"><a href="#">View website</a></button>
                    </div>
                    
                </div>
                <div className="project">
                <div className="project-info">
                    <span className="number">02</span>
                    <h3>Project 2</h3>
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
                    <h3>Project 3</h3>
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