import { login } from "./action"
import "./login.css";

export default function LoginPage() {
  return (
    <div className="loginContainer">
      <form action={login}>
      <label htmlFor="email">Eposta:</label>
      <input id="email" name="email" type="email" required placeholder="E-posta Giriniz" />
      <label htmlFor="password">Şifre:</label>
      <input id="password" name="password" type="password" required placeholder="********" />
      <button className="btnLogin">Login</button> 
    </form>
    </div>
  )
}