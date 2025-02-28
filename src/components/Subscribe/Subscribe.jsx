// import Banner from "../../assets/hero/sales.jpg";

const BannerImg = {
    backgroundImage: `url(${"https://res.cloudinary.com/dlcoacdkb/image/upload/v1735536592/sales_gyniiy.jpg"})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Subscribe = () => {
    return (
        <div data-aos="zoom-in" className="mb-20 bg-gray-100 dark:bg-gray-800 text-white" style={BannerImg}>
            <div className="container backdrop-blur-sm py-10">
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">Get Notified About New Products</h1>
                    <div>
                        <form action="#" className="flex">
                            <input data-aos="fad-up" type="text" placeholder="Enter your email" className="w-full p-3 rounded text-black" required />
                            <button className="px-5 py-3 bg-primary hover:scale-105 rounded">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Subscribe;