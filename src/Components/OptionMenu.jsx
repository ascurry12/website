import React from "react";
import Option from "./Option";
import "./OptionMenu.css";
import { Link } from "react-router-dom";
import { useRive } from "@rive-app/react-canvas";

const OptionMenu = () => {
  var options = [
    "About Me",
    "Projects",
    "Artwork",
    "GitHub",
    "LinkedIn",
    "The Sims Radio",
  ];
  var icons = {
    "About Me": "/src/assets/Conversation.png",
    Projects: "/src/assets/Scrapbook.png",
    Artwork: "/src/assets/Palette.png",
    GitHub: "/src/assets/ComputerKey.png",
    LinkedIn: "/src/assets/Briefcase2.png",
    "The Sims Radio": "/src/assets/MusicNotes.png",
  };

  var links = {
    "About Me": "/about",
    Projects: "/projects",
    Artwork: "/artwork",
    GitHub: "https://github.com/ascurry12",
    LinkedIn: "https://www.linkedin.com/in/aniyahc/",
    "The Sims Radio": "https://youtube.com/watch?list=PL7Q7YPyf6kMNRyx2HfvPT1k-dBXhIdnou&si=9egtZ67uawZkBRt1&shuffle=1",
  };

  var nums = {
    0: "one",
    1: "two",
    2: "three",
    3: "four",
    4: "five",
    5: "six",
  };

  const { rive, RiveComponent } = useRive({
    src: "/Users/aniyahc/Desktop/website/src/assets/splashscreen.riv",
    autoplay: true,
  });
  return (
    <div className="menu">
      <div className="system">
        <RiveComponent
          style={{ width: "300px", height: "300px" }}
          className="central"
        />
        {options.map((option, index) => (
          <div key={index} className={`orbiting ${nums[index]}`}>
            <Link to={links[option]} target={(option == "LinkedIn" || option == "GitHub" || option == "The Sims Radio") ? "_blank" : null}><Option key={index} label={option} icon={icons[option]} /></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionMenu;
