import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "../src/pages/Index.tsx";
import Registration from "../src/pages/Registration.tsx";
import Verifying from "../src/pages/Verifying.tsx";

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/verify" element={<Verifying />} />
            </Routes>
        </Router>
    );
}

export default App;