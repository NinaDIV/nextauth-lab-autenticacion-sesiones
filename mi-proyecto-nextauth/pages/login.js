import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Iniciar Sesión</h1>
      <button onClick={() => signIn("google")}>Iniciar con Google</button>
    </div>
  );
}
