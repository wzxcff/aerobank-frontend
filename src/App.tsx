import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "../src/pages/Index.tsx";
import Registration from "../src/pages/Registration.tsx";

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/register" element={<Registration />} />
            </Routes>
        </Router>
    );
}

export default App;