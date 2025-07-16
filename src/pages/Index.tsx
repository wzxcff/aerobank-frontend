import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import RedCardHero from "../components/RedCardHero.tsx";
import GreenCardHero from "../components/GreenCardHero.tsx";
import BlackCardHero from "../components/BlackCardHero.tsx";
import RegisterBar from "../components/RegisterBar.tsx";
import ContactUs from "../components/ContactUs.tsx";
import CallCentreSchedule from "../components/CallCentreSchedule.tsx";

function Index() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <RedCardHero/>
            <GreenCardHero/>
            <BlackCardHero/>
            <RegisterBar />
            <div className="flex items-center justify-around m-10 mt-40">
                <ContactUs />
                <CallCentreSchedule/>
            </div>
        </div>
    );
}

export default Index;