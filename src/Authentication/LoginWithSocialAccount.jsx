import { useContext } from "react";
import { ContextNews } from "./GoogleAuth";



const LoginWithSocialAccount = () => {
    const { name } = useContext(ContextNews)
    console.log(name, "bba")
    return (
        <div>
            <h1> this name : of {name}</h1>
        </div>
    );
};

export default LoginWithSocialAccount;