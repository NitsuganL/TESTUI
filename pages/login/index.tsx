import { useForm } from 'react-hook-form'

import Button from "@/components/atoms/button"
import Input from "@/components/atoms/input"

export default function Login(){
    const{ register, handleSubmit, formState:{ errors }} = useForm()
    const onSubmit = (data:any) => console.log(data)

    return(
        <>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>

            <Input id={''} isRequired={false} placeholder="Email" type="text"
                    {...register("email", { required: true })}            />

        </div>

        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>

            <Input id={''} isRequired={false} placeholder="Password" type="text"
                    {...register("email", { required: true })}            />

        </div>
        <div className='form-control'>
            <label className=''>
                <span className='btn btn-primary'>SUBMIT</span>
            </label>

        </div>
    </form> */}


        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-base-content rounded-md shadow-md lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-neutral-focus">Log In</h1>
            <form className="space-y-4 ">
                <div>
                    <label className="label">
                        <span className="text-neutral-focus label-text">Email</span>
                    </label>
                    <Input id={''} isRequired={true} placeholder="Email" type="email" className="w-full input input-bordered input-primary "
                            {...register("email", { required: true })}  />
                    {errors.email && <span> Email is required</span>}
                </div>
                <div>
                    <label className="label">
                        <span className="text-neutral-focus label-text">Password</span>
                    </label>
                    <Input id={''} isRequired={true} placeholder="Password" type="password" className="w-full input input-bordered input-primary "
                    {...register("password", { required: true })}            />
                      {errors.email && <span> Email is required</span>}
                </div>
                <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>

                <div className="flex flex-col w-full border-opacity-50">
                    <div className="text-center">
                        <button className="btn btn-success btn-md">Log In</button>
                    </div>

                        <div className="divider text-black">_________________________________________________________</div>
                    
                </div>
            </form>
            <div className="text-center">
                        <p className="text-center text-base-200">Don't have an account?</p>
                        <a href="/register">
                        <button className="btn btn-primary" onClick={() => console.log('askldj')}>Register Now</button>
                        </a>
                        
                    </div>
            
        </div>
    </div> 
        
       </>
    )
}