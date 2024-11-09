"use client";

import { loginUser } from "@/components/login/action.jsx";
import { useFormState } from "react-dom";
import "./login.css";
import Link from "next/link";

export default function Login() {
  const [state, action] = useFormState(loginUser, null);
  return (
    <>
      {state?.error && <div>{state.error}</div>}
      <Link href={"/"}>Geri Dön</Link>

      <form action={action} className="loginForm">
        <input type="email" name="email" placeholder="E-posta Adresi" className="email"/>
        <input type="password" name="password" placeholder="Şifre" /> <br />

        <button>Giriş Yap</button>
      </form>
    </>
  );
}
