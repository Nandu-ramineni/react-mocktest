import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube,faFacebook,faInstagram,faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import "./Style.css";
const AboutUs = () => {
  return (
    <div className="about-us"> <br />
      <h2>About Us</h2>
      <div className="about-us-content">
        <div className="about-us-image">
        <img src={'https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=740&t=st=1700131812~exp=1700132412~hmac=cdecc1c8091ec372821f97289cfa80263f2aed1284f916e6b264cc4141cd982e'} alt="About Us" />
        </div>
        <div className="about-us-text">
          <p>
            Welcome to Mocktest Monsters! We are passionate about providing a
            comprehensive and effective learning experience for competitive exam
            preparation. Our platform is designed to support students preparing
            for exams like JEE, GATE, TSPSC, and more.
          </p>
          <p>
            At Mocktest Monsters, we understand the challenges of exam
            preparation, and our mission is to guide students through this
            journey. Our team of experienced educators is dedicated to creating
            high-quality mock tests, offering valuable insights, and helping
            students excel in their exams.
          </p>
          <p>
            Join us in the pursuit of academic excellence. Mocktest Monsters is
            not just a platform for test preparation; it's a community that
            fosters learning, growth, and success. Explore our test components
            and exciting crash courses to kickstart your preparation today!
          </p>
          <div className="social-icons">
            <a
              href="YOUR_YOUTUBE_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="YOUR_FACEBOOK_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="YOUR_INSTAGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="YOUR_LINKEDIN_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
