import React, {useState, useRef, useEffect} from "react";
import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {FiX} from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
    {
        name: "Auto Marketing System",
        description: "AI-powered marketing automation platform that generates creative content effortlessly. " +
            "Features OpenAI API integration, automated Facebook posting, Google OAuth authentication, " +
            "and VNPay payment gateway. Collaborative team project with comprehensive JWT security.",
        link: "https://github.com/vinhnd03/Auto-Marketing",
        goal: "Contributed to the development of an admin dashboard by building revenue statistics " +
            "(weekly, monthly, quarterly), implementing package usage analysis, " +
            "designing interactive visualizations, " +
            "and developing CRUD functionality for service packages, " +
            "ensuring efficient business performance monitoring",
        role: "Fullstack Developer",
        tech: ["ReactJS", "Tailwind CSS", "Recharts", "Spring MVC", "Spring Boot", "Cloudinary API",
            "ChatGPT API", "MySQL Workbench", "RESTfull API Services"],
        duration: "1 Month",
        tasks: [
            "Developed revenue statistics dashboards (weekly, monthly, quarterly) " +
            "to support business performance monitoring",
            "Implemented package usage analysis to identify popular and underutilized service packages.",
            "Designed interactive charts and visualizations for clear data insights.",
            "Built CRUD functionality for service packages (create, update, delete) " +
            "to support efficient package management.",
            "Coding and testing: BlackBox, JUnit 5."
        ],
        images: [
            "auto_marketing/home.png",
            "auto_marketing/admin.png",
            "auto_marketing/doanh_thu.png",
            "auto_marketing/goi.png",
            "auto_marketing/danh_sach_goi.png",
            "auto_marketing/gen_topics.png",
            "auto_marketing/post.png",
            "auto_marketing/post_management.png",
            "auto_marketing/price.png",
            "auto_marketing/workspace.png",
        ]
    },
    {
        name: "Hospital Management System",
        description: "Developed a Hospital Management System for managing patients and examination rooms. " +
            "Delivered a modern and user-friendly UI with modal-based interactions for quick operations. " +
            "Gained hands-on experience in Spring Boot, Thymeleaf, Bootstrap, and intuitive web interface design",
        link: "https://github.com/1Ir-is/Hospital-Management",
        goal: "Contributed to the development of a healthcare management system by implementing CRUD features for patients, " +
            "examination rooms, and medical records, developing appointment scheduling and pre-booking " +
            "integrating modals for detailed information display, managing data with MySQL and Spring Data JPA " +
            "and building search and data display functions for efficient and accurate management.",
        role: "Fullstack Developer",
        tech: ["JavaScript", "CSS", "Bootstrap 5", "Spring Boot", "Spring MVC",
            "Thymeleaf for user interface", "MySQL Workbench", "Cloudinary API"],
        duration: "2 Weeks",
        tasks: [
            "Implemented CRUD features for managing patients, examination rooms, and medical records.",
            "Developed appointment scheduling and pre-booking features, allowing patients to select preferred time slots.",
            "Integrated modal dialogs to display detailed information (rooms, exam results) for smoother user experience.",
            "Connected and managed data with MySQL database using Spring Data JPA.",
            "Built search and data display functions for accurate and efficient management.",
        ],
        images: [
            "hospital_management/home.png",
            "hospital_management/lich_truc_tiep.png",
            "hospital_management/lich_truoc.png",
            "hospital_management/home.png",
            "hospital_management/hospital_management_2.png",
            "hospital_management/hospital_management_4.png",
            "hospital_management/hospital_management_5.png",
            "hospital_management/hospital_management_6.png",
            "hospital_management/hospital_management_7.png",
        ]
    },
    {
        name: "Online Bookstore Management System",
        description: "E-commerce bookstore built with Java Servlet & JSP (MVC). " +
            "Implemented user authentication, shopping cart, order management, and admin dashboard. " +
            "Integrated Cloudinary for image storage, MySQL for database, and Apache POI for Excel export.",
        link: "https://github.com/1Ir-is/Book-Management",
        goal: "Contributed to the development of an e-commerce bookstore by designing and implementing " +
            "shopping cart and order placement features, developing order history with detailed " +
            "product information on demand, connecting the system to MySQL via JDBC for data persistence, " +
            "and designing JSP pages for dynamic product browsing and purchasing",
        role: "Fullstack Developer",
        tech: ["Java", "JSP", "MySQL Workbench", "CSS", "BootStrap", "Cloudinary API"],
        duration: "1 Weeks",
        tasks: [
            "Designed and built shopping cart and order placement features.",
            "Implemented order history view with one row per order and detailed product information on demand",
            "Connected the system to MySQL database using JDBC for data persistence.",
            "Designed JSP pages for dynamic UI to support product browsing and purchasing."
        ],
        images: [
            "book_management/home.png",
            "book_management/add_cart.png",
            "book_management/cart.png",
            "book_management/details_cart.png",
            "book_management/history_cart.png",
            "book_management/admin.png",
        ],
    },

    // Thêm dự án mới với tasks nếu cần
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null); // State cho zoom ảnh
    const [previewIndex, setPreviewIndex] = useState({});
    const intervals = useRef({});
    const swiperRef = useRef(null); // Ref cho Swiper để sync thumbnails

    const openProject = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setSelectedImage(null);
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const handleMouseEnter = (project) => {
        const projectName = project.name;
        const imageLength = project.images.length;
        if (imageLength <= 1) return;
        if (intervals.current[projectName]) {
            clearInterval(intervals.current[projectName]);
        }
        let currentIdx = previewIndex[projectName] || 0;
        intervals.current[projectName] = setInterval(() => {
            setPreviewIndex((prev) => ({
                ...prev,
                [projectName]: (currentIdx + 1) % imageLength
            }));
            currentIdx = (currentIdx + 1) % imageLength;
        }, 700);
    };

    const handleMouseLeave = (projectName) => {
        if (intervals.current[projectName]) {
            clearInterval(intervals.current[projectName]);
            delete intervals.current[projectName];
        }
        setPreviewIndex((prev) => ({...prev, [projectName]: 0}));
    };

    useEffect(() => {
        return () => {
            Object.values(intervals.current).forEach(clearInterval);
        };
    }, []);

    const getPreviewSrc = (project) => {
        const idx = previewIndex[project.name] || 0;
        return project.images[Math.min(idx, project.images.length - 1)] || project.images[0];
    };

    // Đóng modal khi click ngoài
    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            setSelectedProject(null);
        }
    };

    // Phần list projects giữ nguyên
    return (
        <motion.section
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="max-w-3xl"
        >
            {/* Tiêu đề + gạch ngang */}
            <div className="flex items-center mb-6">
                <h2 className="text-xl font-bold text-[#EC8F00] whitespace-nowrap">
                    Projects
                </h2>
                <div className="flex-1 h-[1px] bg-[#EC8F00] ml-3"></div>
            </div>

            {/* Danh sách dự án */}
            {projects.map((project) => (
                <motion.div
                    key={project.name}
                    whileHover={{
                        scale: 1.03,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                    }}
                    className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4 p-6 border rounded-lg cursor-pointer bg-white mb-4"
                    onClick={() => openProject(project)}
                    onMouseEnter={() => handleMouseEnter(project)}
                    onMouseLeave={() => handleMouseLeave(project.name)}
                >
                    {project.images.length > 0 && (
                        <motion.img
                            key={`${project.name}-preview-${previewIndex[project.name] || 0}`}
                            src={getPreviewSrc(project)}
                            alt={`${project.name} preview`}
                            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-md flex-shrink-0"
                            initial={{opacity: 0.8, scale: 1}}
                            animate={{opacity: 1, scale: 1.05}}
                            transition={{duration: 0.3, ease: "easeInOut"}}
                        />
                    )}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-base mb-3 text-gray-700">{project.description}</p>
                        <div className="flex items-center space-x-4">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#EC8F00] hover:underline"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View on GitHub
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    openProject(project);
                                }}
                                className="text-[#EC8F00] hover:underline cursor-pointer"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Modal mới - Dựa trên mẫu, tích hợp thumbnails */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={handleModalClick}
                >
                    <div
                        className="bg-white rounded-2xl w-11/12 md:w-3/4 lg:w-2/3 relative max-h-[90vh] overflow-y-auto shadow-xl"
                        onClick={(e) => e.stopPropagation()} // Ngăn đóng khi click vào content
                    >
                        {/* HEADER */}
                        <div className="flex justify-between items-center border-b px-6 py-4">
                            <h2 className="text-2xl font-bold text-[#EC8F00]">{selectedProject.name}</h2>
                            <button
                                className="text-gray-600 hover:text-black"
                                onClick={() => setSelectedProject(null)}
                            >
                                <FiX className="text-red-500 h-6 w-6"/>
                            </button>
                        </div>

                        {/* BODY */}
                        <div className="grid grid-cols-10 gap-6 px-6 py-4">
                            {/* Left side: Info + Tasks */}
                            <div className="col-span-10 md:col-span-4">
                                <p className="text-sm text-justify text-black">
                                    <span className="font-semibold text-[#EC8F00]">Key Contribution:</span>{" "}
                                    {selectedProject.goal} {/* Dùng goal làm desc */}
                                </p>

                                <div className="mt-3 text-sm space-y-1">
                                    <p>
                                        <span className="font-semibold text-[#EC8F00]">Duration:</span>{" "}
                                        {selectedProject.duration}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-[#EC8F00]">Role:</span>{" "}
                                        {selectedProject.role}
                                    </p>
                                    {selectedProject.link && (
                                        <p className="flex items-center">
                                            <span className="font-semibold text-[#EC8F00]">Link:</span>{" "}
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#EC8F00] hover:underline ml-1 max-w-full truncate whitespace-nowrap overflow-hidden text-ellipsis"
                                            >
                                                {selectedProject.link}
                                            </a>
                                        </p>
                                    )}
                                </div>

                                {/* Tasks */}
                                <div className="mt-4">
                                    <h3 className="font-semibold text-sm mb-2 text-[#EC8F00]">Tasks</h3>
                                    <div className="space-y-2">
                                        {selectedProject.tasks.map((task, idx) => (
                                            <div className="flex items-center space-x-2" key={idx}>
                                                <span className="text-[#EC8F00]">✦</span>
                                                <p className="text-xs text-black text-justify leading-relaxed">
                                                    {task}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right side: Swiper + Thumbnails */}
                            <div className="col-span-10 md:col-span-6">
                                <div className="flex flex-col items-center space-y-4">
                                    {/* Swiper chính */}
                                    {selectedProject.images && selectedProject.images.length > 0 && (
                                        <div className="relative w-full">
                                            <Swiper
                                                ref={swiperRef}
                                                modules={[Navigation, Pagination]}
                                                navigation={{
                                                    nextEl: ".custom-next",
                                                    prevEl: ".custom-prev",
                                                }}
                                                pagination={{clickable: true}}
                                                spaceBetween={20}
                                                slidesPerView={1}
                                                loop={true}
                                                className="w-full"
                                                onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
                                            >
                                                {selectedProject.images.map((img, idx) => (
                                                    <SwiperSlide key={idx}>
                                                        <div
                                                            className="flex justify-center cursor-pointer"
                                                            onClick={() => setSelectedImage(img)}
                                                        >
                                                            <img
                                                                src={img}
                                                                alt={`${selectedProject.name} ${idx + 1}`}
                                                                className="w-full h-72 object-contain rounded-lg border hover:opacity-90 transition"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>

                                            {/* Custom arrows */}
                                            <button
                                                className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg text-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#EC8F00] hover:text-white transition z-10">
                                                ‹
                                            </button>
                                            <button
                                                className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg text-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#EC8F00] hover:text-white transition z-10">
                                                ›
                                            </button>
                                        </div>


                                    )}


                                    {/* Thumbnails slide từ modal cũ - Bên dưới Swiper */}
                                    {selectedProject.images && selectedProject.images.length > 0 && (
                                        <div className="flex space-x-2 overflow-x-auto w-full pb-2">
                                            {selectedProject.images.map((img, idx) => (
                                                <img
                                                    key={idx}
                                                    src={img}
                                                    alt={`${selectedProject.name} thumbnail ${idx + 1}`}
                                                    onClick={() => handleThumbnailClick(idx)}
                                                    className={`h-12 w-20 object-cover rounded cursor-pointer border-2 flex-shrink-0 ${
                                                        idx === currentImageIndex
                                                            ? "border-[#EC8F00]"
                                                            : "border-transparent"
                                                    } hover:border-[#EC8F00] transition`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* FOOTER: Tech */}
                                <div className="border-t px-6 py-4 mt-4">
                                    <h3 className="font-semibold text-sm mb-2 text-[#EC8F00]">Technicals:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-2 py-1 border rounded bg-gray-100 text-gray-700"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zoom Modal khi click ảnh (từ mẫu) - z-60 để trên modal chính */}
                    {selectedImage && (
                        <div
                            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div
                                className="relative max-w-7xl w-full flex justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage}
                                    alt="Detail"
                                    className="w-auto max-h-[90vh] object-contain rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </motion.section>
    );
}