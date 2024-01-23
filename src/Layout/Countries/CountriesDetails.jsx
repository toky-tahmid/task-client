/* eslint-disable no-unused-vars */
import 'sweetalert2/dist/sweetalert2.min.css';
import { useLoaderData } from "react-router-dom";
const CountriesDetails = () => {
  const data = useLoaderData();
  const { image, title, long_description } = data;
  console.log(data);
 
  return (  
    <> 
        <div className="border rounded-2xl flex lg:flex-row flex-col bg-white  border-gray-500 shadow-xl  overflow-hidden">
  <img
    className="lg:w-[510px] h-[300px] object-cover object-center"
    src={image}
    alt={title}
  />
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-gray-700">{long_description}</p>
  </div>
</div>

</>

    
    
  );
};
export default CountriesDetails;
