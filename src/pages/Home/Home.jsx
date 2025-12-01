import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import IconCloud from "../../components/IconCloud";
import "./Home.css";

function Home() {
    return (
        <section className="home-section" id="home">
            <div className="home-content">
                {/* LEFT SIDE: */}
                <div className="home-header">
                    <div className="location-badge">
                        📍 Morocco
                    </div>

                    <h2 className="greeting">
                        Hi, I'm Ilyas <span className="wave">👋🏻</span>
                    </h2>

                    <h1 className="hero-title-large">
                        FULLSTACK<br />
                        <span className="stroke-text">DEVELOPER</span>
                    </h1>

                    {/* Subtitle */}
                    {/* <h3 className="hero-subtitle">
                        & Computer Architect ("inchalaah")
                    </h3> */}
                </div>

                {/* RIGHT SIDE: */}
                <div className="home-cloud-container">
                    <IconCloud />
                </div>
            </div>
        </section>
    );
}

export default Home;