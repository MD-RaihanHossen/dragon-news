import { NavLink } from "react-router-dom";
import userPhoto from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto flex justify-between items-center my-3">
            <div className="flex-1">

            </div>
            <div className="flex-1">
                <div className="flex justify-between p-2">
                    <NavLink className='' to="/">Home</NavLink>
                    <NavLink className='' to="/">About</NavLink>
                    <NavLink className='' to="/">Career</NavLink>
                </div>
            </div>
            <div className="flex-1 ">
               <div className="flex justify-end">
                 <div className="flex gap-5 justify-center items-center">
                    <img src={userPhoto} alt="" />
                    <button className="btn btn-neutral text-raihan">
                        Login
                    </button>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Navbar;