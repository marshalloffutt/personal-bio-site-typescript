import "./About.scss";
import moment from "moment";
import { EMPLOYER_NAME } from "../../lib/constants";

export default function About() {
  let years: number = moment().diff("2019-08-01", "years");

  const ABOUT_ME_TEXT_1: string = `Technology has always been an obsession of mine. As
	someone who appreciates well-thought-out design, loves to build things, and has a
	passion for	learning, it became obvious that software development was the perfect
	career - and hobby - to induldge my curious nature and penchant for tinkering.`;

  const ABOUT_ME_TEXT_2: string = `I am currently employed as a Software Engineer at
	${EMPLOYER_NAME}. With over ${years} years of enterprise-level experience under my
	belt, I can honestly say that I love what I do! Few things in life are more
	satisfying than collaboration and teambuilding with a shared goal of building great
	software.`;

  const ABOUT_ME_TEXT_3: string = `Outside of work, I try to keep an active and healthy
	lifestyle. I'm a lifelong dedicated runner who also loves hiking with my wife and dogs.
	For fun I love to travel, scream until I'm hoarse at Nashville SC matches, or just
	relax with some video games. I also make a point to budget personal time to keeping up
	with trends in the IT field, learning new technologies and coding personal projects.`;

  return (
    <div className="about-me-container">
      <h1 className="about-me-header-text">About Me</h1>
      <p className="about-me-text">{ABOUT_ME_TEXT_1}</p>
      <p className="about-me-text">{ABOUT_ME_TEXT_2}</p>
      <p className="about-me-text">{ABOUT_ME_TEXT_3}</p>
    </div>
  );
}
