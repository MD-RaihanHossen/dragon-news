import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextNews } from "../Authentication/GoogleAuth";


const Resgister = () => {


    const { createUser, UpdateUser } = useContext(ContextNews)

    //for navigate home page 
    const navigate = useNavigate()

    const hendleResgistation = (e) => {
        e.preventDefault()

        //get form 
        const form = new FormData(e.target)

        //get form value
        const name = form.get("name")
        const url = form.get("url")
        const email = form.get("email")
        const password = form.get("password")

        const userObject = {
            displayName: name,
            photoURL: url,
        }

        //for create new user 
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)

                //update user Profile
                UpdateUser(userObject)
                    .then((result) => {
                        // Profile updated!
                        console.log(result)
                        navigate("/")
                    }).catch((error) => {
                        // An error occurred
                        console.log(error)
                    });

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className=" flex justify-center items-center md:w-[500px]">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body ">
                        <h2 className="text-2xl font-bold text-center ">Create new Account</h2>
                        <form onSubmit={hendleResgistation}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name="name" type="Name" className="input" placeholder="Name" />
                                <label className="label">Img-Url</label>
                                <input name="url" type="Url" className="input" placeholder="Img-Url" />
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover flex items-center gap-3 p-2"> <input type="checkbox" required></input> agree all trams & condision</a></div>
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