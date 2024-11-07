"use client";

import { loginUser } from "@/components/login/action.jsx";
import { useFormState } from "react-dom";

export default function Login() {
  const [state, action] = useFormState(loginUser, null);
  return (
    <>
      {state?.error && <div>{state.error}</div>}
      <form action={action}>
        <input type="email" name="email" placeholder="E-posta Adresi" /> <br />
        <input type="password" name="password" placeholder="Şifre" /> <br />
        <button>Giriş Yap</button>
      </form>
    </>
  );
}
