import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types"; // Import PropTypes

const ProductsData = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536586/casual_px4yek.jpg",
        title: "Casual Wear",
        description: 
            "Relax in style with our comfortable and trendy casual wear collection."
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536585/customized_ea6hwh.jpg",
        title: "Customized Shirts",
        description: 
            "Create your unique look with our fully customizable shirts—designed just for you."
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536585/dinner_ogha67.jpg",
        title: "Dinner Gown",
        description: 
            "Make a statement at your next event with our elegant and timeless dinner gowns."
    },
]

const TopProducts = ({ handleOrderPopup, bestproductsRef }) => {
    return (
        <div ref={bestproductsRef} id="bestproducts">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">Best Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
                    <p className="text-xs text-gray-400">
                    Shop our best products, featuring top-rated styles and unbeatable quality
                    </p>
                </div>
                {/* Body section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32 md:gap-5 place-items-center pt-20">
                    {ProductsData.map((data) => {
                        return (
                            <div key={data.id} data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary/40 dark:hover:bg-primary hover:text-black relative shadow-xl duration-300 group max-w-[100%]">
                                {/* image section */}
                                <div className="h-[100px]">
                                    <img src={data.img} alt="" className="max-w-[140px] mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md rounded-xl" />
                                </div>
                                {/* details section */}
                                <div className="p-4 pb-6 text-center">
                                    {/* star rating */}
                                    <div className="w-full flex items-center justify-center gap-1">
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    <h1 className="text-xl font-bold pt-4">{data.title}</h1>
                                    <p className="text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2">{data.description}</p>
                                    <button className="bg-primary hover:scale-110 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary" onClick={handleOrderPopup}>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

TopProducts.propTypes = {
    handleOrderPopup: PropTypes.func.isRequired, // Function type
    bestproductsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }), // Ref object
};

export default TopProducts;