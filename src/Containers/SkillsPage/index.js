import React from "react";
import Skills from "../../components/SkillsPage/index";

const SkillsContainer = () => {
    const data = {
        leftSkills: [
            {
                technology: "JavaScript",
                level: 80
            },
            {
                technology: "NodeJS",
                level: 70
            },
            {
                technology: "React",
                level: 80
            },
            {
                technology: "Redux",
                level: 60
            },
            {
                technology: "MongoDB",
                level: 70
            },
            {
                technology: "ExpressJS",
                level: 75
            },
        ],
        rightSkills: [
            {
                technology: "Python",
                level: 70
            },
            {
                technology: "HTML",
                level: 85
            },
            {
                technology: "CSS",
                level: 80
            },
            {
                technology: "Docker",
                level: 60
            },
            {
                technology: "Git",
                level: 70
            },
            {
                technology: "REST API",
                level: 70
            },
        ]
    }
    return (
        <Skills data={data} />
    )
}

export default SkillsContainer;