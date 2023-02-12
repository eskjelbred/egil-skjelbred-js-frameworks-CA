import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import handleLogin from "../../utils/handleLogin";

function LoginForm() {
    const [inputs, setInputs] = useState({});
    const [errorMessage, setErrorMessage] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    function handleSubmit(event) {
        event.preventDefault();

        handleLogin(inputs);

        setTimeout(() => {
            setErrorMessage(true); // This is not the way to add the error message but because of problems with loging into Moodle i couldn't find the right solution...
        }, 1000);
    }

    return (
        <>
            <Form onSubmit={handleSubmit} className="d-flex row align-items-center m-auto mt-5 col-10 col-md-8 col-lg-4">
                {errorMessage === true ? <p className="alert alert-danger">Wrong username or password</p> : ""}
                <Form.Group className="mb-3" controlId="identifier">
                    <Form.Control type="email" name="identifier" onChange={handleChange} placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" name="password" onChange={handleChange} placeholder="********" />
                </Form.Group>

                <Button variant="primary" className="text-light w-75 m-auto mt-3" type="submit">
                    LOGG INN
                </Button>
            </Form>
        </>
    );
}

export default LoginForm;
