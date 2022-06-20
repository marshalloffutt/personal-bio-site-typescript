import Paper from "@mui/material/Paper";
import photo from "../../assets/images/me.jpg";
import "./Home.scss";

const HEADER_TEXT = "Marshall Offutt";
const TITLE_TEXT = "Full-Stack Developer";
const BLURB_TEXT = `I am a Nashville-based software developer with a focus on ASP.NET
Core, and React. I am passionate about continued education, and real-world problem
solving. I am currently working as a Software Engineer at Experian Health.`;

export default function Home() {
  return (
    <div className="home-container">
      <div className="introduction">
        <h1 className="header-text">{HEADER_TEXT}</h1>
        <h1 className="title-text">{TITLE_TEXT}</h1>
        <p className="text">{BLURB_TEXT}</p>
      </div>
      <div className="profile-picture">
        <Paper
          component="img"
          sx={{
            // height: 350,
            width: 300,
            boxShadow: 10,
          }}
          src={photo}
          alt="Profile photo of Marshall"
        />
      </div>
    </div>
  );
}
