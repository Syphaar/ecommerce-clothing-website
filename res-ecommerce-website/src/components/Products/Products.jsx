// import React from "react";
// import Img1 from "../../assets/hero/product1.jpg";
// import Img2 from "../../assets/hero/product2.jpg";
// import Img3 from "../../assets/hero/product3.jpg";
// import Img4 from "../../assets/hero/product4.jpg";
// import Img5 from "../../assets/hero/product5.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536587/product1_sedncu.jpg",
        title: "Suits",
        rating: 5.0,
        color: "All colors",
        aosDelay: "0",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536586/product2_awd4qn.jpg",
        title: "Shoes",
        rating: 4.5,
        color: "Black and Brown",
        aosDelay: "200",
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536592/product3_qafryy.jpg",
        title: "Sun dresses",
        rating: 4.7,
        color: "All colors",
        aosDelay: "400",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536595/product4_t1xwok.jpg",
        title: "Rings",
        rating: 4.4,
        color: "Gold and Silver",
        aosDelay: "600",
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536591/product5_tbbi8c.jpg",
        title: "Sun shades",
        rating: 4.5,
        color: "Black",
        aosDelay: "800",
    },
];

const Products = () => {
    return (
        <div className="mt-14 mb-12" id="products">
            <div>
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                    <p className="text-xs text-gray-400 px-7">
                        Shop the latest styles and elevate your wardrobe today
                    </p>
                </div>
                {/* Body section */}
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center gap-5">
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
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white px-4 rounded-full py-2 hover:scale-110 duration-200">
                            View All Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Products;