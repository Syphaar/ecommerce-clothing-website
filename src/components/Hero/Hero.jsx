// import React from "react";
// import Image1 from "../../assets/hero/women.jpg";
// import Image1 from "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536596/men_s_xxpkqm.jpg";
// import Image2 from "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536624/women_s_o19ydw.jpg";
// import Image3 from "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536603/sale_pjxr18.jpg";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536596/men_s_xxpkqm.jpg",
        title: "Dress to Impress and Price Save,",
        description: 
            "Upgrade your wardrobe with our exclusive men's collection! Enjoy up to 10% off on shirts, shoes, and more."
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536624/women_s_o19ydw.jpg",
        title: "Style for Him, Savings for You.",
        description: 
            "Ladies, it’s time to shine! Discover stunning styles at up to 10% off on dresses, handbags, and more."
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536603/sale_pjxr18.jpg",
        title: "Shop, Save and Smile More.",
        description: 
            "Unbeatable discounts on everything you love! Fashion, accessories, and more at up to 70% off."
    },
]

const Hero = ({ handleOrderPopup, heroRef }) => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: "false",
        pauseOnFocus: "true",
    };

    return (
        <div ref={heroRef} id="hero" className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white">
            {/* background pattern */}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
            {/* hero section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* text content section */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1 data-aos="zoom-out" data-aos-duration="700" data-aos-once="true" className="text-5xl sm:text-5xl lg:text-7xl font-bold">{data.title}</h1>
                                    <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" className="text-sm">
                                        {data.description}
                                    </p>
                                    <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                                        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-110 duration-200 text-white py-2 px-4 rounded-full ml-2" onClick={ handleOrderPopup }>Order Now</button>
                                    </div>
                                </div>
                                {/* image section */}
                                <div data-aos="zoom-in" data-aos-once="true" data-aos-duration="900" className="order-1 sm:order-2">
                                    <div className=" relative z-10">
                                        <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[400px] sm:w-[200px] lg:w-[350px] lg:h-[350px] sm:scale-125 lg:scale-120 object-contain mx-auto rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
 
export default Hero;