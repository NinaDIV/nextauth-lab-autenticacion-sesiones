import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  // Esto se ejecuta cuando la sesión ya ha sido cargada
  useEffect(() => {
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  // Si estamos cargando la sesión, mostramos un "loading"
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Cargando...</h2>
      </div>
    );
  }

  // Si no hay sesión, mostramos el mensaje de inicio de sesión
  if (!session) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No tienes acceso. Inicia sesión.</h2>
        <button
          onClick={() => signIn("google")}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Iniciar sesión con Google
        </button>
      </div>
    );
  }

  // Si hay sesión, mostramos la información del usuario
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenido, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <img
        src={session.user.image || "/default-profile.png"} // Imagen por defecto en caso de que no haya foto
        alt="Foto de perfil"
        width={100}
        style={{ borderRadius: "50%", marginTop: "20px" }}
      />
      <br />
      <button
        onClick={() => signOut()}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#FF4D4D",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
