import img1 from '../assets/images/myy.jpg';

export default function About() {
    return (
        <div>
            {/* About Section */}
            <section id="about" className="mt-10 w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">About</h2>
                    <p className="text-gray-700 mb-8">
                        I'm Mohammad Dilshad, a curious and driven individual with a passion for learning and growth.
                        With a unique blend of skills and experiences, I'm dedicated to making a meaningful impact.
                        I'm excited to connect and explore new opportunities together.
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-shrink-0 w-full md:w-1/3">
                            <img src={img1} className="w-full h-auto rounded shadow-lg" alt="Mohammad Dilshad" />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-2xl font-semibold">Mern Stack Developer & Full Stack Developer</h3>
                            <p className="italic text-gray-600 py-4">
                                As a seasoned software developer, I specialize in designing and delivering scalable, efficient solutions that drive business growth.
                                With expertise in MERN Stack and modern technologies, I leverage my technical skills to drive innovation and excellence.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ul className="space-y-2 text-gray-700">
                                    <li><strong>Birthday:</strong> <span>28 May 2004</span></li>
                                    {/* <li><strong>Website:</strong> <span>www.example.com</span></li> */}
                                    <li><strong>Phone:</strong> <span>+91 7878722899</span></li>
                                    <li><strong>City:</strong> <span>Jodhpur, INDIA</span></li>
                                </ul>
                                <ul className="space-y-2 text-gray-700">
                                    <li><strong>Age:</strong> <span>22</span></li>
                                    <li><strong>Degree:</strong> <span>Bachelor's of Computer Application</span></li>
                                    <li><strong>Email:</strong> <span>mohddilshad3743@gmail.com</span></li>
                                    <li><strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                            <p className="pt-4 text-gray-700">This is all my information mentioned in this section.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="mt-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Statistic</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-orange-400 text-white shadow p-6 rounded">
                            <h3 className="text-xl font-semibold">Github Project</h3>
                            <h4 className="text-2xl font-bold">15</h4>
                        </div>
                        <div className="bg-orange-400 text-white shadow p-6 rounded">
                            <h3 className="text-xl font-semibold">Github Followers</h3>
                            <h4 className="text-2xl font-bold">60</h4>
                        </div>
                        <div className="bg-orange-400 text-white shadow p-6 rounded">
                            <h3 className="text-xl font-semibold">LinkedIn Followers</h3>
                            <h4 className="text-2xl font-bold">290</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mt-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Skills</h2>
                    <p className="text-gray-700 mb-8">This is all my Skills.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded">
                            <h3 className="text-xl font-semibold text-center">FrontEnd Development</h3>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Javascript', 'Typescript', 'React JS'].map(skill => (
                                    <h5 key={skill} className="bg-blue-600 py-1 px-2 rounded text-center">{skill}</h5>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded">
                            <h3 className="text-xl font-semibold text-center">BackEnd Development</h3>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {['Node JS', 'ExpressJS', 'MongoDB', 'SQL'].map(skill => (
                                    <h5 key={skill} className="bg-green-600 py-1 px-2 rounded text-center">{skill}</h5>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded">
                            <h3 className="text-xl font-semibold text-center">Languages</h3>
                            <div className="flex justify-center mt-4">
                                <h5 className="bg-purple-600 py-1 px-2 rounded">C-Language</h5>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded">
                            <h3 className="text-xl font-semibold text-center">Designing</h3>
                            <div className="flex justify-center mt-4">
                                <h5 className="bg-pink-600 py-1 px-2 rounded">Photoshop</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}