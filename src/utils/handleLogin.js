import { baseURL } from "../constants/Api";
import { saveToken, saveUser } from "../constants/Settings";
// import validationFailed from "../components/Forms/LoginForm";

async function handleLogin(inputs) {
    const url = baseURL + "/api/auth/local";
    const data = JSON.stringify(inputs);
    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.user) {
            window.location.href = "/admin";

            saveToken(json.jwt);
            saveUser(json.user);
        }

        if (json.error) {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

export default handleLogin;
