import "./App.css";
import YoutubeForm from "./components/YoutubeForm";
import { useState } from "react";
import FormikContainer from "./components/FormikControl/FormikContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegForm/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm/EnrollmentForm";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                {/* <YoutubeForm />  */}
                {/* <FormikContainer /> */}
                <LoginForm />
                {/* <RegistrationForm /> */}
                {/* <EnrollmentForm /> */}
            </div>
        </ChakraProvider>
    );
}

export default App;
