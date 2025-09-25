import React from "react";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";
const softSkills = [
    { name: "Teamwork" },
    { name: "Time management" },
    { name: "Self-learning & research" },
    { name: "Adaptability" },
];

export default function SoftSkills() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
        >
            <div className="mt-8">
                {/* Tiêu đề màu chủ đạo */}
                <h2 className="text-xl font-semibold mb-2 border-b pb-1 text-[#EC8F00] border-[#EC8F00]">
                    Soft Skills
                </h2>

                <div className="space-y-2">
                    {softSkills.map(({ name }) => (
                        <div
                            key={name}
                            className="flex items-center text-base text-white"
                        >
                            <BsDot className="text-[#EC8F00] text-lg" />
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
