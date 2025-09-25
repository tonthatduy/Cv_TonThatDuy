import React from "react";
import { motion } from "framer-motion";

export default function Activities() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
        >
            {/* Tiêu đề */}
            {/* Tiêu đề + gạch ngang */}
            <div className="flex items-center mb-6">
                <h2 className="text-xl font-bold text-[#EC8F00] whitespace-nowrap">
                    Hoạt động
                </h2>
                <div className="flex-1 h-[1px] bg-[#EC8F00] ml-3"></div>
            </div>

            {/* Nội dung */}
            <ul className="list-disc list-inside text-base space-y-2">
                <li>Tham gia CLB Lập trình viên trường</li>
                <li>Tình nguyện viên chương trình “Trung thu cho em”</li>
            </ul>
        </motion.section>
    );
}
