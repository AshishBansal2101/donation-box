import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/ashish-bansal-b43b60192/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="/profile.png"
              alt="Founder"
            />
            <Typography>Ashish</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://github.com/AshishBansal2101" target="blank">
              <GitHubIcon className="youtubeSvgIcon" />
            </a>

            <a
              href="https://www.linkedin.com/in/ashish-bansal-b43b60192/"
              target="blank"
            >
              <LinkedinIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
