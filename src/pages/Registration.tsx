import Navbar from "../components/Navbar.tsx";

function Registration(){
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center mt-30">
                <h1 className="font-bold text-3xl">Registration form</h1>
                <div className="mt-12">
                    <label htmlFor="name">Name</label><br/>
                    <input placeholder="John" name="name"
                           className="mt-1 mr-3 py-2 px-3 rounded-lg border-[0.1px] border-neutral-400"/>
                    <input placeholder="Doe" name="lastname"
                           className="mt-1 py-2 px-3 rounded-lg border-[0.1px] border-neutral-400"/>
                </div>
                <div className="mt-2">
                    <label htmlFor="email">Email</label>
                    <label htmlFor="email" className="ml-54">Phone number</label><br/>
                    <input placeholder="example@gmail.com" name="email"
                           className="mt-1 mr-3 py-2 px-3 rounded-lg border-[0.1px] border-neutral-400"/>
                    <input placeholder="+498914539876" name="lastname"
                           className="mt-1 py-2 px-3 rounded-lg border-[0.1px] border-neutral-400"/>
                </div>
                <div className="mt-2">
                    <label htmlFor="pass">Password</label>
                    <label htmlFor="passconfirm" className="ml-47">Confirm password</label><br/>
                    <input placeholder="********" name="pass" type="password"
                           className="mt-1 mr-3 py-2 px-3 rounded-lg border-[0.1px] border-neutral-400"/>
                    <input placeholder="********" name="passconfirm" type="password"
                           className="mt-1 py-2 px-3 rounded-lg border-[0.1px] border-neutral-400"/>
                </div>
                <div className="flex items-center text-sm gap-x-4 mt-10">
                    <button className="bg-black text-white rounded-3xl px-8 py-2 font-medium">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Registration;