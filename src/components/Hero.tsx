function Hero() {
    return (
        <div className=" flex justify-center min-h-screen bg-[url(mainhero_mobile.svg)] bg-no-repeat mx-3 md:mx-10 my-3 md:my-10 bg-contain md:bg-[url(mainhero.svg)]">
            <div className="p-10 text-center max-w-2xl aboslute mt-0 xl:mt-30 lg:mt-15 md:mt-0 md:p-8 text-xs md:text-sm">
                <h1 className="text-base font-normal md:text-lg">
                    Welcome to <span className="font-medium">AeroBank</span> – Where Banking Takes Flight
                </h1>
                <div className="my-2 border-b w-16 mx-auto mt-8"></div>
                <p className="text-black mt-8 text-base font-normal md:text-lg">
                    We believe banking should be as effortless as a gentle breeze.
                </p>
                <p className="text-black mt-1 text-base font-normal md:text-lg">
                    From instant payments to smart savings solutions, we're here to elevate your banking experience.
                </p>
                <button className="mt-10 px-8 py-2 bg-black text-white rounded-2xl text-sm">
                    Register for free
                </button>
            </div>
        </div>
    );
};

export default Hero;