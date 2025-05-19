import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLyout from "../Lyout/HomeLyout";
import NewsFead from "../Components/NewsFead";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <HomeLyout></HomeLyout>,
        children : [
            
            {
                path : "/",
                element : <Navigate to={'/categorie/01'}></Navigate>
                
            },
            {
                path : "/categorie/:id",
                // element : <h3>raihan</h3>,
                element: <NewsFead></NewsFead>,
                // loader : ({params}) => console.log(params.id),
                // loader : ({params}) => console.log(params.id) jeitai click korbo shetai id pawya jabe 
                loader : ({params}) => fetch(`http://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
        ],
    },
])


export default Router;