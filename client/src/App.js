import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
//context
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
//styles
import "./App.css";

const App = () => {
    return (
        <AuthState>
            <ContactState>
                <Router>
                    <Fragment>
                        <Navbar />
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                            </Routes>
                        </div>
                    </Fragment>
                </Router>
            </ContactState>
        </AuthState>
    );
};

export default App;
