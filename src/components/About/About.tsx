import "./About.scss";

const ABOUT_ME_TEXT = `You might say that technology has always been an obsession of mine.
Some of my fondest childhood memories were of playing old DOS games on our 486 personal
computer. I was fortunate that when problems arose - and boy, did they! - I had my dad to help me
troubleshoot through the issues. It was in those experiences that I learned how to tinker`;

const ABOUT_ME_TEXT_OLD = `Some of my earliest childhood memories were of booting
up the old 486 into GeoWorks, or making batch files in DOS to run my old
favorite computer games. And while the games themselves were fun, it was in
somehow getting those archaic pieces of software to work on our home setup
where the true joy was found. It was just like solving a puzzle. That love
for problem-solving is part of why I chose to go into an engineering-related
field at LSU. There I studied Construction Management and ended up working
for a full-service engineering firm as a project manager for their steel
detailing team. After nearly a decade of structural steel detailing -
and after managing over 100 projects - I decided I wanted to build in an
environment with fewer limitations, where I would have more freedom in
coming up with creative solutions to problems. So I chose to become a
software developer at Nashville Software School, marrying two great passions
of my life: building and technology.`;

export default function Contact() {
  return (
    <div className="about-me-container">
      <h1 className="header-text">About me</h1>
      <p className="text">{ABOUT_ME_TEXT}</p>
    </div>
  );
}
