import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextNews } from "../Authentication/GoogleAuth";


const Login = () => {

    //get loginUser  Data
    const { loginUser} = useContext(ContextNews)

    // see curent location for login 
    //direct login a gele location sudu login dekhabe but privet router ar ar madhome login a dukle ba navigate korle state a navigate ar madhome ja pathabo tai set hobe 
    const location = useLocation()
    // console.log(location)
    // console.log(location.state)

    //useNavigate for move to news single plage 
    const navigate = useNavigate()


    const hendleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const password = form.get("password")
        const email = form.get("email")
        // console.log({ email, password })

        //log in user 
        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate(location?.state ? location.state : "/")

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    };



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className=" flex justify-center items-center md:w-[500px]">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body ">
                        <h2 className="text-2xl font-bold text-center mb-3">Log in Your Account</h2>
                        <form onSubmit={hendleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <h2 className="text-xl text-center my-2">Dont't Have an Account ?
                            <Link className="text-red-500" to={'/resgister'}> Resgister</Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;