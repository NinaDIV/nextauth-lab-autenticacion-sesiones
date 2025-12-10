# NextAuth - Laboratorio de Autenticación y Manejo de Sesiones

![Auth Screenshot](/galeria/Auth.png)




## 🛠️ Tecnologías
- **Next.js** - Framework React para producción
- **NextAuth.js** - Solución completa de autenticación
- **OAuth** - Protocolo de autorización (Google y GitHub)
- **React** - Biblioteca de JavaScript para interfaces de usuario
- **Node.js** - Entorno de ejecución JavaScript
- **CSS Modules** - Estilos modulares y scoped

---

## 📦 Instalación

### 1. Crear el proyecto
```bash
npx create-next-app@latest mi-proyecto-nextauth
cd mi-proyecto-nextauth
```

### 2. Instalar dependencias
```bash
npm install
# o
yarn install
```

---

## ⚙️ Configuración de Variables de Entorno

Para que la autenticación con Google y GitHub funcione correctamente, **debes crear un archivo llamado `.env.local` en la raíz del proyecto**. Este archivo no debe subirse a GitHub.

### 3. Crea el archivo `.env.local` con el siguiente contenido:
```env
GOOGLE_CLIENT_ID=tu-google-client-id
GOOGLE_CLIENT_SECRET=tu-google-client-secret
GITHUB_CLIENT_ID=tu-github-client-id
GITHUB_CLIENT_SECRET=tu-github-client-secret
NEXTAUTH_SECRET=una-clave-secreta-aleatoria
NEXTAUTH_URL=http://localhost:3000
```

  
### 4. Genera una clave secreta para NextAuth
Puedes generarla con el siguiente comando en la terminal:
```bash
openssl rand -base64 32
```
Pega ese valor en `NEXTAUTH_SECRET`.

### 5. Reinicia el servidor de desarrollo
Después de modificar `.env.local`, reinicia tu servidor con:
```bash
npm run dev
# o
yarn dev
```

---

## 🏗️ Estructura del Proyecto

```
mi-proyecto-nextauth/
├── pages/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth].js    # Configuración NextAuth
│   ├── login.js                    # Página de login
│   ├── dashboard.js                # Dashboard protegido
│   └── index.js                    # Página principal
├── styles/
│   ├── Home.module.css            # Estilos de la página principal
│   └── LoginPage.module.css       # Estilos del login
├── .env.local                     # Variables de entorno (NO subir a git)
├── package.json
└── README.md
```

---

## 🚀 Funcionalidades Implementadas

### ✅ Autenticación
- [x] Login con Google OAuth
- [x] Login con GitHub OAuth
- [x] Manejo de sesiones seguras
- [x] Logout automático
- [x] Redirección condicional

### ✅ Interfaz de Usuario
- [x] Página principal responsive
- [x] Formulario de login estilizado
- [x] Dashboard protegido
- [x] Estados de carga
- [x] Manejo de errores
- [x] Modo oscuro automático

### ✅ Seguridad
- [x] CSRF Protection
- [x] JWT Tokens seguros
- [x] Validación de sesiones
- [x] Variables de entorno
- [x] Redirecciones seguras

---
  
