import LoginWithSocialMedia from "../Components/LoginWithSocialMedia";
import SocialMidea from "../Components/SocialMidea";



const RightNavbar = () => {
    
    return (
        <div>
           
            <section className="">
                <LoginWithSocialMedia></LoginWithSocialMedia>
            </section>
            <section className="mt-10">
                <SocialMidea></SocialMidea>
            </section>
        </div>
    );
};

export default RightNavbar;