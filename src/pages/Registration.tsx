import Navbar from "../components/Navbar.tsx";

function Registration(){
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center mt-30">
                <h1 className="font-bold text-3xl">Registration form</h1>
                <div>
                    <label htmlFor="name">Name</label><br/>
                    <input placeholder="John" name="name" className="mt-1"/>
                    <input placeholder="Doe" name="lastname"/>
                </div>
            </div>
        </div>
    )
}

export default Registration;