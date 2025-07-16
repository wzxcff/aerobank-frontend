function ContactUs() {
    return (
        <div className="flex flex-col justify-center max-w-lg gap-y-3">
            <h1 className="font-bold text-4xl">Contact us</h1>
            <p className="font-normal text-xl">Feel free to drop us an email. Old-fashioned phone calls work too.</p>

            <div className="flex items-center text-xl gap-x-3">
                <span><img src={"Phone.svg"} alt="phone icon" className="max-w-5xl"/></span>
                <p>+49 69 1234 5678</p>
            </div>

            <div className="flex items-center text-xl gap-x-3">
                <span><img src={"Mail.svg"} alt="mail icon" className="max-w-5xl"/></span>
                <p>aerobank@abank.com</p>
            </div>
        </div>
    )
}

export default ContactUs