import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Countries from "../Countries/Countries";


const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <br />
            <br />
           <Countries data={data}></Countries>
        
           <Contact></Contact>
          
        </div>
    );
};

export default Home;