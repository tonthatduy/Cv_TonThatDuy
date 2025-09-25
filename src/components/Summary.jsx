import React from "react";
import {motion} from "framer-motion";

export default function Summary() {
    return (
        <motion.section
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="space-y-4"
        >
            <div className="space-y-5">
                {/* Tiêu đề */}
                <h2 className="font-bold text-xl mb-3 border-b pb-1 text-[#EC8F00] border-[#EC8F00]">
                    About Me
                </h2>

                {/* Nội dung */}
                <p className="text-base text-white">
                    A technology-driven software developer with a solid foundation in Java, JavaScript, and React.
                    Proactive in learning, quick to adapt to new environments, and eager to advance full-stack skills to
                    contribute effectively to projects.
                </p>
            </div>
        </motion.section>
    );
}
