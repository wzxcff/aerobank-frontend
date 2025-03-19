function Hero() {
    return (
        <div className=" flex justify-center min-h-screen bg-[url(mainhero_mobile.svg)] bg-no-repeat mx-3 md:mx-10 my-3 md:my-10 bg-contain md:bg-[url(mainhero.svg)]">
            <div className="p-10 text-center max-w-2xl aboslute mt-3 md:mt-30 text-xs md:text-sm tracking-widest">
                <h1 className="text-xl font-normal md:text-lg">
                    Welcome to <span className="font-medium">AeroBank</span> – Where Banking Takes Flight
                </h1>
                <div className="my-2 border-b w-16 mx-auto mt-8"></div>
                <p className="text-black mt-8 text-lg font-extralight">
                    We believe banking should be as effortless as a gentle breeze.
                </p>
                <p className="text-black mt-1 text-lg font-extralight">
                    From instant payments to smart savings solutions, we're here to elevate your banking experience.
                </p>
                <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
                    Register for free
                </button>
            </div>
        </div>
    );
};

export default Hero;