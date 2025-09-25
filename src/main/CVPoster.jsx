import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Activities from "../components/Activities";


export default function CVPoster() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 flex justify-center p-6">
            <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
                {/* Left side */}
                <div className="w-full md:w-1/3 bg-gradient-to-b from-green-700 to-green-900 text-white p-8 flex flex-col">
                    <PersonalInfo />
                    <Skills />
                </div>

                {/* Right side */}
                <div className="w-full md:w-2/3 p-10 space-y-10 overflow-y-auto max-h-screen">
                    <Summary />
                    <Education />
                    <Experience />
                    <Projects />
                    <Activities />
                </div>
            </div>
        </div>
    );
}