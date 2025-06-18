import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github"; // <--- Agregado

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({ // <--- Agregado
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.sub;
      // Si ya tienes el rol en la base de datos, obténlo aquí. Si no, agrega un rol por defecto
      session.user.role = token.role || "user"; // <--- Rol por defecto
      return session;
    },
    // Asigna el rol al token cuando se crea (puedes personalizarlo aquí)
    async jwt({ token, user, account, profile }) {
      // Asigna rol de "admin" solo para tu correo personal como ejemplo
      if (user?.email === "tucorreo@ejemplo.com") {
        token.role = "admin";
      } else {
        token.role = "user";
      }
      return token;
    },
  },
});
