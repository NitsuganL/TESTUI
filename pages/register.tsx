import { useForm } from "react-hook-form"

import Button from "@/components/atoms/button"
import Input from "@/components/atoms/input"

export default function Register(){

    const{ register, handleSubmit, formState:{ errors }} = useForm()
    const onSubmit = (data:any) => console.log(data)

    return(
        <>

        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-base-content rounded-md shadow-md lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-neutral-focus">Register</h1>
            <form className="space-y-4">
                <div>
                    <label className="label">
                        <span className="text-neutral-focus label-text">Email</span>
                    </label>
                    <Input id={''} isRequired={true} placeholder="Email" type="email" className="w-full input input-bordered input-primary "
                    {...register("email", { required: true })}   />
                      {errors.email && <span> Email is required</span>}
                </div>
                <div>
                    <label className="label">
                        <span className="text-neutral-focus label-text">Password</span>
                    </label>
                    <Input id={''} isRequired={true} placeholder="Password" type="password" className="w-full input input-bordered input-primary "
                    {...register("email", { required: true })}            />
                    {errors.email && <span> Email is required</span>}
                </div>
                <div>
                    <label className="label">
                        <span className="text-neutral-focus label-text">Confirm Password</span>
                    </label>
                    <Input id={''} isRequired={true} placeholder="Email" type="password" className="w-full input input-bordered input-primary "
                    {...register("email", { required: true })}            />
                    {errors.email && <span> Email is required</span>}
                </div>
               <div className="divider text-black">__________________________________________________________</div>
                
            </form>
            <br />
            <div className="flex flex-col items-center justify-center">
                    
                        <button className="btn btn-primary">Submit</button>
                    {/* <button className="btn btn-info">Register</button> */}
                </div>
        </div>
    </div>
        
       </>
    )
}