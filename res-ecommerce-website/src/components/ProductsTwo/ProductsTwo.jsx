// import React from "react";
// import Img1 from "../../assets/hero/t-one.jpg";
// import Img2 from "../../assets/hero/t-two.jpg";
// import Img3 from "../../assets/hero/t-three.jpg";
// import Img4 from "../../assets/hero/t-four.jpg";
// import Img5 from "../../assets/hero/t-five.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536605/t-one_nfbijf.jpg",
        title: "Cargo Trousers",
        rating: 5.0,
        color: "All colors",
        aosDelay: "0",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536605/t-two_ujotio.jpg",
        title: "Sneakers",
        rating: 4.5,
        color: "All colors",
        aosDelay: "200",
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536605/t-three_pxznhs.jpg",
        title: "Rings",
        rating: 4.7,
        color: "Gold and Silver",
        aosDelay: "400",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536608/t-four_ofgxf7.jpg",
        title: "Flannel Shirts",
        rating: 4.4,
        color: "All colors",
        aosDelay: "600",
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536603/t-five_sal8en.jpg",
        title: "Women's Heels",
        rating: 4.5,
        color: "All colors",
        aosDelay: "800",
    },
];

const ProductsTwo = () => {
    return (
        <div className="mt-14 mb-12">
            <div>
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Top Selling Products</h1>
                    <p className="text-xs text-gray-400 px-7">
                        Explore our top-selling favorites and grab the most-loved styles before they sell out
                    </p>
                </div>
                {/* Body section */}
                <div className="container">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center">
                        {/* card section */}
                        {ProductsData.map((data) => (
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3">
                                <img src={data.img} alt="" className="h-[100%] w-[100%] object-cover rounded-md" />
                                <h3 className="font-semibold">
                                    {data.title}
                                </h3>
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-600 flex items-center">{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* view all buttons */}
                    <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-4 rounded-full hover:scale-110 duration-200">
                            View All Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductsTwo;