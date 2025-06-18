# NextAuth - Laboratorio de Autenticación y Manejo de Sesiones

## 👨‍💻 Desarrollado por:
**Milward Fernando Nina Mayta**  
**Docente:** Renato Usnayo Cáceres  
**Grupo:** [Completar]  
**Fecha de Entrega:** [Completar]

---

## 🎯 Objetivo
Implementar autenticación segura en una aplicación Next.js usando NextAuth.js con los proveedores Google y GitHub, manejo de sesiones y roles de usuario.

---

## 🛠️ Tecnologías
- Next.js
- NextAuth.js
- OAuth (Google y GitHub)
- React
- Node.js

---

## 📦 Instalación

```bash
npx create-next-app@latest mi-proyecto-nextauth
cd mi-proyecto-nextauth
npm install
yarn install
```

## Configuración de Variables de Entorno (`.env.local`)

Para que la autenticación con Google y GitHub funcione correctamente, **debes crear un archivo llamado `.env.local` en la raíz del proyecto**. Este archivo no debe subirse a GitHub.

### 1. Crea el archivo `.env.local` con el siguiente contenido:

```env
GOOGLE_CLIENT_ID=tu-google-client-id
GOOGLE_CLIENT_SECRET=tu-google-client-secret
GITHUB_CLIENT_ID=tu-github-client-id
GITHUB_CLIENT_SECRET=tu-github-client-secret
NEXTAUTH_SECRET=una-clave-secreta-aleatoria
