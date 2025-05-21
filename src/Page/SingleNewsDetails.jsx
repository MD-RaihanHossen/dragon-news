import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Lyout/RightNavbar";
import News from "../Components/News";




const SingleNewsDetails = () => {

    const { data: datas } = useLoaderData()

    return (


        <div>
            <section>
                <header>
                    <Header></Header>
                </header>

                <section className="w-11/12 mx-auto grid grid-cols-12">
                    <main className="col-span-9 px-10">
                        <h1 className="text-2xl font-bold  m-5 ml-0">Dragon News</h1>
                        {
                            datas.map(data => <News key={data.category_id} news={data}></News>)
                        }

                    </main>
                    <aside className="col-span-3">
                        <RightNavbar></RightNavbar>
                    </aside>
                </section>


            </section>
        </div>
    );
};

export default SingleNewsDetails;