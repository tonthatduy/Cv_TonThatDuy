import React from "react";
import { motion } from "framer-motion";

const softSkills = [
    { name: "Kỹ Năng Giao tiếp"},
    { name: "Làm việc nhóm" },
    { name: "Quản lý thời gian" },
    { name: "Kỹ Năng Thuyết trình" },
];

export default function Skills() {
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
            <h2 className="text-xl font-semibold mb-4 border-b pb-1 text-[#EC8F00] border-[#EC8F00]">
                Kỹ năng
            </h2>

            <div className="space-y-4">
                {softSkills.map(({ name, level }) => (
                    <div key={name}>
                        <div className="flex justify-between mb-1 text-sm font-medium text-white">
                            <span>{name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </motion.section>
    );
}
