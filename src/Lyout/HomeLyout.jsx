import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import LeftCetagory from "./LeftCetagory";
import RightNavbar from "./RightNavbar";


const HomeLyout = () => {
    return (
        <div className="font-raihan">
            <section>
                <Header></Header>
            </section>
            <section>
                <Navbar></Navbar>
            </section>
            <main className="grid grid-cols-12 w-11/12 mx-auto my-10">
                <aside className="col-span-3">
                    <LeftCetagory></LeftCetagory>
                </aside>
                <section className="col-span-6">
                 <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLyout;