# 🚀 Guía de Deployment

## 📋 Configuración para Producción

### 1. Variables de Entorno

Para que el formulario de contacto funcione en producción, necesitas configurar estas variables de entorno:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_b27e4ra
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_ez82hdt
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=RlMd41GVffFjQbiY7
```

### 2. Deployment en Vercel

#### Opción A: Configurar en el Dashboard de Vercel

1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. Haz clic en **Settings**
3. Ve a **Environment Variables**
4. Agrega cada variable:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_b27e4ra`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_ez82hdt`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `RlMd41GVffFjQbiY7`
5. Haz clic en **Save**
6. Redespliega tu proyecto

#### Opción B: Usar Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Configurar variables de entorno
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

# Deploy
vercel --prod
```

### 3. Deployment en Netlify

1. Ve a tu proyecto en [netlify.com](https://netlify.com)
2. Haz clic en **Site settings**
3. Ve a **Environment variables**
4. Agrega cada variable:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_b27e4ra`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_ez82hdt`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `RlMd41GVffFjQbiY7`
5. Haz clic en **Save**
6. Redespliega tu sitio

### 4. Deployment en Otros Servicios

Para cualquier otro servicio de hosting, asegúrate de configurar las variables de entorno:

- **Railway**: Settings > Variables
- **Render**: Environment
- **Heroku**: Settings > Config Vars
- **DigitalOcean App Platform**: Settings > App-Level Environment Variables

## 🔒 Seguridad

### Variables Públicas vs Privadas

- `NEXT_PUBLIC_*` son variables que se exponen al cliente
- La Public Key de EmailJS es segura para usar en el frontend
- **NUNCA** expongas tu Private Key

### Configuración de Dominio en EmailJS

1. Ve a tu dashboard de EmailJS
2. Ve a **Account** > **General**
3. En **Authorized Domains**, agrega:
   - `localhost:3000` (para desarrollo)
   - `tu-dominio.com` (para producción)
   - `tu-dominio.vercel.app` (si usas Vercel)

## 🧪 Testing en Producción

### Verificar que Funciona

1. **Ve a tu sitio en producción**
2. **Llena el formulario de contacto**
3. **Envía un mensaje de prueba**
4. **Verifica que recibas el email**

### Debugging

Si no funciona en producción:

1. **Abre las herramientas de desarrollador**
2. **Ve a la consola**
3. **Busca errores relacionados con EmailJS**
4. **Verifica que las variables de entorno estén configuradas**

## 📊 Monitoreo

### EmailJS Dashboard

- Ve a tu dashboard de EmailJS
- Revisa la sección **Activity** para ver emails enviados
- Monitorea el uso de tu plan gratuito (200 emails/mes)

### Logs de Producción

- Vercel: Functions > View Function Logs
- Netlify: Functions > View Function Logs
- Otros servicios: Revisa los logs de tu plataforma

## 🔄 Actualización de Credenciales

Si necesitas cambiar las credenciales:

1. **Actualiza en EmailJS** (si es necesario)
2. **Actualiza las variables de entorno** en tu plataforma de hosting
3. **Redespliega** tu aplicación
4. **Prueba** que funcione

## 📞 Soporte

Si tienes problemas:

1. **Revisa los logs** de tu plataforma de hosting
2. **Verifica las variables de entorno**
3. **Confirma que el dominio esté autorizado** en EmailJS
4. **Prueba en desarrollo** primero
