"use client";
import { useActionState } from "react";
import { signin } from "../actions/auth";

const SigninForm = () => {
  const [state, action, pending] = useActionState(signin, undefined);

  return (
    <form action={action}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" placeholder="username" />
      </div>
      {state?.errors?.username && <p>{state.errors.username}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && <p>{state.errors.password}</p>}
      <button type="submit" disabled={pending}>
        Sign In
      </button>
    </form>
  );
};

export default SigninForm;
