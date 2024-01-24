/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Houses = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data.slice(0, 10)); // 
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    bedrooms: "",
    bathrooms: "",
    roomSize: "",
    availabilityDate: "",
    rent: "",
  });
  

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filters]);

  const applyFilters = () => {
    let filtered = data;

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter((event) =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply other filters
    filtered = filtered.filter(
      (event) =>
        (!filters.city ||
          event.city.toLowerCase() === filters.city.toLowerCase()) &&
        (!filters.bedrooms ||
          event.bedrooms === parseInt(filters.bedrooms, 10)) &&
        (!filters.bathrooms ||
          event.bathrooms === parseInt(filters.bathrooms, 10)) &&
        (!filters.roomSize ||
          event.room_size === parseInt(filters.roomSize, 10)) &&
        (!filters.availabilityDate ||
          event.availability_date.includes(filters.availabilityDate)) &&
        (!filters.rent || event.rent_per_month <= parseInt(filters.rent, 10))
    );

    setFilteredData(filtered.slice(0, 10)); // Update filtered data for display
  };

  const handleLoadMore = () => {
    const currentCount = filteredData.length;
    const newData = data.slice(currentCount, currentCount + 10);
    setFilteredData((prevData) => [...prevData, ...newData]);
  };

  const handleInputChange = (filter, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
  };

  return (
    <div>
      <div className="ml-32 mb-4">
        <input
          className="p-2 border-2 mr-2 border-blue-500 rounded-md "
          type="text"
          placeholder=" city"
          value={filters.city}
          onChange={(e) => handleInputChange("city", e.target.value)}
        />
        <input
          className="p-2 border-2 mr-2 border-blue-500 rounded-md "
          type="text"
          placeholder="Bedrooms"
          value={filters.bedrooms}
          onChange={(e) => handleInputChange("bedrooms", e.target.value)}
        />
        <input
          className="p-2 border-2 mr-2 border-blue-500 rounded-md "
          type="text"
          placeholder="Bathrooms"
          value={filters.bathrooms}
          onChange={(e) => handleInputChange("bathrooms", e.target.value)}
        />
        <input
          className="p-2 border-2 mr-2 border-blue-500 rounded-md "
          type="text"
          placeholder="Room-size"
          value={filters.roomSize}
          onChange={(e) => handleInputChange("roomSize", e.target.value)}
        />

        <input
          className="p-2 border-2 mr-2 border-blue-500 rounded-md "
          type="text"
          placeholder="Year/Month/Day"
          value={filters.availabilityDate}
          onChange={(e) =>
            handleInputChange("availabilityDate", e.target.value)
          }
        />

        <input
          className="p-2 border-2  border-blue-500 rounded-md "
          type="text"
          placeholder="Your rent (max)"
          value={filters.rent}
          onChange={(e) => handleInputChange("rent", e.target.value)}
        />
      </div>

      <div className="max-w-[1440px] mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 mx-auto px-2">
        {filteredData.map((event, index) => (
          <div key={index} className="border border-orange-500 rounded-2xl shadow">
            <img
              src={event.picture}
              alt={event.title}
              className="w-full h-48 object-cover mb-2 rounded-t-2xl"
            />
            <div className="px-4 pb-6">
              <h3 className="text-2xl text-center font-semibold mb-2">
                {event.name}
              </h3>
              <div className="flex justify-evenly">
                <div>
                  <p className="text mb-4 overflow-hidden">
                    City: {event.city}
                  </p>
                  <p className="text mb-4 overflow-hidden">
                    Address: {event.address}
                  </p>
                  <p className="text mb-4 overflow-hidden">
                    Availability_date: {event.availability_date}
                  </p>
                </div>
                <div>
                  <p className="text mb-4 overflow-hidden">
                    Bedrooms: {event.bedrooms}
                  </p>
                  <p className="text mb-4 overflow-hidden">
                    Bathrooms: {event.bathrooms}
                  </p>
                  <p className="text mb-4 overflow-hidden">
                    Room_size: {event.room_size}
                  </p>
                  <p className="text mb-4 overflow-hidden">
                    Rent: {event.rent_per_month}
                  </p>
                </div>
              </div>
              <Link to={`/houseDetails/${event?._id}`}>
              <button
                className="text-sm mx-auto flex items-center gap-2 md:text-base inter rounded py-3 px-20 text-white font-bold bg-[#00E5F7] content-glow hover:bg-transparent hover:border-[#00E5F7] hover:border hover:duration-1000 hover:text-[#00E5F7]"
              >
                Rent
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {filteredData.length < data.length && (
        <button
          onClick={handleLoadMore}
          className="text-sm mx-auto flex items-center gap-2 md:text-base inter rounded py-3 px-20 text-white font-bold bg-[#00E5F7] content-glow hover:bg-transparent hover:border-[#00E5F7] hover:border hover:duration-1000 hover:text-[#00E5F7]"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Houses;
