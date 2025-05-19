import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

const SocialMidea = () => {
    return (

        <div className=" flex  flex-col">
            <h2 className="text-2xl font-bold">Find Us On</h2>
            <button className="btn join-item flex justify-start"> <ImFacebook2 />Facebook</button>
            <button className="btn join-item flex justify-start"> <FaSquareInstagram />Instagram</button>
            <button className="btn join-item flex justify-start"> <FiTwitter />Twitter</button>
            
        </div>

    );
};

export default SocialMidea;