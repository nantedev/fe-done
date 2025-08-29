import { Outlet } from "react-router";

const Boilerplate = () => {
return (
    <div className="d-flex flex-column vh-100">
        <main className="container mt-5">
            <Outlet />
        </main>
    </div>
)

} 
export default Boilerplate;