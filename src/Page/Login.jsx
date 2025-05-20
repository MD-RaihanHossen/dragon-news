import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className=" flex justify-center items-center md:w-[500px]">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body ">
                        <h2 className="text-2xl font-bold text-center mb-3">Log in Your Account</h2>
                        <form >
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <h2 className="text-xl text-center my-2">Dont't Have an Account ? 
                            <Link className="text-red-500"  to={'/resgister'}> Resgister</Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;