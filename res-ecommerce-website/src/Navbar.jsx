// import Img1 from "../../res-ecommerce-website/src/assets/hero/logo.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
// import { MdOutlineClose } from "react-icons/md";
// import { HiMiniBars3 } from "react-icons/hi2";
import Darkmode from "./components/Darkmode";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { data } from "autoprefixer";

const Menu = [
    {
        id: 1,
        product: "Home",
        link: "/hero",
    },
    {
        id: 2,
        product: "Products",
        link: "products",
    },
    {
        id: 3,
        product: "Best Products",
        link: "TopProducts",
    },
    {
        id: 4,
        product: "Testimonials",
        link: "/Testimonials",
    },
    {
        id: 5,
        product: "Contact",
        link: "/Footer",
    },
]

const DropdownLinks = [
    {
        id: 1,
        pname: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        pname: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        pname: "Top Rated",
        link: "/#",
    },
]

const logo = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536586/logo_mdednp.jpg",
    }
]



const Navbar = ({handleOrderPopup}) => {

    let [open,setOpen] = useState(false);

    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* upper Navbar */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    {logo.map((singleData) => (
                        <div key={singleData.id}>
                            <Link to="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                                <img className="w-10 rounded-full" src={singleData.img} alt="logo" />
                                Shopsy
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
                                    <li key={link.id} className="md:ml-8 text-xl md:my-0 my-7">
                                        <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.product}</a>
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
                                        <li key={data.id}>
                                            <a href={data.link} className="inline-block w-full rounded-md p-2 z-[-99] hover:bg-primary/20 text-center items-center"> 
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
                        <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group" onClick={() => handleOrderPopup()}>
                            <span className="group-hover:block hidden transition-all duration-200">Order</span>
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
                        <li key={data.id}>
                            <Link to={data.link} className="inline-block px-4 hover:text-primary duration-200">{data.product}</Link>
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
}
 
export default Navbar;