import { useContext } from "react";
import { createContextUser } from "../Authentication/Authentication";
import { useForm } from "react-hook-form";


const Profile = () => {
    const { newprofile } = useContext(createContextUser)



    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { name, url } = data;
        try {
            console.log(name,url);

            newprofile(name, url)
        } catch (error) {

            console.log(error.message);
        }
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("name")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input  {...register("url", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default Profile;