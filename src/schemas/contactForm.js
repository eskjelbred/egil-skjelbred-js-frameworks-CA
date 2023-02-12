import * as yup from "yup";

const contactSchema = yup.object().shape({
    firstName: yup.string().min(3, "Too short, needs to be minimum 3 characters").required("Required"),
    lastName: yup.string().min(4, "Too short, needs to be minimum 4 characters").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    subject: yup.string().oneOf(["I have questions", "I would like to add an event"]).required("Required"),
    message: yup.string().min(10, "Too short, the message needs to be at least 10 characters long.").required("Required"),
});

export default contactSchema;
