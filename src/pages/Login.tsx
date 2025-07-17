import Navbar from "../components/Navbar.tsx";

function Login() {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl mt-20">Login</h1>
                <div className="mt-10">
                    <label htmlFor="email">Email</label><br/>
                    <input placeholder="example@gmail.com" name="email"
                           className="mt-1 mr-3 py-2 px-3 rounded-lg border-[0.1px] border-neutral-400"/>
                </div>
                <div className="mt-2">
                    <label htmlFor="pass">Password</label><br/>
                    <input placeholder="********" name="pass" type="password"
                           className="mt-1 mr-3 py-2 px-3 rounded-lg border-[0.1px] border-neutral-400"/>
                </div>
                <a className="text-base font-light text-gray-300 relative right-16 my-2" href="#">Forgot password</a>
                <div className="flex items-center text-sm gap-x-4 mt-6">
                    <button className="bg-black text-white rounded-3xl px-15 py-2 font-medium">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;