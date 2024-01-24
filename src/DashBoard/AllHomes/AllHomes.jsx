import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllHomes = () => {
    const [allHomes, setAllHomes] = useState([]);

  const fetchHomes = () => {
    fetch('https://task-pro-server-psi.vercel.app/allData')
      .then((res) => res.json())
      .then((data) => setAllHomes(data));
  };
  useEffect(() => {
    fetchHomes();
  }, []);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-pro-server-psi.vercel.app/home/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Job has been deleted.", "success");
              fetchHomes();
            }
          });
      }
    });
  };
    return (
        <div>
      
      <div className="grid-col-1 lg:grid grid-cols-2 gap-3 ml-20">
        {allHomes.map((postedJob) => (
          <div key={postedJob._id} className="mb-8">
            <div className="relative flex justify-evenly max-w-xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6">
                <h5 className="block mb-2 text-2xl text-center antialiased font-bold leading-snug tracking-normal text-gray-900 bg-gradient-to-r from-purple-500 to-red-400 text-transparent bg-clip-text">
                  Name: 
                  {postedJob.name}
                </h5>
                <h5 className="text-xl text-center antialiased font-semibold">
                city:{postedJob.city}
                </h5>
                <h5 className="text-xl  text-center antialiased font-semibold">
                room_size :{postedJob.room_size}Sqaure Fit
                </h5>
                <h5 className="text-xl  text-center antialiased font-semibold">
                rent_per_month :
                 {postedJob.rent_per_month}
                </h5>
                
              </div>
              <div className="flex my-auto">
                <Link to={`/dashboard/homeUpdated/${postedJob._id}`}>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 mr-2 rounded focus:outline-none focus:ring h-12 focus:border-blue-300">
                    Update
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(postedJob._id)}
                  className="bg-red-200 hover:bg-red-400 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring h-12 focus:border-blue-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default AllHomes;