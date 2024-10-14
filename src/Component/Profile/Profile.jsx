import { useContext } from "react";
import { createContextUser } from "../Authentication/Authentication";
import { useForm } from "react-hook-form";


const Profile = () => {
    const { newprofile } = useContext(createContextUser)



    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { name, url } = data;
        try {
            console.log(name, url);

            newprofile(name, url)
        } catch (error) {

            console.log(error.message);
        }
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"  {...register("name")} />

            {/* include validation with required or other standard HTML validation rules */}
            <label className="label">
                <span className="label-text">URL</span>
            </label>
            <input className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"  {...register("url", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    );
};

export default Profile;