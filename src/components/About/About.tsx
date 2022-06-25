import "./About.scss";
import moment from "moment";

export default function About() {
  let years: number = moment().diff("2019-08-01", "years");

  const ABOUT_ME_TEXT_1: string = `Technology has always been an obsession of mine. As someone
	who appreciates well-thought-out design, loves to build things, and has a passion for
	learning, it became obvious that software development was the perfect career - and
	hobby - to induldge my curious nature and penchant for tinkering.`;

  const ABOUT_ME_TEXT_2: string = `I am currently employed as a Software Engineer at Experian
	Health. With over ${years} years of enterprise-level experience under my belt, I can
	honestly say that I love what I do! `;

  return (
    <div className="about-me-container">
      <h1 className="about-me-header-text">About me</h1>
      <p className="about-me-text">{ABOUT_ME_TEXT_1}</p>
      <p className="about-me-text">{ABOUT_ME_TEXT_2}</p>
    </div>
  );
}
