import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import Events from "./Views/Events";
import EventDetails from "./Views/EventDetails";
import Contact from "./Views/Contact";
import Login from "./Views/Login";
import Admin from "./Views/Admin";

function App() {
    return (
        <div className="row bg-dark text-light fill-window row m-auto">
            <Routes>
                <Route path="/" element={<Events />} />
                <Route path="/detail/:param" element={<EventDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    );
}

export default App;
