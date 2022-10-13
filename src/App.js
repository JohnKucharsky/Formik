import "./App.css";
import YoutubeForm from "./components/YoutubeForm";
import FormikContainer from "./components/FormikControl/FormikContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegForm/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm/EnrollmentForm";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <nav>
                    <Link to="/">Youtube</Link>
                    <Link to="/container">Container</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Registration</Link>
                    <Link to="/enrollment">Enrollment</Link>
                </nav>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<YoutubeForm />} />
                        <Route
                            path="/container"
                            element={<FormikContainer />}
                        />
                        <Route path="/login" element={<LoginForm />} />
                        <Route
                            path="/registration"
                            element={<RegistrationForm />}
                        />
                        <Route
                            path="/enrollment"
                            element={<EnrollmentForm />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
