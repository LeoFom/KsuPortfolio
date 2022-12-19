import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="about-img">
          <img src="/iam.webp" alt="Leonid Fomenko"></img>
        </div>
        <h2> Hi, My Name is Leonid Fomenko</h2>
        <div className="prompt">
          <p>A Front-end React.js developer.</p>
          <a href="https://www.linkedin.com/in/leonid-fomenko-leofom/" target="_blank"><LinkedInIcon /></a>
          <a href="mailto: l.fomenko003@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/LeoFom"><GitHubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, MongoDB, Node.js, React Native, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, DynamoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C++, TypeScript, React Native</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
