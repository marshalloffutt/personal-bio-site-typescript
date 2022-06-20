import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import photo from "../../assets/images/me.jpg";
import "./Home.scss";

const HEADER_TEXT = "Hello, I'm Marshall Offutt";
const TITLE_TEXT = "Full-Stack-Developer";
const BLURB_TEXT = `I am a Nashville-based software developer with a focus on ASP.NET
Core, and React. I am passionate about continued education, and real-world problem
solving. I am currently working as a Software Engineer at Experian Health.`;

export default function Home() {
  return (
    <div className="home-container">
      <div className="introduction">
        <Typography variant="h4">{HEADER_TEXT}</Typography>
        <Typography variant="h3" className="title-text">
          {TITLE_TEXT}
        </Typography>
        <Typography variant="h5">{BLURB_TEXT}</Typography>
      </div>
      <div className="profile-picture">
        <Paper
          component="img"
          sx={{
            height: 350,
            width: 350,
            maxHeight: { xs: 233, md: 300 },
            maxWidth: { xs: 350, md: 300 },
            boxShadow: 10,
          }}
          src={photo}
          alt="Profile photo of Marshall"
        />
      </div>
    </div>
  );
}
