import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/leonid.fmnk/" target="_blank"><InstagramIcon /></a>
        <a href="https://www.facebook.com/leonid.fmnk" target="_blank"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/leonid-fomenko-leofom/" target="_blank"><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default Footer;
