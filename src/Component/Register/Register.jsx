import { NavLink } from 'react-router-dom';
import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { createContextUser } from "../Authentication/Authentication";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);


    const { registerUser, newprofile } = useContext(createContextUser);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit1 = async (data) => {
        const { email, password, name, url } = data;
        try {
            const result = await registerUser(email, password);
            toast.success("Register successfully!");
            newprofile(name, url)

            console.log(result.user);
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
        }
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <ToastContainer />
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit1)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered"
                                    {...register("name", { required: "This field is required" })} />
                                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Please enter a valid email"
                                        }
                                    })} />
                                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered"
                                    {...register("url", { required: "This field is required" })} />
                                {errors.url && <span className='text-red-500'>{errors.url.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex absolute'>
                                    <input type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered"
                                        {...register("showPassword", {
                                            required: "This field is required",
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                                message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                                            }
                                        })} />
                                    <button className='relative right-5' onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </button>
                                </div>
                                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <NavLink to='/login'>
                                <p>Have an account? <span className='text-blue-600'>Login</span></p>
                            </NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
