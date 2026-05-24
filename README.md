# 🚀 Portfolio de Santiago Navarro

Portfolio personal desarrollado con Next.js, TypeScript y Tailwind CSS.

## ✨ Características

- ⚡ **Next.js 15** con App Router
- 🎨 **Tailwind CSS** para estilos
- 📱 **Responsive Design**
- 🌙 **Modo Oscuro**
- ✉️ **Formulario de Contacto** con EmailJS
- 🎭 **Animaciones** suaves
- 🔍 **SEO Optimizado**
- ⚡ **Performance Optimizado**

## 🛠️ Tecnologías

- **Frontend**: React, Next.js, TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: CSS Animations, Framer Motion
- **Email**: EmailJS
- **Deployment**: Vercel (recomendado)

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd my-portfolio1
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   ```bash
   npm run setup-env
   ```

4. **Edita `.env.local`** con tus credenciales de EmailJS

5. **Ejecuta en desarrollo**
   ```bash
   npm run dev
   ```

## 📧 Configuración de EmailJS

Para que el formulario de contacto funcione:

1. **Crea una cuenta en [EmailJS](https://www.emailjs.com/)**
2. **Configura un servicio de email** (Gmail, Outlook, etc.)
3. **Crea un template de email**
4. **Obtén tu Public Key**
5. **Actualiza `.env.local`** con tus credenciales

### Variables de Entorno Requeridas

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

📚 **Documentación completa**: [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

## 🚀 Deployment

### Vercel (Recomendado)

1. **Conecta tu repositorio** a Vercel
2. **Configura las variables de entorno** en el dashboard
3. **Deploy automático** en cada push

### Otros Servicios

- **Netlify**: Configura variables de entorno
- **Railway**: Agrega variables en Settings
- **Render**: Configura en Environment

📚 **Guía completa**: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── about/             # Página "Sobre mí"
│   ├── contact/           # Página de contacto
│   ├── projects/          # Página de proyectos
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizables
│   ├── icons/            # Iconos SVG
│   ├── Header.tsx        # Navegación
│   ├── Footer.tsx        # Pie de página
│   ├── Hero.tsx          # Sección principal
│   └── Skills.tsx        # Habilidades
└── data/                 # Datos estáticos
    └── projects.ts       # Información de proyectos
```

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js` para personalizar la paleta de colores.

### Agregar Proyectos

Actualiza `src/data/projects.ts` con tus proyectos.

### Modificar Contenido

Edita los componentes en `src/components/` para cambiar el contenido.

## 📊 Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimizado
- **Bundle Size**: Minimizado
- **Images**: Optimizadas con Next.js

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter
npm run setup-env    # Configurar variables de entorno
```

## 📚 Documentación

- [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) - Configuración de EmailJS
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guía de deployment
- [TEMPLATE_CONFIG.md](./TEMPLATE_CONFIG.md) - Configuración de templates

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

- **Email**: santnavarro08@gmail.com
- **LinkedIn**: [santinavarro-dev](https://www.linkedin.com/in/santinavarro-dev/)
- **GitHub**: [santinava06](https://github.com/santinava06)

---

⭐ **¡Dale una estrella si te gusta el proyecto!**
