import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthenticationAuth = () => {
    return (
        <div>
            <div >
                <Navbar></Navbar>
            </div>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AuthenticationAuth;