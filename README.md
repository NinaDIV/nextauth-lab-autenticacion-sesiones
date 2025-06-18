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
```


2. Obtén las credenciales de Google
Ingresa a Google Developer Console.

Crea un nuevo proyecto (o selecciona uno existente).

Ve a APIs y servicios > Credenciales.

Haz clic en Crear credenciales > ID de cliente de OAuth.

En "URI de redireccionamiento autorizado" agrega:

```bash
Copiar
Editar
http://localhost:3000/api/auth/callback/google
Copia el Client ID y Client Secret y pégalos en .env.local.
```
3. Obtén las credenciales de GitHub
Ve a GitHub Developer Settings.

Haz clic en OAuth Apps > New OAuth App.

En "Authorization callback URL" coloca:

```bash
Copiar
Editar
http://localhost:3000/api/auth/callback/github
Copia el Client ID y Client Secret y pégalos en .env.local.

```
4. Genera una clave secreta para NextAuth
Puedes generarla con el siguiente comando en la terminal:

```bash
Copiar
Editar
openssl rand -base64 32
Pega ese valor en NEXTAUTH_SECRET.
```
5. Reinicia el servidor de desarrollo
Después de modificar .env.local, reinicia tu servidor con:

```bash
Copiar
Editar
npm run dev
```
 

 







