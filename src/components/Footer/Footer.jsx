import PropTypes from "prop-types"; // Import prop-types

import {
    FaFacebook,
    FaInstagram, 
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${"https://res.cloudinary.com/dlcoacdkb/image/upload/v1741776641/footerbg_yiqslb.jpg"})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        title: "Products",
        link: "/#products",
    },
    {
        id: 3,
        title: "Best products",
        link: "/#contact",
    },
    {
        id: 4,
        title: "Testimonial",
        // link: "/#blog",
    },
    {
        id: 5,
        title: "Contact",
        // link: "/#blog",
    },
]

const FooterLinks2 = [
    {
        id: 1,
        titles: "Privacy policy",
        links: "/#",
    },
    {
        titles: "Terms of Service",
        links: "/#about",
    },
    {
        titles: "Disclamer",
        links: "/#contact",
    },
    {
        titles: "Credits",
        links: "/#blog",
    },
    {
        titles: "FAQ",
        links: "/#blog",
    },
]

const Footer = ({ contactRef }) => {
    return (
        <div  ref={contactRef} id="contact" style={BannerImg} className="text-white">
            <div className="container">
                <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-5 pt-5">
                    {/* company details */}
                    <div className="py-8">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536586/logo_mdednp.jpg" alt="" className="max-w-[50px] rounded-full" />
                            Shopsy
                        </h1>
                        <p>
                        Discover the latest trends and timeless styles with us. 
                        Shop confidently with secure checkout and fast delivery 
                        to your doorstep.
                        </p>
                    </div>
                    {/* Footer links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-2 pl-0 md:pl-10">
                        <div>
                            <div className="py-8 px-1 md:px-4">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Pages</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((link) => (
                                            <li className="cursor-pointer hover:text-primary hover:translate-x-1 w-28 duration-300 text-gray-200" key={link.title}>
                                                <span>{link.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-1 md:px-4">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Quick Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks2.map((links) => (
                                            <li className="cursor-pointer hover:text-primary hover:translate-x-1 w-32 duration-300 text-gray-200" key={links.titles}>
                                                <span>{links.titles}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* social links */}
                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>No. 4 Highway Road</p>
                                </div>
                                <div className="flex items-center gap-3 pt-2">
                                    <FaMobileAlt />
                                    <p>+234 123 456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    contactRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};  
 
export default Footer;