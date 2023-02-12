import { confirm } from "react-confirm-box";

const tokenKey = "token";
const userKey = "user";

// Save token and user to localstorage when logged in
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Save token to localstorage
export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

// Save user to localstorage
export function saveUser(user) {
    saveToStorage(userKey, user);
}

// Remove token and user from localstorage if confirmed
export async function removeFromStorage() {
    const options = {
        render: (message, onConfirm, onCancel) => {
            return (
                <div className="d-flex flex-wrap bg-dark text-white p-3">
                    <span className="w-100"> {message} </span>
                    <div className="w-100 d-flex justify-content-around">
                        <button className="btn btn-primary text-white" onClick={onConfirm}>
                            Ja
                        </button>
                        <button className="btn btn-danger text-white" onClick={onCancel}>
                            Nei
                        </button>
                    </div>
                </div>
            );
        },
    };
    const confirmLogout = await confirm("Er du sikker på at du vil logge ut?", options);
    if (confirmLogout) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/";
    }
}
