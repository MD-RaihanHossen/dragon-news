import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const NewsFead = () => {

    const {data : newses} = useLoaderData()
    

    return (
        <div className="p-4">
            <h1>length: {newses.length}</h1>
            {
                newses.map((news , idex) => <NewsCard key={idex} news={news}></NewsCard>)
            }
        </div>
    );
};

export default NewsFead;