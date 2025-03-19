import {useState} from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="font-display bg-white">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-6 relative">
                {/* Logo + Brand */}
                <a href="/" className="flex items-center">
                    <img src="/bankicon.png" className="h-12" alt="aerobank logo"/>
                    <span className="text-xl font-semibold text-black">aerobank</span>
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-black cursor-pointer">Cards</a>
                    <a href="#" className="text-black cursor-pointer">Register</a>
                    <a href="#" className="text-black cursor-pointer">Contact</a>
                </div>

                {/* Login Button */}
                <a className="px-6 py-2 rounded-xl text-black cursor-pointer center hidden md:flex border border-black" href="#">
                    Login
                </a>

                {/* Mobile Menu Button */}
                <button data-collapse-toggle="navbar-default" type="button" onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                         viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                {/* Mobile Navigation (Appears when isOpen is true) */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-white shadow-md`}>
                    <div className="flex flex-col items-center space-y-4 p-4">
                        <a href="#" className="text-black cursor-pointer">Cards</a>
                        <a href="#" className="text-black cursor-pointer">Register</a>
                        <a href="#" className="text-black cursor-pointer">Contact</a>
                        <a href="#" className="text-black cursor-pointer">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
