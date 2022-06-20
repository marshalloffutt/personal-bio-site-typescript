import { Typography } from "@mui/material";
import photo from "../../assets/images/me.jpg";
import "./Home.scss";

const HEADER_TEXT = "Hello, I'm Marshall Offutt";
const TITLE_TEXT = "Full-Stack-Developer";
const BLURB_TEXT = `I am a Nashville-based software Developer with a focus on ASP.NET
Core, and ReactJS. I am passionate about continued education, and
real-world problem solving. I am currently working as a Software
Engineer at Experian Health.`;

export default function Home() {
  return (
    <div className="home-container">
      <div className="introduction">
        <Typography variant="h4">{HEADER_TEXT}</Typography>
        <Typography variant="h3">{TITLE_TEXT}</Typography>
        <Typography variant="h5">{BLURB_TEXT}</Typography>
      </div>
      <div className="profile-picture">
        <img
          alt="Profile picture of Marshall Offutt."
          src={photo}
          height={250}
        />
      </div>
    </div>
  );
}
