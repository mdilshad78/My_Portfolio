import { useEffect, useState } from "react";
import img1 from "../assets/images/hostel.jpg";
import img2 from "../assets/images/CRUD.jpeg";
import img3 from "../assets/images/ecommerce.jpg";
import unisaurus from "../assets/images/unisaurus2.png"
import oopss from '../assets/images/oopss.jpg'
import nriq from '../assets/images/NRIQ.png'
import cdgi from '../assets/images/cdgi-logo.webp'

interface Project {
    id: number;
    title: string;
    description: string;
    img: string;
    link: string;
    category: "website" | "app";
}

const projects: Project[] = [

    {
        id: 7,
        title: "Project 7",
        description: "CDGI",
        img: cdgi,
        link: "https://www.cdgi.edu.in/",
        category: "website",
    },
    {
        id: 6,
        title: "Project 6",
        description: "NRIQ",
        img: nriq,
        link: "https://www.nriqservices.com/",
        category: "website",
    },
    {
        id: 5,
        title: "Project 5",
        description: "Unisaurus",
        img: unisaurus,
        link: "https://demo2.unisaurus.in/",
        category: "website",
    },
    {
        id: 1,
        title: "Project 1",
        description: "Hostel Facilities for Students.",
        img: img1,
        link: "https://hostel-room-booking-frontend.vercel.app/",
        category: "website",
    },
    {
        id: 2,
        title: "Project 3",
        description: "Just Search",
        img: img3,
        link: "https://www.justsearch.net.in/",
        category: "website",
    },
    {
        id: 3,
        title: "Project 4",
        description: "Oopss Shree Enterprises",
        img: oopss,
        link: "https://shreeenterprisesgoa.in/",
        category: "app",
    },
    {
        id: 4,
        title: "Project 2",
        description: "Prepared CRUD to Login/Logout Pages.",
        img: img2,
        link: "https://github.com/mdilshad78/CRUD",
        category: "website",
    },


];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState<"all" | "website" | "app">(
        "all"
    );
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    useEffect(() => {
        setVisibleProjectsCount(3);
    }, [activeFilter]);

    const visibleProjects = filteredProjects.slice(0, visibleProjectsCount);
    const handleLoadMore = () => {
        setVisibleProjectsCount((currentCount) => currentCount + 3);
    };

    return (
        <section id="portfolio" className="mt-12 px-4 py-2 md:px-10 bg-gray-100">
            <div className="max-w-7xl mx-auto " data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
                    <div className="md:col-span-1" />
                    <div className="xl:col-span-11 md:col-span-12">
                        <h2 className="text-3xl font-bold mb-2 text-gray-800">Portfolio</h2>
                        <p className="text-gray-600">
                            Welcome to my portfolio, where creativity meets innovation. Here,
                            you'll find a showcase of my skills, experience, and passion
                            projects. From concept to completion, I'm excited to share my work
                            with you.
                        </p>
                    </div>
                </div>

                {/* Filter Tabs */}
                <ul
                    className="flex flex-wrap gap-4 justify-center font-semibold text-sm text-blue-600 mb-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <li
                        className={`cursor-pointer pb-1 ${activeFilter === "all"
                            ? "border-b-2 border-blue-600"
                            : "border-b-2 border-transparent"
                            }`}
                        onClick={() => setActiveFilter("all")}
                    >
                        All Projects
                    </li>
                    <li
                        className={`cursor-pointer pb-1 ${activeFilter === "website"
                            ? "border-b-2 border-blue-600"
                            : "border-b-2 border-transparent"
                            }`}
                        onClick={() => setActiveFilter("website")}
                    >
                        Website
                    </li>
                    <li
                        className={`cursor-pointer pb-1 ${activeFilter === "app"
                            ? "border-b-2 border-blue-600"
                            : "border-b-2 border-transparent"
                            }`}
                        onClick={() => setActiveFilter("app")}
                    >
                        App
                    </li>
                </ul>

                {/* Projects Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="md:col-span-1" />
                    <div className="xl:col-span-11 md:col-span-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {visibleProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="relative group w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg"
                                >
                                    {/* Image */}
                                    <img
                                        src={project.img}
                                        className="w-full h-80 transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex gap-4 mb-2 text-white text-xl">
                                            <button className="hover:text-blue-400">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                            <button className="hover:text-blue-400">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    title="More Details"
                                                    className="details-link"
                                                >
                                                    <i className="fa-solid fa-link"></i>
                                                </a>
                                            </button>
                                        </div>
                                        <p className="text-white text-sm">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {visibleProjectsCount < filteredProjects.length && (
                            <div className="mt-8 mb-3 flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleLoadMore}
                                    className="rounded-full cursor-pointer bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
                                >
                                    Load More Projects
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
