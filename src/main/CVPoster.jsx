import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import SoftSkills from "../components/SoftSkills";
import Summary from "../components/Summary";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Interests from "../components/Interests";

const techStackData = [
    {
        category: "Frontend",
        skills: [
            { name: "React" },
            { name: "JavaScript" },
            { name: "Bootstrap" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Java" },
            { name: "Spring Boot" },
            { name: "Spring MVC" },
        ],
    },
    {
        category: "Database",
        skills: [{ name: "MySQL" }],
    },
    {
        category: "Tools",
        skills: [{ name: "Git" }, { name: "Postman" }],
    },
];


export default function CVPoster() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 flex justify-center p-6">
            <div
                className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
                {/* Left side */}
                <div
                    className="w-full md:w-1/3 p-8 flex flex-col space-y-3"
                    style={{backgroundColor: "#353A3D", color: "#EC8F00"}}
                >
                    <PersonalInfo/>
                    <Summary/>
                    <TechStack data={techStackData}/>
                    <SoftSkills/>
                    <Interests/>
                </div>

                {/* Right side */}
                <div className="w-full md:w-2/3 p-10 space-y-10 h-full">
                    <Education/>
                    <Experience/>
                    <Projects/>
                </div>
            </div>
        </div>
    );
}
