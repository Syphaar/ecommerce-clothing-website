import Slider from "react-slick";
import PropTypes from "prop-types"; // Import prop-types

const testimonialData = [
    {
        id: 1,
        fname: "Victor Wills",
        text: "I’ve been shopping here for months, and the delivery is always fast, with everything arriving as expected.",
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536589/review_2_vrifkg.jpg"
    },
    {
        id: 2,
        fname: "Lucy James",
        text: "I absolutely love the quality and fit of the clothes! They’re comfortable, stylish, and always make me feel confident.",
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536585/review_3_fzl3se.jpg"
    },
    {
        id: 3,
        fname: "Peter Peter",
        text: "I trust this site for both style and comfort, great customer service and an easy shopping experience.",
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536585/review_4_cl317e.jpg"
    },
    {
        id: 4,
        fname: "Sarah Mike",
        text: "The variety of styles is incredible, I always find something for any occasion, from casual wear to formal attire.",
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536588/review_1_vow3gv.jpg"
    },
]

const Testimonials = ({ testimonialsRef }) => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div ref={testimonialsRef} id="testimonials">
            <div className="py-10 mb-10">
                <div className="container">
                    {/* header section */}
                    <div className="text-center mb-10 max-w-[600px] mx-auto">
                        <p data-aos="fade-up" className="text-sm text-primary">What Our Customers Are Saying</p>
                        <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                        <p className="text-xs text-gray-400">
                            Hear from our happy customers and discover why they choose us for their style
                        </p>
                    </div>

                    {/* Testimonial cards */}
                    <div data-aos="zoom-in">
                        <Slider {...settings}>
                            {testimonialData.map((data) => (
                                <div key={data.id} className="my-6">
                                    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/20 relative">
                                        <div className="mb-4">
                                            <img src={data.img} alt="" className="rounded-full w-14 h-14" />
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="space-y-2">
                                                <p className="text-xs text-gray-500">{data.text}</p>
                                                <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.fname}</h1>
                                            </div>
                                        </div>
                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-7 bottom-5">
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

Testimonials.propTypes = {
    testimonialsRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};  
 
export default Testimonials;