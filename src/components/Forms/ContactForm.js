import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import contactSchema from "../../schemas/contactForm";

function ContactForm() {
    return (
        <Formik
            validationSchema={contactSchema}
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            }}
            onSubmit={console.log}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit} className="d-flex row align-items-center m-auto mt-5 col-10 col-md-8 col-lg-4">
                    <Form.Group className="mb-3 position-relative" controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            isValid={touched.firstName && !errors.firstName}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 position-relative" controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            isValid={touched.lastName && !errors.lastName}
                            isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 position-relative" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" value={values.email} onChange={handleChange} isValid={touched.email && !errors.email} isInvalid={!!errors.email} />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 position-relative" controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Select name="subject" onChange={handleChange} value={values.subject} isInvalid={!!errors.subject}>
                            <option value="Choose one:">Choose one:</option>
                            <option value="I have questions">I have questions</option>
                            <option value="I would like to add an event">I would like to add an event</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.subject}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 position-relative" controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="message"
                            onChange={handleChange}
                            isValid={touched.message && !errors.message}
                            isInvalid={!!errors.message}
                            placeholder="Enter your message"
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="text-light w-50 m-auto mt-3">
                        Submit form
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default ContactForm;
