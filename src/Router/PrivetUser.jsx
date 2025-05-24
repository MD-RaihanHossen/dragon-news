import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextNews } from "../Authentication/GoogleAuth";
import Loder from "../Components/Loder";


const PrivetUser = ({ children }) => {
    const { user, loader } = useContext(ContextNews)

    //what is my right location path
    const location = useLocation()
    // console.log(location)
    // console.log(location.pathname)

    if(loader){
        return <Loder></Loder>
        //aitar mane user na duka porjonto ovjerver false hobe na tai loading dekhabe . user jokhon login korbe then loader false hobe then children ke dekhabe loader ar dekhabe na ;
    }

    return (
        <div>
            {
                user ? children : <Navigate state={location.pathname} to={"/login"}></Navigate>
            }
        </div>
    );
};

export default PrivetUser;