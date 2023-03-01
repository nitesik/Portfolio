import { useState } from "react";
import "./Styles.css";
import github from "./images/icon-github.svg";
import linkedin from "./images/icon-linkedin.svg";

import PlanetFactSite from "./images/Projects/PlanetFactSite.png";
import DictionaryWebApp from "./images/Projects/DictionaryWebApp.png";
import ExpensesChart from "./images/Projects/ExpensesChart.png";
import FyloDarkTheme from "./images/Projects/FyloDarkTheme.png";
import InsureLandingPage from "./images/Projects/InsureLandingPage.png";
import InteractivePricing from "./images/Projects/InteractivePricing.png";
import GitHubUserSearch from "./images/Projects/GitHubUserSearch.png";
import TipCalculator from "./images/Projects/TipCalculator.png";

function Home() {

  const [projects, setProjects] = useState([

    {
      name: "GitHub User Search",
      src: GitHubUserSearch,
      liveUrl: "https://nitesik.github.io/GitHubUserSearch/",
      githubUrl: "https://github.com/nitesik/GitHubUserSearch",
      tools: ["React"],
      hover: false
    },

    {
      name: "Planet Fact Site",
      src: PlanetFactSite,
      liveUrl: "https://nitesik.github.io/PlanetFactSite/",
      githubUrl: "https://github.com/nitesik/PlanetFactSite",
      tools: ["React", "API"],
      hover: false
    },

    {
      name: "Dictionary Web Application",
      src: DictionaryWebApp,
      liveUrl: "https://nitesik.github.io/DictionaryWebApp/",
      githubUrl: "https://github.com/nitesik/DictionaryWebApp",
      tools: ["React", "Material UI", "Dictionary API"],
      hover: false
    },

    {
      name: "Insure Landing Page",
      src: InsureLandingPage,
      liveUrl: "https://nitesik.github.io/InsureLandingPage/",
      githubUrl: "https://github.com/nitesik/InsureLandingPage",
      tools: ["React"],
      hover: false
    },

    {
      name: "Interactive Pricing",
      src: InteractivePricing,
      liveUrl: "https://nitesik.github.io/InteractivePricingComponent/",
      githubUrl: "https://github.com/nitesik/InteractivePricingComponent",
      tools: ["React", "Material UI"],
      hover: false
    },
    
    {
      name: "Tip Calculator",
      src: TipCalculator,
      liveUrl: "https://nitesik.github.io/TipCalculator/",
      githubUrl: "https://github.com/nitesik/TipCalculator",
      tools: ["React"],
      hover: false
    }
  ])

  function updateProjectsHover(index : number) {
    const newArr = projects;
    newArr[index].hover = true;
    // setButton(!button);
    setProjects([...newArr]);
  }

  function updateProjectsOut(index : number) {
    const newArr = projects;
    newArr[index].hover = false;
    // setButton(!button);
    setProjects([...newArr]);
  }

  function handleScroll() {

    const element = document.getElementById("contact");
    element?.scrollIntoView({behavior: "smooth"});
  }
  
  return (
    <div className="container">
      <nav>
        <div className="title">neeteshchhetri</div>
        <div className="socials">
          <a href="https://github.com/nitesik" target="_blank"><img src={github} alt="socials" /></a>
          <a href="https://www.linkedin.com/in/neetesh-chhetri-506b11259/" target="_blank"><img src={linkedin} alt="socials" /></a>
        </div>
      </nav>
      <div className="intro">
        <div className="header">Nice to meet you!</div>
        <div className="header">I'm <span>Neetesh Chhetri</span>.</div>
        <div className="description">Currently in Greater Noida, UP, I'm a web developer who is passionate about building accessible web applications that users love.</div>
      </div>

      <a onClick={handleScroll}><div className="contactme">CONTACT ME</div></a>

      <div className="skills">
        <div className="skill">
          <div className="title">React</div>
          <div className="description">3 Years Experience</div>
        </div>
        <div className="skill">
          <div className="title">Javascript</div>
          <div className="description">3 Years Experience</div>
        </div>
        <div className="skill">
          <div className="title">HTML</div>
          <div className="description">3 Years Experience</div>
        </div>
        <div className="skill">
          <div className="title">CSS</div>
          <div className="description">3 Years Experience</div>
        </div>
        <div className="skill">
          <div className="title">ASP.NET</div>
          <div className="description">1 Year Experience</div>
        </div>
      </div>

      <div className="projects">
        <div className="project-header">
          <div className="header">Projects</div>
          <a onClick={handleScroll}><div className="contactme">CONTACT ME</div></a>
        </div>
        <div className="project-content">
          {projects?.map((project, index) => (
            <div key={index} className="box">
              <div className="image" style={{backgroundImage: `url(${project.src})`}} onMouseOver={() => {updateProjectsHover(index)}} onMouseOut={() => {updateProjectsOut(index)}}>
                { project.hover && <div className="inner-image">
                  <a href={project.liveUrl} target="_blank"><div className="contactme">VIEW PROJECT</div></a>
                  <a href={project.githubUrl} target="_blank"><div className="contactme">VIEW CODE</div></a>
                </div>}
              </div>
              <div className="title">{project.name}</div>
              <div className="tools">{project.tools.map((tool, index) => (
                <div key={index} className="tool">{tool}</div>
              ))}</div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-body">
            <div className="left">
              <div className="header">Contact</div>
              <div className="description" style={{marginTop: "36px"}}>I would love to hear about your project and how I could help. And I'll get back to you as soon as possible.</div>
            </div>
            <div className="right">
              <div className="text">Email: neetesh2000@outlook.com</div>
              <div className="text">Mobile: +91 9654236179</div>
            </div>
          </div>
          <div className="outro" id="contact">
            <div className="title">neeteshchhetri</div>
            <div className="socials">
            <a href="https://github.com/nitesik" target="_blank"><img src={github} alt="socials" /></a>
            <a href="https://www.linkedin.com/in/neetesh-chhetri-506b11259/" target="_blank"><img src={linkedin} alt="socials" /></a>
          </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;