import React from "react";
import "../Styles/About.css"
import aboutImg from "../assets/about-img.jpg";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Layout from "./Layout";
const About = () => {
  return (
    <Layout>
      <section id="about">
        <h5 className="mt-5 text-center text-3xl font-bold">Get to Know</h5>
        <h2 className="mb-10 text-center text-2xl font-semibold">About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={aboutImg} alt="This is my image" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
            <a href="https://www.linkedin.com/in/manan-nasir-243aa6190/" target="_blank">
              <article className="about_card">
                <BsLinkedin className="about_icon" />
                <h5>LinkedIn</h5>
                <small>2+ Years Working</small>
              </article>
              </a>
              <a href="https://twitter.com/MMananNasir1" target="_blank">
              <article className="about_card">
                <BsTwitter className="about_icon" />
                <h5>Twitter</h5>
                <small> Social Circle </small>
              </article>
              </a>
              <a href="https://github.com/mannan49" target="_blank">
              <article className="about_card">
                <BsGithub className="about_icon" />
                <h5>Projects</h5>
                <small> 10+ Projects </small>
              </article>
              </a>
            </div>
            <p >
              I am a Mechanical Engineer Student with a hobby of creating websites. JavaScript is my love. Often I create web apps in React JS, which is a popular library of JavaScript. My aim is to create interactive, user-friendly and responsive websites.
            </p>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
