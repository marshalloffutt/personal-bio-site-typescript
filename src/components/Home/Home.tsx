import Paper from "@mui/material/Paper";
import photo from "../../assets/images/me.jpg";
import "./Home.scss";
import { EMPLOYER_NAME } from "../lib/constants";

const HEADER_TEXT: string = "Marshall Offutt";
const TITLE_TEXT: string = "Full-Stack Developer";
const BLURB_TEXT: string = `Nashville-based software developer with a focus on ASP.NET
Core, and React. Passionate about continued education, and real-world problem
solving. Currently working as a Software Engineer at ${EMPLOYER_NAME}`;

export default function Home() {
  return (
    <div className="home-container">
      <div className="introduction">
        <h1 className="header-text-black">{HEADER_TEXT}</h1>
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
