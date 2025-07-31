export default function Resume() {
    return (
        <section id="resume" className="mt-20 p-10 bg-gradient-to-br from-sky-100 to-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-3">Resume</h2>
                    <p className="text-gray-600 ">
                        Highly motivated and experienced Software Developer with a strong background in designing and delivering innovative solutions.
                    </p>
                </div>

                {/* Resume Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div>
                        {/* Summary */}
                        <section className="mb-10">
                            <h3 className="text-2xl font-semibold mb-4">Summary</h3>
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h4 className="text-lg font-semibold">Mohammad Dilshad</h4>
                                <p className="italic text-sm mt-1">
                                    Innovative and deadline-driven full-stack developer with hands-on experience in modern web technologies.
                                </p>
                                <ul className="list-disc list-inside mt-3 text-sm space-y-1">
                                    <li>Kamla Nehru Colony, Jodhpur</li>
                                    <li>+91 7878722899</li>
                                    <li>mohddilshad3743@gmail.com</li>
                                </ul>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-2xl font-semibold mb-4">Education</h3>
                            <div className="border-l-4 border-blue-500 pl-4 space-y-6">
                                <div>
                                    <h4 className="font-bold">Bachelor of Computer Applications (BCA)</h4>
                                    <p className="text-sm font-medium">2022 - 2025</p>
                                    <p className="italic text-sm">Jai Narayan Vyas University, Jodhpur, Rajasthan</p>
                                    <p className="text-sm mt-2 text-justify">
                                        I have successfully completed my Bachelor's degree in Bachelor of Computer Applications from Jain Narayan Vayas University,Jodhpur,Rajasthan , where I built a strong foundation in core subjects like programming, databases, and web technologies. Throughout my academic journey, I consistently demonstrated a passion for learning and problem-solving, often participating in coding assignments, group projects, and seminars.
                                        The curriculum not only enhanced my technical abilities but also improved my communication, time management, and teamwork skills. I actively engaged in academic workshops and hands-on labs that helped me bridge the gap between theoretical concepts and practical applications. My degree has equipped me with a well-rounded understanding of modern technology trends and software development practices, preparing me to take on real-world challenges in the IT industry with confidence and responsibility.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div>
                        {/* Experience */}
                        <section>
                            <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
                            <div className="border-l-4 border-blue-500 pl-4 space-y-6">
                                {/* MEARN Stack */}
                                <div>
                                    <h4 className="font-bold">MERN Stack Developer</h4>
                                    <p className="text-sm font-medium">Apr 2025 - Jul 2025</p>
                                    <p className="italic text-sm">Rotary Balaji Pvt Ltd, Jodhpur</p>
                                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                        <li>Developed full-stack apps using MongoDB, Express.js, React.js, and Node.js.</li>
                                        <li>Built responsive UIs with functional components and React hooks.</li>
                                        <li>Created REST APIs with Node/Express for robust backend operations.</li>
                                        <li>Integrated MongoDB with Mongoose for schema validation and queries.</li>
                                        <li>Worked with UI/UX team to ensure pixel-perfect responsive designs.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold">MEAR Stack, Internship</h4>
                                    <p className="text-sm font-medium">8/2024 - 1/2025</p>
                                    <p className="italic text-sm">Tech Fly IT-Solution,Jodhpur</p>
                                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                        <li>Developed foundational skills in MongoDB, Express.js, React.js, and Node.js through intensive internship and hands-on projects.s</li>
                                        <li>Gained understanding of database design and management using MongoDB, and implemented RESTful APIs using Express.js.</li>
                                        <li>Built responsive and interactive user interfaces using React.js, and managed state changes and component lifecycle.</li>
                                        <li>Deployed full-stack MERN applications websites handles.</li>
                                    </ul>
                                </div>

                                <div
                                    className="mt-6"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="w-full sm:w-1/2">
                                        <a
                                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300"
                                            href="https://drive.google.com/file/d/13jornXI6GkTU2TPud71IsYxi9lmBgOgF/view"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Download Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
