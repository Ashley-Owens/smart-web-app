import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LeadsPage from './pages/LeadsPage';
import LeadDetailsPage from './pages/LeadDetailsPage';
import SearchLeadsPage from './pages/SearchLeadsPage';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="leads" element={<LeadsPage />} />
                    <Route path="leads/:id" element={<LeadDetailsPage />} />
                    <Route path="leads/search" element={<SearchLeadsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
