import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      // Inicia sesión con Google, redirigiendo a la página de dashboard
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (err) {
      setError("Hubo un error al iniciar sesión. Intenta nuevamente.");
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Iniciar Sesión</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "Iniciando sesión..." : "Iniciar con Google"}
      </button>
    </div>
  );
}
