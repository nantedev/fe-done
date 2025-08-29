import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Boilerplate = () => {
return (
    <div className="d-flex flex-column vh-100">
        <Navbar />
        <main className="container mt-5">
            <Outlet />
        </main>
    </div>
)

} 
export default Boilerplate;