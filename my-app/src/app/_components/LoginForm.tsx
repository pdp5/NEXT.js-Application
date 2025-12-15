'use client'
import { useActionState } from "react";
import { login } from "../_API";


const LoginForm = () =>{
  const [state , formAction , isPending] = useActionState(login, undefined);
    return (
        <form className="m-20 p-5 " action={formAction}>
            <div className="m-3">
                <label htmlFor="email">Email:</label> <br />
                <input type="email" name="email" required placeholder="Enter your email..."/>
            </div>
            <div className="m-3">
                <label htmlFor="password">Password:</label> <br />
                <input type="password" name="password" required placeholder="Enter your password..."/>
            </div>
            <button disabled={isPending} className={`${isPending && "text-gray-500"} "hover:underline" type="submit"`}>{isPending ? "Submitting..." : "Submit"}</button>

            {state?.message && (<p className={state.success ? "text-green-500" : "text-red-500"}>{state.message}</p>) }
        </form>



    );
}
export default LoginForm;