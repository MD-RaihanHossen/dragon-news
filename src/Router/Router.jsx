import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLyout from "../Lyout/HomeLyout";
import NewsFead from "../Components/NewsFead";
import AuthenticationAuth from "../Page/AuthenticationAuth";
import Login from "../Page/Login";
import Resgister from "../Page/Resgister";
import SingleNewsDetails from "../Page/SingleNewsDetails";
import PrivetUser from "./PrivetUser";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLyout></HomeLyout>,
        children: [

            {
                path: "/",
                element: <Navigate to={'/categorie/01'}></Navigate>

            },
            {
                path: "/categorie/:id",
                // element : <h3>raihan</h3>,
                element: <NewsFead></NewsFead>,
                // loader : ({params}) => console.log(params.id),
                // loader : ({params}) => console.log(params.id) jeitai click korbo shetai id pawya jabe 
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

            },
        ],
    },
    {
        path: "/news/:id",
        element: <PrivetUser> <SingleNewsDetails></SingleNewsDetails> </PrivetUser>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/",
        element: <AuthenticationAuth></AuthenticationAuth>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resgister',
                element: <Resgister></Resgister>,
            },
        ],
    },
    {
        path: "*",
        element: <h2>"Here are not Data"</h2>
    },

])


export default Router;