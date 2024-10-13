import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { createContextUser } from "../Authentication/Authentication";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { registerUser } = useContext(createContextUser);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit1 = async (data) => {
        const { email, password } = data;
        try {
            const result = await registerUser(email, password);
            toast.success("Register successfully!"); // Successful toast
            console.log(result.user);
        } catch (error) {
            toast.error("Registration failed, please try again."); // Error toast
            console.log(error.message);
        }
    }

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
                                {errors.name && <span>{errors.name.message}</span>}
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
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered"
                                    {...register("url", { required: "This field is required" })} />
                                {errors.url && <span>{errors.url.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", {
                                        required: "This field is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters long"
                                        }
                                    })} />
                                {errors.password && <span>{errors.password.message}</span>}
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
