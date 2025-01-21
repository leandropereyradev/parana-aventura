
# Paraná Aventura 🌊🎣

¡Bienvenido a Paraná Aventura! Este es un proyecto de aplicación web para los amantes de la pesca. Consta de un **Backend** (API) y un **Frontend** (Interfaz de usuario), que trabajan juntos para ofrecer una experiencia única. 🚀

---

## 🌟 Tecnologías utilizadas

### Backend:
- **Node.js** con **Express.js**
- Base de datos: **MongoDB**
- Autenticación con **JWT**
- Carga de imágenes en **Cloudinary**
- Gestión de archivos con **Multer**
- Integración de pagos con **Stripe**

### Frontend:
- **React** con **Vite**
- **TailwindCSS** para diseño moderno y responsivo
- **React Hook Form** para manejo de formularios
- **React Router DOM** para navegación dinámica
- **Axios** para comunicación con la API

---

## 🚀 Configuración inicial

### Clonar el repositorio

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/leandropereyradev/parana-aventura.git
   cd parana-aventura
   ```

2. Este proyecto incluye dos carpetas principales:
   - **api/**: Backend (API) y lógica del servidor.
   - **web/**: Frontend (Interfaz de usuario).

---

### 🖥️ Backend (API)

#### 1. Configuración

1. Ve a la carpeta del backend:
   ```bash
   cd api
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del backend con las siguientes variables:
   ```env
   PORT=3001
   USER_CONFIRMATION_REQUIRED=false
   MONGODB_URI=<tu_URI_de_MongoDB>
   NODEMAILER=<tu_config_de_nodemailer>
   API_URL='http://localhost:3001/api'
   WEB_URL='http://localhost:3000'
   JWT_SECRET=<tu_secreto_de_JWT>
   ```

#### 2. Poblar la base de datos

1. Los datos iniciales se encuentran en la carpeta `bin/`.
2. Ejecuta los scripts de siembra para agregar las zonas de pesca:
   ```bash
   node bin/seedFishingZones.js
   ```

#### 3. Iniciar el servidor

Ejecuta el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

Tu API estará disponible en [http://localhost:3001](http://localhost:3001).

---

### 🌐 Frontend (Interfaz de usuario)

#### 1. Configuración

1. Ve a la carpeta del frontend:
   ```bash
   cd web
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del frontend con la siguiente variable:
   ```env
   REACT_APP_BASE_API_URL="http://localhost:5173/api/"
   ```

#### 2. Iniciar el servidor

Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

Tu aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

---

## 📂 Estructura del proyecto

```
parana-aventura/
├── ⚙️ api/                # Lógica del servidor y API
│   ├── 📁 bin/            # Scripts para poblar la base de datos
│   ├── 📁 config/         # Configuraciones (BD, Cloudinary, etc.)
│   ├── 📁 controllers/    # Controladores de las rutas
│   ├── 📁 middlewares/    # Middlewares de la API
│   ├── 📁 models/         # Modelos de datos (MongoDB)
│   ├── 📄 package.json    # Configuración de dependencias y scripts
│   └── 📄 app.js          # Configuración principal del servidor
│
├── 🖥️ web/                  # Interfaz de usuario
│   ├── 📁 public/           # Archivos públicos (íconos, imágenes, etc.)
│   ├── 📁 src/              # Código fuente de React
│   │   ├── 📁 components/   # Componentes reutilizables
│   │   ├── 📁 context/      # Contextos de estado global
│   │   ├── 📁 data/         # Datos estáticos
│   │   ├── 📁 hook/         # Hooks personalizados
│   │   ├── 📁 pages/        # Páginas principales
│   │   ├── 📁 Router/       # Enrutamiento de la aplicación
│   │   ├── 📁 services/     # Consultas a la API
│   │   └── 📄 main.jsx      # Punto de entrada de React
│   ├── 📄 package.json      # Configuración de dependencias y scripts
│   └── 📄 vite.config.js    # Configuración de Vite
│
└── 📄 README.md        # Documentación del proyecto
```

---

## 🎯 Funcionalidades principales

1. **Autenticación de usuarios**: Inicio de sesión y registro con JWT.
2. **Gestión de reservas**: Interacción con zonas de pesca y servicios adicionales.
3. **Carga de imágenes**: Uso de Cloudinary para subir y almacenar imágenes.
4. **Pagos en línea**: Integración con Stripe para procesar pagos de usuarios.

---

## 🛠️ Scripts útiles

### Backend
- `npm run dev`: Ejecuta el servidor en modo desarrollo.
- `npm start`: Ejecuta el servidor en modo producción.
- `npm run build`: Instala las dependencias.

### Frontend
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera los archivos optimizados para producción.
- `npm run preview`: Previsualiza la aplicación de producción localmente.

---

## 🌍 Despliegue

### Backend
1. Despliega el backend en servicios como **Heroku**, **Render**, o **AWS**.
2. Asegúrate de configurar las variables de entorno en el panel de tu proveedor de hosting.

### Frontend
1. Genera los archivos estáticos con:
   ```bash
   npm run build
   ```
2. Sube el contenido de la carpeta `dist/` a servicios como **Vercel**, **Netlify**, o **GitHub Pages**.

---

## 🤝 Contribuciones

¿Tienes ideas para mejorar Paraná Aventura? ¡Eres bienvenido a contribuir! Puedes:
1. Crear un **issue** con tus ideas o problemas encontrados.
2. Hacer un **fork** del proyecto y enviar un **pull request**.

---

## 📞 Contacto

Desarrollado con ❤️ por **Leandro Pereyra**.  
- [GitHub](https://github.com/leandropereyradev)  
- [LinkedIn](https://www.linkedin.com/in/leandropereyradev/)  
- [Personal Web](https://leandro-pereyra-dev.vercel.app/)  

¡Gracias por visitar Paraná Aventura! 🎣🌊✨
