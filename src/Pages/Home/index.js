import react from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import "./style.css";
// import headerImage from "../../../src/img/_storage_emulated_0_Pictures_Cartoon_Photo_cartoon1640817749680.jpg";
import headerImage from "../../../src/img/_storage_emulated_0_Pictures_Cartoon_Photo_cartoon1640818583344.jpg";
import projectOne from "../../../src/img/Screen Shot 2021-12-29 at 4.20.44 PM.png";
import projectTwo from "../../../src/img/Screen Shot 2021-12-29 at 4.23.09 PM.png";
import projectThree from "../../../src/img/Screen Shot 2021-12-29 at 4.25.59 PM.png";
import projectFour from "../../../src/img/Screen Shot 2021-12-29 at 4.24.12 PM.png";
import projectFive from "../../../src/img/Screen Shot 2021-12-29 at 4.24.49 PM.png";
import me from "../../../src/img/meeeeeeee.jpeg";

//importing icons

import { FiMail } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const fadeStickyMoveOut = batch(Fade(), Sticky(), MoveOut(0, -200));
const fadeStickyMoveOut2 = batch(Fade(), Sticky(), MoveOut(-1000, -400));
const fadeStickyMoveOut3 = batch(Fade(), Sticky(), MoveOut(1000, 500));

const handleContactClick = (url) => {
  const win = window.open(url, "blank");
  win.focus();
};
//we fixed the link

const Home = () => {
  const work = [
    {
      name: "Trivia",
      link: "https://pensive-mahavira-832497.netlify.app",
      imageSrc: projectOne,
    },
    {
      name: "Wishlistst",
      link: "https://td-penguin-project2.herokuapp.com/wishlists",
      imageSrc: projectTwo,
    },
    {
      name: "uWish [Group Wishlist]",
      link: "https://penguin-react-express-project3.netlify.app",
      imageSrc: projectThree,
    },
    {
      name: "Sneaker List",
      link: "https://peaceful-khorana-fbb22c.netlify.app/",
      imageSrc: projectFour,
    },
    {
      name: "Bills",
      link: "https://stupefied-perlman-e7e2a5.netlify.app/",
      imageSrc: projectFive,
    },
  ];
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="image-container">
            <img src={headerImage} alt="header image" />
            <div className="black-background"></div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
          <div className="name">
            <h2 className="first">Tony</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
          <div className="name">
            <h2 className="last">Daniels</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
          <div className="position">
            <div></div>
            <h2 className="last">Software Engineer</h2>
          </div>
        </Animator>
      </ScrollPage>

      {/* section 2 */}

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title">Portfolio</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={fadeStickyMoveOut} />
        <div className="portfolio-content">
          {work?.map((work, index) => {
            return (
              <a href={work?.link} targe="_blank" key={work?.name}>
                <div className="portfolio-card">
                  <div className="project-image">
                    <img src={work?.imageSrc} alt={work?.name} />
                  </div>
                  <div className="portfilio-title">
                    <h3>{work?.name}</h3>
                  </div>
                  <div className="count">{index}</div>
                </div>
              </a>
            );
          })}
        </div>
      </ScrollPage>

      {/* section 3 */}
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title about-me">About Me</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={fadeStickyMoveOut2}>
          <div className="background-image-container">
            <img src={me} alt="my picture" />
            <div className="black-background"></div>
          </div>
        </Animator>
        <Animator animation={fadeStickyMoveOut3}>
          <div className="details">
            <h2 className="greeting">Hello!</h2>
            <p className="bio">
              I’m Tony and I am Software Engineer. I have a background in audio
              engineering and production, warehouse working and attended
              college.
            </p>
            <br></br>
            <p className="bio">
              I gained the skill in software engineering and development to help
              companies in making and maintaining products/ applications. I am
              familiar with the skills that are a branch off of software
              engineering such as Javascript, jQuery, React, Python, GitHub,
              CSS, HTML, Express, Node.js, Liquid and MongoDB . I am very
              optimistic and am willing to learn any new skills that are
              required in working for and being a part of a company.
            </p>
            <br></br>
            <p className="bio">
              Learning new material as well as implementing my own knowledge
              into this field involves a lot of patience, hard work, dedication
              and teamwork which I am aware of. I want to be the one that gets
              the chance to show a company how great of an employee I can be.
            </p>
            <br></br>
            <p className="bio">I hope to see you all soon!</p>
            <br></br>
            <p className="bio">Email: tddanielsjr@gmail.com</p>
            <p className="bio">GitHub: https://github.com/GuMarYae</p>
          </div>
        </Animator>
      </ScrollPage>

      {/* section 4 */}
      <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title contact">Contact</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: "40px" }}>
            {/* ================================================================================================== */}
            {/* insta link */}
            {/* ================================================================================================== */}
            <Animator animation={MoveIn(-1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() =>
                  handleContactClick("https://www.instagram.com/gumaryae/")
                }
              >
                <SiInstagram color="white" className="contact-list-icon" />
                <p>GuMarYae</p>
              </div>
            </Animator>
            {/* ================================================================================================== */}
            {/* gmail */}
            {/* ================================================================================================== */}
            <Animator animation={MoveIn(1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() =>
                  handleContactClick(
                    "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  )
                }
              >
                <FiMail color="white" className="contact-list-icon" />

                <p>tddaniels@gmail.com</p>
              </div>
            </Animator>
            {/* ================================================================================================== */}
            {/* gitHub Link */}
            {/* ================================================================================================== */}
            <Animator animation={MoveIn(-1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() =>
                  handleContactClick("https://github.com/GuMarYae")
                }
              >
                <FiGithub color="white" className="contact-list-icon" />

                <p>GuMarYae on GitHub</p>
              </div>
            </Animator>
            {/* ================================================================================================== */}
            {/* LinkedIn link */}
            {/* ================================================================================================== */}
            <Animator animation={MoveIn(1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() =>
                  handleContactClick(
                    "https://www.linkedin.com/in/tony-daniels-8b6058165/"
                  )
                }
              >
                <TiSocialLinkedin color="white" className="contact-list-icon" />

                <p>GuMarYae on LinkedIn</p>
              </div>
            </Animator>
          </span>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Home;
