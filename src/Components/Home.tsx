import { useState } from "react";
import "./Styles.css";
import github from "./images/icon-github.svg";
import linkedin from "./images/icon-linkedin.svg";

import InbrowserMarkdown from "./images/Projects/InbrowserMarkdown.png";
import PlanetFactSite from "./images/Projects/PlanetFactSite.png";
import DictionaryWebApp from "./images/Projects/DictionaryWebApp.png";
import GitHubUserSearch from "./images/Projects/GitHubUserSearch.png";
import TipCalculator from "./images/Projects/TipCalculator.png";
import EntertainmentWebApp from "./images/Projects/EntertainmentWebApp.png";
import AudiophileECommerce from "./images/Projects/AudiophileECommerce.png";
import URLShortener from "./images/Projects/URLShortener.png";

function Home() {
  const [projects, setProjects] = useState([
    {
      name: "Inbrowser Markdown",
      src: InbrowserMarkdown,
      liveUrl: "https://inbrowser-markdown-nitesik.vercel.app/",
      githubUrl: "https://github.com/nitesik/InbrowserMarkdown",
      tools: ["NextJs", "tRPC", "Prisma"],
      hover: false,
    },

    {
      name: "Entertainment Web Application",
      src: EntertainmentWebApp,
      liveUrl: "https://entertainment-web-app-zeta.vercel.app/",
      githubUrl: "https://github.com/nitesik/EntertainmentWebApp",
      tools: ["NextJs", "Jotai"],
      hover: false,
    },

    {
      name: "Audiophile E-Commerce",
      src: AudiophileECommerce,
      liveUrl: "https://audiophile-ecommerce-liard.vercel.app/",
      githubUrl: "https://github.com/nitesik/AudiophileEcommerce",
      tools: ["NextJs"],
      hover: false,
    },

    {
      name: "URL Shortener",
      src: URLShortener,
      liveUrl: "https://nitesik.github.io/URLShortener/",
      githubUrl: "https://github.com/nitesik/URLShortener",
      tools: ["NextJs"],
      hover: false,
    },

    {
      name: "GitHub User Search",
      src: GitHubUserSearch,
      liveUrl: "https://nitesik.github.io/GitHubUserSearch/",
      githubUrl: "https://github.com/nitesik/GitHubUserSearch",
      tools: ["React"],
      hover: false,
    },

    {
      name: "Planet Fact Site",
      src: PlanetFactSite,
      liveUrl: "https://nitesik.github.io/PlanetFactSite/",
      githubUrl: "https://github.com/nitesik/PlanetFactSite",
      tools: ["React", "API"],
      hover: false,
    },

    {
      name: "Dictionary Web Application",
      src: DictionaryWebApp,
      liveUrl: "https://nitesik.github.io/DictionaryWebApp/",
      githubUrl: "https://github.com/nitesik/DictionaryWebApp",
      tools: ["React", "Material UI", "Dictionary API"],
      hover: false,
    },

    {
      name: "Tip Calculator",
      src: TipCalculator,
      liveUrl: "https://nitesik.github.io/TipCalculator/",
      githubUrl: "https://github.com/nitesik/TipCalculator",
      tools: ["React"],
      hover: false,
    },
  ]);

  function updateProjectsHover(index: number) {
    const newArr = projects;
    newArr[index].hover = true;
    // setButton(!button);
    setProjects([...newArr]);
  }

  function updateProjectsOut(index: number) {
    const newArr = projects;
    newArr[index].hover = false;
    // setButton(!button);
    setProjects([...newArr]);
  }

  function handleScroll() {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="container">
      <nav>
        <div className="title">neeteshchhetri</div>
        <div className="socials">
          <a href="https://github.com/nitesik" target="_blank" rel="noreferrer">
            <img src={github} alt="socials" />
          </a>
          <a
            href="https://www.linkedin.com/in/neetesh-chhetri-506b11259/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="socials" />
          </a>
        </div>
      </nav>
      <div className="intro">
        <div className="header">Nice to meet you!</div>
        <div className="header">
          I'm <span>Neetesh Chhetri</span>.
        </div>
        <div className="description">
          Currently in Thimphu, Bhutan. I'm a web developer who is passionate
          about building accessible web applications that users love.
        </div>
      </div>

      <button onClick={handleScroll}>
        <div className="contactme">CONTACT ME</div>
      </button>

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
          <button onClick={handleScroll}>
            <div className="contactme">CONTACT ME</div>
          </button>
        </div>
        <div className="project-content">
          {projects?.map((project, index) => (
            <div key={index} className="box">
              <div
                className="image"
                style={{ backgroundImage: `url(${project.src})` }}
                onMouseOver={() => {
                  updateProjectsHover(index);
                }}
                onMouseOut={() => {
                  updateProjectsOut(index);
                }}
              >
                {project.hover && (
                  <div className="inner-image">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <div className="contactme">VIEW PROJECT</div>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="contactme">VIEW CODE</div>
                    </a>
                  </div>
                )}
              </div>
              <div className="title">
                <a target="_blank" rel="noreferrer" href={project.liveUrl}>
                  {project.name}
                </a>
              </div>
              <div className="tools">
                {project.tools.map((tool, index) => (
                  <div key={index} className="tool">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-body">
            <div className="left">
              <div className="header">Contact</div>
              <div className="description" style={{ marginTop: "36px" }}>
                I would love to hear about your project and how I could help.
                And I'll get back to you as soon as possible.
              </div>
            </div>
            <div className="right">
              <div className="text">Email: neetesh2000@outlook.com</div>
              <div className="text">Mobile: +975 77360762</div>
            </div>
          </div>
          <div className="outro" id="contact">
            <div className="title">neeteshchhetri</div>
            <div className="socials">
              <a
                href="https://github.com/nitesik"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="socials" />
              </a>
              <a
                href="https://www.linkedin.com/in/neetesh-chhetri-506b11259/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="socials" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
