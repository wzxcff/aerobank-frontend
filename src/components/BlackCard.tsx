function BlackCard () {
    return (
        <div className="shadow-md rounded-lg w-xs h-45 bg-[#141414] text-white px-6 py-4 flex flex-col text-sm">
            <div className="flex items-center justify-between">
                <p className="font-semibold text-base">aerobank</p>
                <p className="font-mono text-base font-normal">ELITE</p>
            </div>


            <p className="font-mono text-center mt-15 font-normal text-base">5356 XXXX XXXX XXXX</p>

            <div className="flex justify-between font-mono mt-1 text-[8px] max-w-45 w-full mx-auto">
                <div className="flex flex-col items-center">
                    <p>CARD HOLDER</p>
                    <p>JOE DOE</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>EXPIRATION DATE</p>
                    <p>03/29</p>
                </div>
            </div>
        </div>
    );
}

export default BlackCard;