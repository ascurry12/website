import React from "react";
import Option from "./Option";
import "./OptionMenu.css";
import Rive from "@rive-app/react-canvas";
import { useRive } from "@rive-app/react-canvas";

const OptionMenu = () => {
  var options = [
    "About Me",
    "Projects",
    "GitHub",
    "LinkedIn",
    "Artwork",
    "Sims Radio",
  ];
  var icons = {
    "About Me": "src/assets/Conversation.png",
    Projects: "src/assets/Scrapbook.png",
    Artwork: "src/assets/Palette.png",
    GitHub: "src/assets/ComputerKey.png",
    LinkedIn: "src/assets/Briefcase2.png",
    "Sims Radio": "src/assets/MusicNotes.png",
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
    src: "src/assets/splashscreentransparent.riv",
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
            <Option key={index} label={option} icon={icons[option]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionMenu;
