import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Rishabh</h2>
        <div className="prompt">
          <p>
            Tech enthusiast always hungry for knowledge in software development.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <a
            href="https://github.com/riishabhraj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, TailwindCSS, Firebase BootStrap,
              MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, PostgreSQL MySQL, MongoDB, DynamoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
