import { Link, NavLink, useNavigate } from "react-router-dom";
import userPhoto from "../assets/user.png"
import { useContext } from "react";
import { ContextNews } from "../Authentication/GoogleAuth";

const Navbar = () => {

    const { user, logOut } = useContext(ContextNews)

    //user navigation for change page 
    const navigate = useNavigate()

    const hengleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                console.log('Sign-out successful')
                navigate('/login')
            }).catch((error) => {
                // An error happened.
                console.log(error)
            });
    }

    return (
        <div className="w-11/12 mx-auto flex justify-between items-center my-3">
            <div className="flex-1">
                <p>{user && user?.email}</p>
            </div>
            <div className="flex-1">
                <div className="flex justify-between p-2">
                    <NavLink className='px-5 py-2 rounded' to="/">Home</NavLink>
                    <NavLink className='px-5 py-2 rounded' to="/about">About</NavLink>
                    <NavLink className='px-5 py-2 rounded' to="/careear">Career</NavLink>
                </div>
            </div>
            <div className="flex-1 ">
                <div className="flex justify-end">
                    <div className="flex gap-5 justify-center items-center">

                        {
                            user && user?.displayName ? <div className="flex items-center gap-2"><p className="text-2xl font-bold ">{user?.displayName}</p> <div> <img className="w-14 h-14 rounded-full object-cover" src={user?.photoURL} alt="" /> </div> </div> : <img src={userPhoto} alt="" />
                        }
                        {
                            user && user?.email ? (<Link to={'/login'} className="btn btn-neutral text-raihan" onClick={hengleLogOut}>
                                Log Out
                            </Link>) : (<Link to={'/login'} className="btn btn-neutral text-raihan">
                                Login
                            </Link>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;