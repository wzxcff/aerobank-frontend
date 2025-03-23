function GreenCard () {
    return (
        <div className="shadow-md rounded-lg w-2xs h-43 bg-[#00491C] text-white px-6 py-4 flex flex-col text-xs">
            <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">aerobank</p>
                <p className="font-mono text-sm font-normal">GREEN</p>
            </div>


            <p className="font-mono text-center mt-15 font-normal text-sm">5356 XXXX XXXX XXXX</p>

            <div className="flex justify-between font-mono mt-1 text-[7px] max-w-40 w-full mx-auto">
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

export default GreenCard;