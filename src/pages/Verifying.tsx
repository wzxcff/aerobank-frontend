import Navbar from "../components/Navbar.tsx";

function Verifying() {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center mt-30">
                <h1 className="font-bold text-3xl mb-20">Verifying your information</h1>
                <p className="text-lg font-light">Now our team needs to verify your information.</p>
                <p className="text-lg font-light mb-3">As we are done, we'll notify you through email.</p>
                <p className="text-lg font-light text-gray-300 mb-12">usually it takes from 3 to 10 minutes</p>
                <a className="px-6 py-2 rounded-xl text-black cursor-pointer center hidden md:flex border border-black"
                   href="#">
                    To the main page
                </a>
            </div>
        </div>
    )
}

export default Verifying;