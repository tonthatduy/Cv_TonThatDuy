import React from "react";
import {motion} from "framer-motion";

export default function Objective() {
    return (
        <motion.section
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="max-w-3xl"
        >
            {/* Tiêu đề + gạch ngang bên phải */}
            <div className="flex items-center mb-4">
                <h2 className="text-xl font-bold text-[#EC8F00] whitespace-nowrap">
                    Objective
                </h2>
                <div className="flex-1 h-[1px] bg-[#EC8F00] ml-3"></div>
            </div>

            {/* Nội dung */}
            <p className="text-base ">
                IT student passionate about programming and software development, seeking an internship to apply
                knowledge, improve skills, and contribute to projects while continuously learning and adding value to
                the organization.
            </p>
        </motion.section>
    );
};
