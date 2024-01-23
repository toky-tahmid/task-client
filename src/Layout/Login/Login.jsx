import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {

    const Location = useLocation();

    const navigation = useNavigate();

    const navigate = () => {
        console.log(Location.state);
         navigation(Location?.state ? Location.state : "/" )
    }
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        fetch(`http://localhost:5000/api/v1/users?email=${email}`,)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message === 'not found') {
                    console.log('user not found. you should register an account');
                    return;
                }
                if( data?.pass === pass) {
                    navigate()
                }
            })
    }
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center min-h-screen">
                <div className="flex-1">
                    <img className="w-full" src="https://i.ibb.co/BswVj9y/mobile-login-concept-illustration-114360-135-removebg-preview.png" alt="" />
                </div>
                <div className="flex-1">
                    <div className="w-9/12 md:w-11/12 lg:w-9/12 xl:w-7/12 mx-auto text-center space-y-3 lg:space-y-6">
                        <h4 className="text-sm md:text-base lg:text-lg font-bold text-design">L O G I N</h4>
                        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold">Welcome Back!</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">Log in to Your JOB CRACKER Account to Access Your Job Seeker or Employer Dashboard. Your Next Career Move Awaits!</p>
                    </div>
                    <div className="card-body w-11/12 md:w-full lg:w-10/12 xl:w-9/12 mx-auto">
                        <form onSubmit={handleLogin} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-gray-300">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-gray-300">Password</span>
                                </label>
                                <input type="password" name="pass" placeholder="Enter Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">LOGIN</button>
                            </div>
                            <h3 className="text-center mt-2">Don't Have an Accout ? <Link className="text-design font-bold" to='/register'>REGISTER </Link> </h3>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;