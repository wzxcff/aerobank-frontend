import Navbar from "../components/Navbar.tsx";

function ChangePass() {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-3xl mt-20">Change password</h1>
                <div className="mt-10">
                    <label htmlFor="email">Email</label><br/>
                    <input placeholder="example@gmail.com" name="email"
                           className="mt-1 mr-3 py-2 px-3 rounded-lg border-[0.1px] border-neutral-400"/>
                </div>
                <div className="flex items-center text-sm gap-x-4 mt-6">
                    <button className="bg-black text-white rounded-3xl px-15 py-2 font-medium">Send email</button>
                </div>
            </div>
        </div>
    )
}


export default ChangePass;