import React from "react";
import { Trans } from "react-i18next";
import { DiMongodb, DiVisualstudio } from "react-icons/di";
import {
    SiGithub,
    SiJavascript,
    SiReact,
    SiLinux,
    SiGit,
    SiCss3,
    SiHtml5,
    SiPython,
    SiLaravel,
    SiBootstrap,
    SiMysql,
    SiPhp,
    SiC,
    SiPostman
} from "react-icons/si";
import "./Skills.css";

function Skills() {
    const skills = [
        { name: "C Language", icon: <SiC /> },
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "React", icon: <SiReact /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "MongoDB", icon: <DiMongodb /> },
    ];
    const tools = [
        { name: "VS Code", icon: <DiVisualstudio /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Linux", icon: <SiLinux /> },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skiils-container">
                {/* --- Skillset --- */}
                <h2 className="section-title">
                    <Trans 
                        i18nKey="skills_title" 
                        components={{ span: <span className="text-primary" /> }} 
                    />
                </h2>

                <div className="tech-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="tech-card">
                            <span className="tech-icon">{skill.icon}</span>
                            <span className="tech-name">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* --- Tools --- */}
                <h2 className="section-title" style={{ marginTop: "50px" }}>
                    <Trans 
                        i18nKey="tools_title" 
                        components={{ span: <span className="text-primary" /> }} 
                    />
                </h2>

                <div className="tech-grid">
                    {tools.map((tool, index) => (
                        <div key={index} className="tech-card">
                            <span className="tech-icon">{tool.icon}</span>
                            <span className="tech-name">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;