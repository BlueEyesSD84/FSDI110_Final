import "./aboutMe.css";
import { useState } from "react";

const AboutMe = () => {
  const [name, setName] = useState(" ");

  const showName = () => {
    setName("JAJA");
  };

  return (
    <div className="about-me">
      <div
        className="BG"
        style={{
          backgroundImage: 'url("/images/BG.png")',
        }}
      >
        <h1>Hi, My name is</h1>
        <h4>{name}</h4>

        <button onClick={showName}>See my Name</button>

        <div className="parent">
          <section className="About">
           <img src="/images/JAJA2.png"/>
          </section>
          <section className="JAJA_writeUp">
            <h3>
              I am a 16 year old Artist/Illustrator from the Philippines. My
              artworks works are mostly influenced by Japanese pop culture which
              I took an interest of at a very young age. I am learning and are
              still very curious about the way I draw since I still haven't
              decided on a specific artstyle that im comfortable and happy with.
              Hence why I am very open about trying out new ways and styles when
              it comes to illustrating. I have a fixation on drawing humans
              since I find their personality alone tells a lot about themselves.
              This is my way of storytelling, it's vague, so anyone can
              interpret it in any way they want. I don't put a specific story
              behind my works, I want others to have their own interpretation of
              my drawings!  Thank you for checking out my web site.  If you see anything you like, you can purchase it and place it in your cart. 
            </h3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
