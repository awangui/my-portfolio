import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/hero-img.jpg";

function Header() {
  const [text, setText] = useState("");
  const fullText = "Hi there👋🏼, I am Anita Wangui";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="intro">
        <h1 className="hero-text">
          {text}
          <span className="cursor">|</span>
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
