import { TbPhoneCalling } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_i93mpbc', 'template_fbozraq', form.current, 'DJ3zTCoZ1I5Ql0zHn')
      .then((result) => {
        console.log(result.text);
        // Show SweetAlert on success
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Form Successfully submitted",
          showConfirmButton: false,
          timer: 1500
        });
        
        // Reset the form
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      });
  };
  return (
    <>
    <h1 className="text-center text-3xl font-bold">Contact Us!</h1>
    <br />
    <div className="max-w-[1440px] mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 mx-auto px-2">
      <div className="card border border-zinc-300 drop-shadow-xl">
        <div className="card-body">
        <FaMapLocationDot className="text-2xl  text-red-600 mx-auto " />
          <h2 className="text-center text-2xl font-bold">ADDRESS</h2>
          <p className="font-medium text-center">Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="card border border-zinc-300 drop-shadow-xl">
        <div className="card-body">
        <TbPhoneCalling  className="text-2xl  text-red-600 mx-auto" />
          <h2 className="text-center text-2xl font-bold">PHONE NUMBER</h2>
          <p className="font-medium text-center">012345674444, 012345674455
          </p>
        </div>
      </div>
      <div className="card border border-zinc-300 drop-shadow-xl">
        <div className="card-body">
        <MdAttachEmail  className="text-2xl  text-red-600 mx-auto" />
          <h2 className="text-center text-2xl font-bold">EMAIL ADDRESS</h2>
          <p className="font-medium text-center">Example@gmail.com</p>
        </div>
      </div>
    </div>
    <form
  ref={form}
  onSubmit={sendEmail}
  className="bg-gray-200 p-8 rounded-md shadow-md"
>
  <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-2 text-blue-500">Name</label>
      <input
        type="text"
        name="from_name"
        required
        placeholder="Full Name"
        className="p-2 border-2 border-blue-500 rounded-md"
      />
    </div>
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-2 text-blue-500">Email</label>
      <input
        type="text"
        required
        name="from_email"
        placeholder="E-mail"
        className="p-2 border-2 border-blue-500 rounded-md"
      />
    </div>
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-2 text-blue-500">Number</label>
      <input
        type="number"
        required
        name="from_number"
        placeholder="Number"
        className="p-2 border-2 border-blue-500 rounded-md"
      />
    </div>
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-2 text-blue-500">City</label>
            <select
              className="w-full px-4 py-2 rounded p-2 border-2 border-blue-500"
              name="from_country"
              required
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Rajshahi">Rajshahi </option>
              <option value="Khulna">Khulna</option>
              <option value="Barisal">Barisal</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Comilla">Comilla </option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Jessore">Jessore</option>
              <option value="Dinajpur">Dinajpur</option>
            </select>
          </div>
  </div>
  <div className="mb-4">
    <label className="font-semibold mb-2 text-blue-500">Message</label>
    <textarea
      name="message"
      required
      className="p-2 border-2 border-blue-500 rounded-md w-full"
      placeholder="Write Message"
      rows="4"
    ></textarea>
  </div>
  <button
    type="submit"
    className="text-sm mx-auto flex items-center gap-2 md:text-base inter rounded py-3 px-20 text-white font-bold bg-[#00E5F7] content-glow hover:bg-transparent hover:border-[#00E5F7] hover:border hover:duration-1000 hover:text-[#00E5F7]"
  >
    Submit
  </button>
</form>
    </>
  );
};

export default Contact;
