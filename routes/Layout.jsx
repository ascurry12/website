import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Layout.css";

const Layout = (props) => {
  const params = useParams();

  var options = [
    "Home",
    "About Me",
    "Projects",
    "Artwork",
    "GitHub",
    "LinkedIn",
    "The Sims Radio",
  ];
  var icons = {
    Home: "../../src/assets/House.png",
    "About Me": "../../src/assets/Conversation.png",
    Projects: "../../src/assets/Scrapbook.png",
    Artwork: "../../src/assets/Palette.png",
    GitHub: "../../src/assets/ComputerKey.png",
    LinkedIn: "../../src/assets/Briefcase2.png",
    "The Sims Radio": "../../src/assets/MusicNotes.png",
  };

  var links = {
    Home: "/",
    "About Me": "/about",
    Projects: "/projects",
    Artwork: "/artwork",
    GitHub: "https://github.com/ascurry12",
    LinkedIn: "https://www.linkedin.com/in/aniyahc/",
    "The Sims Radio":
      "https://youtube.com/watch?list=PL7Q7YPyf6kMNRyx2HfvPT1k-dBXhIdnou&si=9egtZ67uawZkBRt1&shuffle=1",
  };

  return (
    <div>
      <div className="banner-top">
        <h1 className="title">
          {params.title
            .split(" ")
            .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
            .join("")}
        </h1>
        <div className="nav">
          {options.map((option, index) =>
            (option == "The Sims Radio" || option == "GitHub" || option == "LinkedIn") ? (
              <a className="nav-join" key={index} target="_blank" href={links[option]}>
                <img className="nav-icon" src={icons[option]}></img>
                <p className="nav-option">{option}</p>
              </a>
            ) : (
              <Link
                className="nav-join"
                key={index}
                to={links[option]}
              >
                <img className="nav-icon" src={icons[option]}></img>
                <p className="nav-option">{option}</p>
              </Link>
            )
          )}
        </div>
        <img className="icon" src="../../src/assets/plumbob.svg"></img>
      </div>
      <hr></hr>
      <Outlet />
    </div>
  );
};

export default Layout;
