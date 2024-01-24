import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useUser } from "../../UserContext/UserContext";

const HousesDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const [allHomes, setAllHomes] = useState([]);
    console.log(allHomes);
    const { currentUser } = useUser();
    console.log(currentUser);

  const fetchJobs = () => {
    fetch('https://task-pro-server-psi.vercel.app/users')
      .then((res) => res.json())
      .then((data) => setAllHomes(data));
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone_number = form.phone_number.value;
    const newHome = {
      name,
      phone_number,  
    };
    const isBangladeshiphone_number =
    /^(\+880|0)(1[3-9][0-9]{8}|[1-9][0-9]{8})$/.test(phone_number);
  if (!isBangladeshiphone_number) {
    Swal.fire({
      icon: "error",
      title: "Invalid Phone Number",
      text: "Please enter a valid Bangladeshi phone number.",
    });
    return;
  }
  fetch("https://task-pro-server-psi.vercel.app/homes", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newHome),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Home rented Successfully",
        });
      }
    });
};
    return (
        <div>
             <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              defaultValue=""
              readOnly
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="text"
              name="email"
              defaultValue=""
              readOnly
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number:
            </label>
            <input
              type="text"
              name="phone_number"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        </div>
    );
};

export default HousesDetails;