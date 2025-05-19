import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";


const LeftCetagory = () => {

    const [categorys, setCategotys] = useState([])

    //get catrgory data 
    useEffect(() => {
        fetch('http://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategotys(data.data.news_category))
    }, [])


    

    return (
        <div>
            <div className="flex flex-col gap-4 text-center">
                {
                    categorys.map(category => category ? <NavLink to={`/categorie/${category.category_id}`} className="btn btn-base-100 border-none " key={category.category_id}> {category.category_name} </NavLink>  : 'raihan'
                    )
                }
            </div>
        </div>
    );
};




export default LeftCetagory;