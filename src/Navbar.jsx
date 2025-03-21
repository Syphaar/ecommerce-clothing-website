import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Darkmode from "./components/Darkmode";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Navbar = ({ handleOrderPopup, scrollToSection, activeSection}) => {
    
    const Menu = [
        {
            lname: 1,
            product: "Home",
            link: "heroRef",
            id: "hero",
        },
        {
            lname: 2,
            product: "Products",
            link: "productsRef",
            id: "products",
        },
        {
            lname: 3,
            product: "Best Products",
            link: "bestproductsRef",
            id: "bestproducts",
        },
        {
            lname: 4,
            product: "Testimonials",
            link: "testimonialsRef",
            id: "testimonials",
        },
        {
            lname: 5,
            product: "Contact",
            link: "contactRef",
            id: "contact",
        },
    ]

    const DropdownLinks = [
        {
            lname: 1,
            pname: "Trending Products",
            link: "/#",
            id: "trending",
        },
        {
            lname: 2,
            pname: "Best Selling",
            link: "topproductsRef",
            id: "topproducts",
        },
        {
            lname: 3,
            pname: "Top Rated",
            link: "/#",
            id: "toprated",
        },
    ]

    const logo = [
        {
            id: 1,
            img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536586/logo_mdednp.jpg",
        }
    ]

    let [open,setOpen] = useState(false);

    const handleLinkClick = (ref) => {
        scrollToSection(ref); // Scroll to the section
        setOpen(false); // Close the navbar after clicking a link
    };
    

    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* upper Navbar */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    {logo.map((singleData) => (
                        <div key={singleData.id}>
                            <Link to="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                                <img className="w-10 rounded-full" src={singleData.img} alt="logo" />
                                Stylish
                            </Link>
                        </div>
                        ))}
                    {/* search bar */}
                    <div className="flex justify-between items-center gap-4">
                        {/* <div className="">                            
                            <HiMiniBars3 />
                        </div>
                        <div className="">                            
                            <MdOutlineClose />                        
                        </div> */}
                        
                        {/* Toggle Buttons */}
                        <div onClick={() => setOpen(!open)} className="text-3xl  right-8 top-6 cursor-pointer md:hidden">
                            <ion-icon name={open ? 'close':'menu'}></ion-icon>
                        </div>
                        <ul className={`md:hidden md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 text-center transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                            {Menu.map((link) => (
                                    <li key={link.lname} className="md:ml-8 text-xl md:my-0 my-7">
                                        {/* <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.product}</a> */}
                                        <a  href={`#${link.id}`}  onClick={(e) => { e.preventDefault();  handleLinkClick(link.id);}} 
                                            className={`text-gray-800 hover:text-gray-400 font-bold duration-500 ${activeSection === link.id ? "text-beige" : "text-black"} hover:text-beige`}
                                        >
                                            {link.product}
                                        </a>
                                    </li>
                                ))
                            }
                            <a href="#" className="flex justify-center items-center text-[19px] gap-[2px] py-0">
                            Trending Products
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                            </a>
                            <div className="absolute z-[-1] hidden group-hover:block w-[390px] rounded-md bg-white p-2 text-black shadow-md">
                                <ul className="items-center">
                                    {DropdownLinks.map((data) => (
                                        <li key={data.lname}>
                                            <a href={data.link} className="inline-block w-full rounded-md p-2 z-[-99] hover:bg-primary/20 text-center items-center"> 
                                            {/* <a onClick={() => handleLinkClick(link.link)} className="{`inline-block w-full rounded-md p-2 z-[-99] hover:bg-primary/20 text-center items-center font-bold duration-500 ${ activeSection === link.id ? "text-beige" : "text-white"} hover:text-beige`}>  */}
                                            {/* <a onClick={() => handleLinkClick(data.link)}className={`inline-block w-full rounded-md p-2 z-[-99] text-center font-bold duration-500 ${activeSection === data.id ? "text-beige" : "text-white"} hover:bg-primary/20 hover:text-beige`}> */}
                                                {data.pname} 
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <Button>
                                Get Started
                            </Button> */}
                        </ul>


                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="search" className="w-[200px] sm:w-[200px] sm:group-hover:w-[240px] lg:group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800" />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>
                        {/* order button */}
                        <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-400 text-white py-1 px-4 rounded-full flex items-center gap-3 group" onClick={() => handleOrderPopup()}>
                            <span className="sm:group-hover:block hidden transition-all duration-400">Order</span>
                            <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                        {/* Darkmode switch */}
                        <div className="hidden">
                            <Darkmode />
                        </div>
                    </div>
                </div>
            </div>
            {/* lower Navbar */}
            <div className="flex justify-center">
                <ul className="md:flex hidden items-center gap-4">
                    {Menu.map((data) => (
                        <li key={data.lname}>
                            {/* <Link to={data.link} className="inline-block px-4 hover:text-primary duration-200">{data.product}</Link> */}
                            <a  href={`#${data.id}`}  onClick={(e) => { e.preventDefault();  handleLinkClick(data.id);}} 
                                className={`inline-block px-4 hover:text-primary duration-200 ${activeSection === data.id ? "text-primary font-bold" : "text-black"}`}
                            >
                                {data.product}
                            </a>
                        </li>
                    ))}
                    {/* simple dropdown and links */}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2">
                            Trending Products
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[190px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20"> 
                                            {data.pname} 
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Add PropTypes validation
Navbar.propTypes = {
    handleOrderPopup: PropTypes.func.isRequired, // Function type
    scrollToSection: PropTypes.func.isRequired, // Function type
    activeSection: PropTypes.string.isRequired, // String type
};
 
export default Navbar;