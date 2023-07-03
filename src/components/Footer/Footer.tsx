import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.scss';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-upper">
        <Link
          href="mailto:marshalloffutt@gmail.com?subject=Hi!!"
          target="_blank"
          title="Email me"
        >
          <EmailIcon fontSize="large" className="icon" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/marshalloffutt/"
          target="_blank"
          title="LinkedIn"
        >
          <LinkedInIcon fontSize="large" className="icon" />
        </Link>
        <Link
          href="https://github.com/marshalloffutt"
          target="_blank"
          title="GitHub"
        >
          <GitHubIcon fontSize="large" className="icon" />
        </Link>
      </div>
      <div className="footer-lower">
        <h3>2022</h3>
      </div>
    </footer>
  );
}
