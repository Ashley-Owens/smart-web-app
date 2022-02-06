import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Leads from './pages/Leads';



function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="leads" element={<Leads />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
