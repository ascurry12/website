import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
    const [greetingIndex, setGreetingIndex] = useState("0");
    var greetings = ["Sul Sul!", "Hello!", "안녕하세요!", "Hola!", "Bonjour!", "こんにちは!", "Ciao!", "नमस्ते!"];

    useEffect(() => {
        const interval = setInterval(() => {
            setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
          }, 6000);

          return () => clearInterval(interval); 

    }, []);

  return (
    <div>
      <div className="banner-top">
        <h1 className="greeting">{greetings[greetingIndex]}</h1>
        <img className="icon" src="../../src/assets/plumbob.svg"></img>
      </div>
      <hr></hr>
      <h2>
        Welcome to my <span style={{ color: "#0C6736", fontWeight: "600" }}>portfolio</span>...
      </h2>
    </div>
  );
};

export default Banner;
