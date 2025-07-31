import Footer from "../component/Footer";

export default function Contact() {
    return (
        <section id="contact" className="mt-10 px-4 mb-5">
            {/* Section Title */}
            <div className="max-w-7xl mx-auto mb-8" data-aos="fade-up">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/12"></div>
                    <div className="lg:w-11/12">
                        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
                        <p className="text-gray-600">Get Touch</p>
                    </div>
                </div>
            </div>

            {/* Contact Form & Info */}
            <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/12"></div>
                    <div className="lg:w-11/12 flex flex-col lg:flex-row gap-6">
                        {/* Contact Info */}
                        <div className="lg:w-5/12 mt-2">
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                                    <i className="fa-solid fa-location-dot text-2xl text-blue-500"></i>
                                    <div>
                                        <h3 className="font-semibold text-lg">Address</h3>
                                        <p className="text-gray-600">Kamla Nehru Colony, Jodhpur, Rajasthan</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
                                    <i className="fa-solid fa-phone text-2xl text-blue-500"></i>
                                    <div>
                                        <h3 className="font-semibold text-lg">Call Us</h3>
                                        <p className="text-gray-600">+91 7878722899</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
                                    <i className="fa-regular fa-envelope text-2xl text-blue-500"></i>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email Us</h3>
                                        <p className="text-gray-600">mohddilshad3743@gmail.com</p>
                                    </div>
                                </div>

                                {/* Map */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                    className="w-full h-64 mt-4 rounded-md"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-7/12 mt-2">
                            <form className="space-y-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name-field" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name-field"
                                            name="name"
                                            required
                                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email-field" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email-field"
                                            name="email"
                                            required
                                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject-field" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject-field"
                                        name="subject"
                                        required
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message-field" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message-field"
                                        name="message"
                                        rows={6}
                                        required
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
}
