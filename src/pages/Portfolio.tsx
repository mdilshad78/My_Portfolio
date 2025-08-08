import img1 from '../assets/images/hostel.jpg';
import img2 from '../assets/images/CRUD.jpeg';
import img3 from '../assets/images/ecommerce.jpg';

export default function Portfolio() {
    return (
        <section id="portfolio" className="mt-12 px-4 md:px-10">
            <div className="max-w-7xl mx-auto " data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
                    <div className="md:col-span-1" />
                    <div className="xl:col-span-11 md:col-span-12">
                        <h2 className="text-3xl font-bold mb-2 text-gray-800">Portfolio</h2>
                        <p className="text-gray-600">
                            Welcome to my portfolio, where creativity meets innovation. Here, you'll find a showcase
                            of my skills, experience, and passion projects. From concept to completion, I'm excited to
                            share my work with you.
                        </p>
                    </div>
                </div>

                <ul
                    className="flex flex-wrap gap-4 justify-center font-semibold text-sm text-blue-600 mb-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <li className="cursor-pointer border-b-2 border-blue-600 pb-1">All Projects</li>
                    {/* Add more filter tabs if needed */}
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="md:col-span-1" />
                    <div className="xl:col-span-11 md:col-span-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Project 1 */}
                            <div className="relative group w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
                                {/* Image */}
                                <img
                                    src={img1}
                                    className="w-full h-80 transform duration-300 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-blue-600 text-white px-3 py-1 text-xs rounded mb-2">Project 1</span>
                                    <div className="flex gap-4 mb-2 text-white text-xl">
                                        <button className="hover:text-blue-400">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                        <button className="hover:text-blue-400">
                                            <a href="https://github.com/mdilshad78/Hostel-Room-Booking.git" title="More Details" className="details-link"><i className="fa-solid fa-link"></i></a>
                                        </button>
                                    </div>
                                    <p className="text-white text-sm">Hostel Facilities for Students.</p>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="relative group w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
                                {/* Image */}
                                <img
                                    src={img2}
                                    className="w-full h-80 transform duration-300 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-blue-600 text-white px-3 py-1 text-xs rounded mb-2">Project 2</span>
                                    <div className="flex gap-4 mb-2 text-white text-xl">
                                        <button className="hover:text-blue-400">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                        <button className="hover:text-blue-400">
                                            <a href="https://hostel-room-booking-frontend.vercel.app/" title="More Details" className="details-link"><i className="fa-solid fa-link"></i></a>
                                        </button>
                                    </div>
                                    <p className="text-white text-sm">Prepared CRUD to Login/Logout Pages.</p>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="relative group w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
                                {/* Image */}
                                <img
                                    src={img3}
                                    className="w-full h-80 transform duration-300 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-blue-600 text-white px-3 py-1 text-xs rounded mb-2">Project 3</span>
                                    <div className="flex gap-4 mb-2 text-white text-xl">
                                        <button className="hover:text-blue-400">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                        <button className="hover:text-blue-400">
                                            <a href="https://www.justsearch.net.in/" title="More Details" className="details-link"><i className="fa-solid fa-link"></i></a>
                                        </button>
                                    </div>
                                    <p className="text-white text-sm">Just Search</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
