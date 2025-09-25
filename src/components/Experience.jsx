import React from "react";
import {motion} from "framer-motion";

export default function Experience() {
    return (
        <motion.section
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="max-w-3xl"
        >
            {/* Tiêu đề + gạch ngang */}
            <div className="flex items-center mb-6">
                <h2 className="text-xl font-bold text-[#EC8F00] whitespace-nowrap">
                    Work Experience
                </h2>
                <div className="flex-1 h-[1px] bg-[#EC8F00] ml-3"></div>
            </div>

            {/* Timeline kinh nghiệm */}
            <div className="relative border-l-2 border-[#EC8F00] pl-6 space-y-8">
                {/* Node 1 */}
                <div className="absolute -left-3 top-1 w-6 h-6 bg-[#EC8F00] rounded-full border-4 border-white"></div>
                <div>
                    <p className="font-semibold ">3/2025 – 9/2025 </p>
                    <p className="font-bold ">CodeGym Đà Nẵng</p>
                    <p className="">Java Fullstack Developer</p>
                    {/*<ul className="list-disc list-inside ">*/}
                    {/*    <li>Tham gia phát triển dự án Web</li>*/}
                    {/*    <li>Kiến thức: PHP, MySQL, HTML, CSS, Bootstrap</li>*/}
                    {/*</ul>*/}
                </div>

                {/* Node 2 */}
                <div className="absolute -left-3 top-28 w-6 h-6 bg-[#EC8F00] rounded-full border-4 border-white"></div>
                <div>
                    <p className="font-semibold ">2024 – 2025</p>
                    <p className="font-bold ">Viettel Post</p>
                    <p className="">Postal Officer</p>
                </div>

                {/* Node 3 */}
                <div className="absolute -left-3 top-28 w-6 h-6 bg-[#EC8F00] rounded-full border-4 border-white"></div>
                <div>
                    <p className="font-semibold ">2021 – 2024</p>
                    <p className="">Work freely</p>
                </div>
            </div>
        </motion.section>
    );
}
