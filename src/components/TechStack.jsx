import React from "react";
import { motion } from "framer-motion";

export default function TechStack({ data }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
        >
            {/* Tiêu đề */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2 border-b pb-1 text-[#EC8F00] border-[#EC8F00]">
                    Technical Skills
                </h2>
            </div>

            {/* Nội dung */}
            <div className="space-y-4 text-sm leading-relaxed">
                {data.map(({ category, skills }) => (
                    <div key={category}>
                        <p className="font-semibold text-base text-[#EC8F00]">
                            {category}:
                            <span className="font-normal text-white ml-2">
                                {skills.map(({ name }) => name).join(", ")}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
