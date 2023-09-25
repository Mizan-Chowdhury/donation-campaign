import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 lg:px-32 py-20">
            {
                cards?.map(card=> <Cards key={card.id} card={card}></Cards>)
            }
            </div>
        </div>
    );
};

export default Home;