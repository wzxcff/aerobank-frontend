function CallCentreSchedule() {
    return (
        <div className="">
            <h1 className="text-4xl font-bold">Call-centre schedule</h1>
            <ul className="flex gap-x-10 mt-6">
                <div className="flex flex-col gap-y-1">
                    <li className="text-xl"><span className="font-semibold">Monday:</span> 9:00 — 18:00</li>
                    <li className="text-xl"><span className="font-semibold">Tuesday</span>: 9:00 — 18:00</li>
                    <li className="text-xl"><span className="font-semibold">Wednesday:</span> 9:00 — 18:00</li>
                    <li className="text-xl"><span className="font-semibold">Thursday:</span> 9:00 — 18:00</li>
                </div>
                <div className="flex flex-col gap-y-1">
                    <li className="text-xl"><span className="font-semibold">Friday:</span> 9:00 — 18:00</li>
                    <li className="text-xl"><span className="font-semibold">Saturday:</span> 11:00 — 16:00</li>
                    <li className="text-xl"><span className="font-semibold">Sunday:</span> 11:00 — 15:00</li>
                </div>
            </ul>
        </div>
    )
}

export default CallCentreSchedule;