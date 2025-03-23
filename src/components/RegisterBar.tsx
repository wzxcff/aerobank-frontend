function RegisterBar() {
    return (
        <div className="flex flex-col justify-center items-center gap-y-6">
            <h1 className="font-bold text-4xl">Register</h1>
            <p className="font-normal text-xl">For registration you should be at least 18 years old.</p>
            <button className="bg-black text-white rounded-2xl px-8 py-2 font-medium text-base">Register for free</button>
        </div>
    )
}

export default RegisterBar;