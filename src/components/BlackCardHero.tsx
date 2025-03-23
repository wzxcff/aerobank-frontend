import BlackCard from "./cards/BlackCard.tsx";

function BlackCardHero() {
    return (
        <div className="flex flex-col items-center py-10 max-w-full border-gray-300 mx-15 mb-30 rounded-3xl text-base">
            <h1 className="flex justify-center text-lg">Card<span className="font-semibold">&nbsp; «Elite»</span></h1>

            <div className="m-20">
                <div className="absolute w-80 h-48 bg-[#000000] blur-[100px] rounded-full"></div>
                <div className="text-white text-3xl font-bold relative"><BlackCard /></div>
            </div>


            <div className="flex justify-center items-center gap-x-15">
                <div className="flex flex-col items-center">
                    <p>For free</p>
                    <p className="text-gray-400 font-light">order</p>
                </div>

                <div className="flex flex-col items-center">
                    <p>To 20%</p>
                    <p className="text-gray-400 font-light">cashback</p>
                </div>

                <div className="flex flex-col items-center">
                    <p>500 – 3000€</p>
                    <p className="text-gray-400 font-light">credit limit</p>
                </div>
            </div>

            <div className="flex items-center text-sm gap-x-4 mt-20">
                <p className="font-semibold">More info</p>
                <button className="bg-black text-white rounded-3xl px-8 py-2 font-medium">Order card</button>
            </div>

        </div>
    )
}

export default BlackCardHero;