import { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaBars,
    FaGithub,
} from "react-icons/fa6";
import {
    FiHome,
    FiUser,
    FiFileText,
    FiImage,
    FiMail,
} from "react-icons/fi";
import profile from "../../assets/images/my.jpg";
import { Link } from "react-router-dom";

interface NavbarProps {
    onScroll: (section: string) => void;
}

export default function Navbar({ onScroll }: NavbarProps) {
    const [open, setOpen] = useState(false);

    const handleNavClick = (section: string) => {
        onScroll(section);
        setOpen(false); // Close sidebar after clicking
    };

    return (
        <>
            {/* Toggle button (visible only below 1000px) */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white bg-blue-600 p-2 rounded"
                >
                    <FaBars />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-[300px] bg-[#0f172a] text-white text-center px-4 py-6 flex flex-col items-center justify-items-center space-y-6 overflow-y-auto z-40 transition-transform duration-300
                ${open ? "translate-x-0 " : "-translate-x-full"} 
                md:translate-x-0 md:block`}
            >
                <img
                    src={profile}
                    alt="Profile"
                    className="rounded-full w-24 h-24 border-4 border-white object-cover"
                />
                <h2 className="text-xl font-semibold">Mohammad Dilshad</h2>

                <div className="flex space-x-4">
                    <FaFacebookF className="cursor-pointer hover:text-blue-500" />
                    <Link to="https://www.instagram.com/cricketer_dilshad/"><FaInstagram className="cursor-pointer hover:text-pink-500" /></Link>
                    <Link to="https://www.linkedin.com/in/mohammad-dilshad-2b1706267/"><FaLinkedinIn className="cursor-pointer hover:text-blue-700" /></Link>
                    <Link to="https://github.com/mdilshad78"><FaGithub className="cursor-pointer hover:text-blue-700" /></Link>
                </div>

                <nav className="flex-1 w-full">
                    <ul className="space-y-5 text-xl ps-4">
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiHome />
                            <span onClick={() => handleNavClick("home")}>Home</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiUser />
                            <span onClick={() => handleNavClick("about")}>About</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiFileText />
                            <span onClick={() => handleNavClick("resume")}>Resume</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiImage />
                            <span onClick={() => handleNavClick("protfolio")}>Portfolio</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiMail />
                            <span onClick={() => handleNavClick("contact")}>Contact</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
