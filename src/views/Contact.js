import React from "react";
import "../styles/Contact.css";
import contactImg from "../images/photo-me.jpeg";
import Footer from "../components/Footer";
import gitHubImg from "../images/github-icon.png"
import linkedInImg from "../images/linkedin-icon.png"
import gmailImg from "../images/gmail-icon.png"

export default function Contact() {
    return (
        <div className="contact-view">
            <div className="contact-content">
                <h1 className="contact-title">SOCIAL</h1>
                <img className="contact-image" src={contactImg} alt="me" />
                <div className="social-media">
                    <a href="https://github.com/arthurnonaka" target="_blank" rel="noreferrer">
                        <img className="social-img" src={gitHubImg} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/arthur-nonaka/" target="_blank" rel="noreferrer">
                        <img className="social-img" src={linkedInImg} alt="linkedin" />
                    </a>
                    <a href="mailto:nonaka.working@gmail.com">
                        <img className="social-img" src={gmailImg} alt="gmail" />
                    </a>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div >
    )
}