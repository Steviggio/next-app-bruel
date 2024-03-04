'use client';

import { authenticate } from "../../lib/actions";
import { useFormState, useFormStatus } from "react-dom";
// import { useState } from "react"


export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  // const [errorMessage, setErrorMessage] = useState("")
  return (
    <>

      <form className="login" action={dispatch}>
        {/* <div>{error}</div> */}
        <h2>Se connecter</h2>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
        />
        <label htmlFor="password">Mot de passe</label>
        <input id="password" name="password" type="password" />
        <LoginButton />
        {/* <input id="btn-connect" type="submit" value="Se connecter" /> */}
        {errorMessage && (<div><p>{errorMessage.message}</p></div>)}
      </form>
    </>
  )
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button id="btn-connect" type="submit" className="" aria-disabled={pending}>
      Login
    </button>
  )
}