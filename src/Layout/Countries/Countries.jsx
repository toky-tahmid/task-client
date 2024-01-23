import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Countries = ({ data }) => {
  console.log(data);

  return (
    <div className="max-w-[1440px] mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 mx-auto px-2">
      {data?.map((event, index) => (
        <div key={index} className="border rounded-2xl shadow">
          <img src={event.picture} alt={event.title} className="w-full h-48 object-cover mb-2 rounded-t-2xl" />
          <div className="px-4 pb-6">
            <h3 className="text-2xl text-center font-semibold mb-2">{event.title}</h3>
            <p className="text mb-4 overflow-hidden">{event.short_description}</p>
            <Link to={`/countriesDetails/${event?._id}`}>
              <button className="bg-[#f7c221] text-base font-semibold rounded-lg px-5 py-2 flex items-center gap-2 md:text-base  text-slate-900  bg-[#f7c221fd] content-glow hover:bg-transparent hover:border-[#f7c221] hover:border hover:duration-700 hover:text-black">Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
