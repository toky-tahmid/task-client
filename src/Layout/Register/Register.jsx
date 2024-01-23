import { Link } from "react-router-dom";
const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        const role = form.role.value;
        const number = form.number.value;
        const name = form.name.value;
        const user = {
            email, pass, role, number, name
        }
        fetch('http://localhost:5000/api/v1/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            if(data.insertedId){
                console.log('user created successfully');
            }
        })
    }
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center min-h-screen">
                <div className="flex-1">
                    <img className="w-full" src="https://i.ibb.co/KhNyQ8T/gdpr-concept-illustration-114360-1028-removebg-preview.png" alt="" />
                </div>
                <div className="flex-1">
                    <div className="w-9/12 md:w-11/12 lg:w-9/12 xl:w-7/12 mx-auto text-center space-y-3 md:space-y-5 lg:space-y-3">
                        <h4 className="text-sm md:text-base lg:text-lg font-bold text-design">R E G I S T E R</h4>
                        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-tight font-bold">Join Our Job <span className="text-design">Network</span></h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">Unlock a World of Opportunities – Sign Up for Your JOB CRACKER Account Today! Job Seekers and Employers, Get Started Here.</p>
                    </div>
                    <div className="card-body w-11/12 md:w-full lg:w-10/12 xl:w-9/12 mx-auto">
                        <form onSubmit={handleRegister} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <select name="role" className="input input-bordered" >
                                    <option value="owner" className="input input-bordered">House Owner</option>
                                    <option value="renter" className="input input-bordered">House Renter</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Phone Number</span>
                                </label>
                                <input type="text" name="number" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Password</span>
                                </label>
                                <input type="password" name="pass" placeholder="Enter Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">CREATE ACCOUNT</button>
                            </div>
                            <h3 className="text-center mt-2">Don't Have an Accout ? <Link className="text-design font-bold" to='/login'>LOGIN </Link> </h3>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;