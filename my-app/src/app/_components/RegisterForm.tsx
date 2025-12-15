'use client';

import { useActionState } from "react";
import { register } from "../_API";


const RegisterForm = () => {
    const [state , formAction , isPending] = useActionState(register , undefined);
    return(
        <form action={formAction}>
            <div>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" name="firstname" />
            </div>
            <div>
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" name="lastname" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
            </div>
            <button type="submit">{isPending ? "Submitting..." : "Submit"}</button>

            {state?.message && <p className={state.success ? "text-green-500" : "text-red-500"}>{state.message}</p> }
        </form>
    );
}
export default RegisterForm;