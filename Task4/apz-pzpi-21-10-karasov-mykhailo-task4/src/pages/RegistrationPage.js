import React from 'react';
import {Card, Container} from "react-bootstrap";
import RegistrationForm from "../components/forms/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
    return (
        <Container className={"d-flex justify-content-center row-cols-md-2 align-items-center p-4"} style={{minHeight: '100%'}}>
            <Card className={"p-5"}>
                <h2 className={"m-auto"}>Реєстрація</h2>
                <RegistrationForm />
            </Card>
        </Container>
    );
};

export default RegistrationPage;