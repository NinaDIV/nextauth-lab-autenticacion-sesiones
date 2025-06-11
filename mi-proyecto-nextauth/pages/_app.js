import { SessionProvider } from "next-auth/react"; // Asegúrate de importar el SessionProvider
import "../styles/globals.css"; // Tus estilos globales

function MyApp({ Component, pageProps }) {
  return (
    // Aquí envuelves la aplicación con el SessionProvider
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
