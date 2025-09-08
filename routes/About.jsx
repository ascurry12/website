import React from "react";
import "./About.css";

const About = () => {
  var traits = ["Adventurous", "Foodie", "Creative", "Dog Lover", "Ambitious"];
  var traitIcons = {
    Adventurous: "/src/assets/Computer3.png",
    Foodie: "/src/assets/Computer3.png",
    Creative: "/src/assets/Computer3.png",
    "Dog Lover": "/src/assets/Computer3.png",
    Ambitious: "/src/assets/Computer3.png",
  };
  var skills = [
    "React",
    "ASP.NET",
    "Microsoft Azure",
    "Git",
    "Storybook",
    "Procreate",
  ];
  var codingLanguages = ["Javascript", "Python", "C++", "C#", "HTML", "CSS"];
  var bluePalette = ["#3f7c5c6e", "1f74476e", "#315eaa78",  "#3f7c5c6e", "#4b6da678"];
  var greenPalette = ["#1d51ab78", "#315eaa78", "1f74476e", "#3f7c5c6e","#0c67376e"];
  return (
    <div className="about-container">
      <div className="about-head">
        <div>
          <h2 className="name">Aniyah Curry</h2>
          <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            vehicula purus. Fusce ultrices molestie tellus non elementum. In
            purus turpis, pharetra eu vulputate ut, efficitur eget ex. Morbi vel
            magna eu nulla auctor dapibus in eu urna. Quisque et mattis tortor.
            Suspendisse viverra metus vel ultrices cursus. Donec imperdiet
            libero et maximus tristique. Pellentesque ut tincidunt magna, eu
            maximus lorem. Integer aliquet vel leo ut dignissim. Donec quis
            accumsan enim, sit amet tempor lacus. Donec porta laoreet feugiat.{" "}
          </p>
        </div>
        <div>
          <img src="/src/assets/me.jpg" className="profile-pic"></img>
        </div>
      </div>
      <div className="about-foot">
        <div>
          <h2 className="heading">Traits</h2>
          <div className="traits">
            {traits.map((trait, index) => (
              <div key={index} className="trait">
                <img src={traitIcons[trait]}></img>
                <p>{trait}</p>
              </div>
            ))}
          </div>
          <h2 className="heading">Skills</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <p key={index} className="skill" style={{backgroundColor: bluePalette[index%bluePalette.length]}}>{skill}</p>
            ))}
          </div>
          <hr></hr>
          <div className="coding-langs">
            {codingLanguages.map((lang, index) => (
              <p key={index} className="coding-lang"style={{backgroundColor: greenPalette[index%greenPalette.length]}}>{lang}</p>
            ))}
          </div>
        </div>

        <div className="lang">
          <h3>Foreign Language</h3>
          <p>Korean (Intermediate) 🇰🇷</p>
        </div>
      </div>
    </div>
  );
};

export default About;
