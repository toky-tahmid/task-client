import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Houses from "../Houses/Houses";


const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <br />
            <br />
           <Houses data={data}></Houses>
        
           <Contact></Contact>
          
        </div>
    );
};

export default Home;