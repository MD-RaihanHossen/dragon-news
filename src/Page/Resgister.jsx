import { Link} from "react-router-dom";


const Resgister = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className=" flex justify-center items-center md:w-[500px]">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body ">
                        <h2 className="text-2xl font-bold text-center ">Create new Account</h2>
                        <form >
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="Name" className="input" placeholder="Name" />
                                <label className="label">Img-Url</label>
                                <input type="Url" className="input" placeholder="Img-Url" />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover flex items-center gap-3 p-2"> <input  type="checkbox"></input> agree all trams & condision</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <h2 className="text-xl text-center my-2">Alredy you Have an Account ? 
                            <Link className="text-red-500" to={'/login'}> Log in</Link>
                            
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resgister;