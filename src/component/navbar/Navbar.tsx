import { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
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

    return (
        <>
            {/* Toggle button (visible only below 1000px) */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white bg-blue-600 p-2 rounded"
                >
                    {open ? <FaBars /> : <FaBars />}
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
                    {/* <Link to=''><FaXTwitter className="cursor-pointer hover:text-blue-500" /></Link> */}
                    <FaFacebookF className="cursor-pointer hover:text-blue-500" />
                    <Link to='https://www.instagram.com/cricketer_dilshad/'><FaInstagram className="cursor-pointer hover:text-pink-500" /></Link>
                    <Link to='https://www.linkedin.com/in/mohammad-dilshad-2b1706267/'><FaLinkedinIn className="cursor-pointer hover:text-blue-700" /></Link>
                    <Link to='https://github.com/mdilshad78'><FaGithub className="cursor-pointer hover:text-blue-700" /></Link>
                </div>

                <nav className="flex-1 w-full">
                    <ul className="space-y-5 text-xl ps-4">
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiHome /> <span><Link to='' onClick={() => onScroll("home")}>Home</Link></span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiUser /> <span><Link to='' onClick={() => onScroll("about")}>About</Link></span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiFileText /> <span><Link to='' onClick={() => onScroll("resume")}>Resume</Link></span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiImage /> <span><Link to='' onClick={() => onScroll("protfolio")}>Portfolio</Link></span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                            <FiMail /> <span><Link to='' onClick={() => onScroll("contact")}>Contact</Link></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}


