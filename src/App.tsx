import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RedCardHero from "./components/RedCardHero.tsx";
import GreenCardHero from "./components/GreenCardHero.tsx";
import BlackCardHero from "./components/BlackCardHero.tsx";
import RegisterBar from "./components/RegisterBar.tsx";

function App () {
    return (
        <>
            <Navbar/>
            <Hero/>
            <RedCardHero/>
            <GreenCardHero/>
            <BlackCardHero/>
            <RegisterBar />
        </>
    );
}

export default App;