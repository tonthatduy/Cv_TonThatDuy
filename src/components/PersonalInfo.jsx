import React from "react";
import { motion } from "framer-motion";
import {FaEnvelope, FaPhone, FaGithub, FaFacebook, FaUser} from "react-icons/fa";

export default function PersonalInfo() {
    return (
        <motion.section
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="max-w-3xl"
        >
            <div>
                {/* Avatar + tên */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/433010090_1874555349648586_4650447987992120796_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGznQW0H1BAaQj10bZhf7svpfQGyIgh3Bql9AbIiCHcGpQJHYkY-pYKEgwN8xnLn5A0xfma1-BTt6M0Hto0EN_a&_nc_ohc=I3akhNtN48wQ7kNvwFFDsBw&_nc_oc=Adl98kFPn2mDd_nzNEuI2KofsYh4B10kUAQ560Q86lGhSmAk_s1cqM00cfn3itAUO_Y&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=7pEkNVipz6fPPRVp7WBHHQ&oh=00_AfYSYJM6jYxdi-FY1yD-dsxFHanBhFKvOogwASWUBvpHzQ&oe=68D19648"
                        alt="Avatar"
                        className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-4"
                    />
                    <h1 className="text-3xl font-bold text-[#EC8F00]">Tôn Thất Duy</h1>
                    <p className="text-md mt-1 text-[#EC8F00]">Java Web Fullstack Intern</p>
                </div>

                {/* Thông tin cá nhân */}
                <div className="space-y-5">
                    <div>
                        <h2 className="font-bold text-xl mb-3 border-b pb-1 text-[#EC8F00] border-[#EC8F00]">
                            Contact
                        </h2>
                        <ul className="space-y-3 text-base text-white">
                            <li className="flex items-center gap-3">
                                <FaUser className="text-[#EC8F00]"/>
                                <span>14-06-1997</span>
                            </li>
                            <li>
                                <a
                                    href="mailto:tonthatduy1997@gmail.com"
                                    className="flex items-center gap-3 hover:text-[#EC8F00] transition"
                                >
                                    <FaEnvelope className="text-[#EC8F00]"/>
                                    <span>tonthatduy1997@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:0363551223"
                                    className="flex items-center gap-3 hover:text-[#EC8F00] transition"
                                >
                                    <FaPhone className="text-[#EC8F00]"/>
                                    <span>0363551223</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://facebook.com/duy.ton.1029"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-[#EC8F00] transition"
                                >
                                    <FaFacebook className="text-[#EC8F00]"/>
                                    <span>Duy Tôn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/tonthatduy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-[#EC8F00] transition"
                                >
                                    <FaGithub className="text-[#EC8F00]"/>
                                    <span>GitHub</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
