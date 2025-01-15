import heroImage from "../assets/images/hero-img.jpg";
function Header() {
  return (
    <div className="hero">
      <div className="intro">
        <h1 className="hero-text">
          Hi there👋🏼, I am
          <span> Anita Wangui</span>
        </h1>
        <p className="h-sub-text">
          A Kenyan based software developer, passionate about creating solutions that solve real-world problems. My speciality is in Front-end development, I love creating user-friendly interfaces that are both visually appealing and functional. Find more about me below.
        </p>
      </div>

        <img src={heroImage} alt="hero" />
  
    </div>
  );
}
export default Header;