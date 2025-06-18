// Dashboard.js
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  // Lógica para manejar el estado de carga
  useEffect(() => {
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  // Función para manejar el inicio de sesión
  const handleSignIn = () => {
    signIn("google");
  };

  // Función para manejar el cierre de sesión
  const handleSignOut = () => {
    signOut();
  };

  // Renderizado condicional: Estado de carga
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingMessage}>
          Cargando...
        </div>
      </div>
    );
  }

  // Renderizado condicional: Sin sesión
  if (!session) {
    return (
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <div className={styles.loginMessage}>
            No tienes acceso. Inicia sesión.
          </div>
          <button 
            onClick={handleSignIn}
            className={styles.loginButton}
          >
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    );
  }

  // Renderizado condicional: Con sesión activa
  return (
    <div className={styles.container}>
      <div className={styles.welcomeContainer}>
        {session.user.image && (
          <img 
            src={session.user.image} 
            alt="Foto de perfil"
            className={styles.profileImage}
          />
        )}
        <h1 className={styles.welcomeTitle}>
          Bienvenido, {session.user.name}
        </h1>
        <p className={styles.userEmail}>
          Email: {session.user.email}
        </p>
        <button 
          onClick={handleSignOut}
          className={styles.logoutButton}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}