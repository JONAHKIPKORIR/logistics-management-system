import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
const App = () => {
    return (
        <Router>
            <div>
                <ToastContainer /> {/* Toast notifications */}
                
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Default route */}
                    <Route path="*" element={<Login />} />
                </Routes>
            </div>
        </Router>

    );
};

export default App;
