import Swal from "sweetalert2";

const AddHomes = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const phoneNumber = form.phoneNumber.value;
    const city = form.city.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const roomSize = form.roomSize.value;
    const picture = form.picture.value;
    const availabilityDate = form.availabilityDate.value;
    const rentPerMonth = form.rentPerMonth.value;
    const description = form.description.value;

    const newHome = {
      name,
      address,
      phoneNumber,
      city,
      bedrooms,
      bathrooms,
      roomSize,
      picture,
      availabilityDate,
      rentPerMonth,
      description,
    };
    const isBangladeshiPhoneNumber = /^(\+880|0)(1[3-9][0-9]{8}|[1-9][0-9]{8})$/.test(
      phoneNumber
    );
    if (!isBangladeshiPhoneNumber) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a valid Bangladeshi phone number.",
      });
      return;
    }
    fetch("http://localhost:5000/homes", {
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
            title: "Home Added Successfully",
          });
        }
      });
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl mx-auto font-bold mb-4">Add Homes</h2>
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
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address:
            </label>
            <input
              type="text"
              name="address"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City:
            </label>
            <input
              type="text"
              name="city"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="picture"
              className="block text-sm font-medium text-gray-600"
            >
              Picture:
            </label>
            <input
              type="text"
              name="picture"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bedrooms"
              className="block text-sm font-medium text-gray-600"
            >
              Bedrooms:
            </label>
            <input
              type="text"
              name="bedrooms"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bedrooms"
              className="block text-sm font-medium text-gray-600"
            >
             Room Size:
            </label>
            <input
              type="text"
              name="roomSize"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="availabilityDate"
              className="block text-sm font-medium text-gray-600"
            >
              Availability Date:
            </label>
            <input
              type="date"
              name="availabilityDate"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="rentPerMonth"
              className="block text-sm font-medium text-gray-600"
            >
              Rent Per Month:
            </label>
            <input
              type="number"
              name="rentPerMonth"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description:
            </label>
            <textarea
              name="description"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bedrooms"
              className="block text-sm font-medium text-gray-600"
            >
              Bathrooms:
            </label>
            <input
              type="text"
              name="bathrooms"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Repeat similar structure for other fields */}

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number:
            </label>
            <input
              type="text"
              name="phoneNumber"
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
    </>
  );
};

export default AddHomes;
