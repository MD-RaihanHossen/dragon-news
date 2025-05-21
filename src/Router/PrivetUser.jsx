import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextNews } from "../Authentication/GoogleAuth";
import Loder from "../Components/Loder";


const PrivetUser = ({ children }) => {
    const { user, loader } = useContext(ContextNews)

    if(loader){
        return <Loder></Loder>
        //aitar mane user na duka porjonto ovjerver false hobe na tai loading dekhabe . user jokhon login korbe then loader false hobe then children ke dekhabe loader ar dekhabe na ;
    }

    return (
        <div>
            {
                user ? children : <Navigate to={"/login"}></Navigate>
            }
        </div>
    );
};

export default PrivetUser;