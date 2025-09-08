# 📧 Configuración de EmailJS para el Formulario de Contacto

Este documento te guía paso a paso para configurar EmailJS y recibir notificaciones por email cuando alguien envíe un mensaje desde tu portfolio.

## 🚀 Pasos para Configurar EmailJS

### 1. Crear Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar un Servicio de Email

1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado)
   - **Outlook**
   - **Yahoo**
   - Otros proveedores
4. Sigue las instrucciones para conectar tu cuenta
5. **Anota el Service ID** (ej: `service_b27e4ra`)

### 3. Crear un Template de Email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa este template como base:

```html
Nuevo mensaje desde tu portfolio

De: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}
Fecha: {{date}}

Mensaje:
{{message}}

---
Enviado desde tu portfolio web
```

4. **Anota el Template ID** (ej: `template_ez82hdt`)

### 4. Obtener tu Public Key

1. Ve a **Account** > **General**
2. En la sección **API Keys**, copia tu **Public Key**
3. **Anota la Public Key** (ej: `RlMd41GVffFjQbiY7`)

### 5. Configurar Variables de Entorno

1. Crea un archivo `.env.local` en la raíz de tu proyecto
2. Agrega las siguientes variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

**Ejemplo:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123def456
```

### 6. Probar el Formulario

1. Reinicia tu servidor de desarrollo: `npm run dev`
2. Ve a la página de contacto
3. Envía un mensaje de prueba
4. Verifica que recibas el email

## 🔧 Configuración Avanzada

### Template de Email Mejorado

Para un template más profesional, usa este:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nuevo mensaje desde tu portfolio</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            📧 Nuevo mensaje desde tu portfolio
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Nombre:</strong> {{from_name}}</p>
            <p><strong>📧 Email:</strong> {{from_email}}</p>
            <p><strong>📝 Asunto:</strong> {{subject}}</p>
            <p><strong>📅 Fecha:</strong> {{date}}</p>
        </div>
        
        <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280;">
            <p>Enviado desde tu portfolio web</p>
            <p><small>{{date}}</small></p>
        </div>
    </div>
</body>
</html>
```

### Variables Disponibles en el Template

- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Contenido del mensaje
- `{{date}}` - Fecha y hora del envío

## 🛠️ Solución de Problemas

### Error: "Invalid service ID"
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

### Error: "Invalid template ID"
- Verifica que el Template ID sea correcto
- Asegúrate de que el template esté publicado

### Error: "Invalid public key"
- Verifica que la Public Key sea correcta
- Asegúrate de que la key esté activa

### No recibes emails
- Verifica tu carpeta de spam
- Asegúrate de que el servicio de email esté configurado correctamente
- Revisa los logs en EmailJS dashboard

## 📊 Límites de la Cuenta Gratuita

- **200 emails/mes**
- **2 servicios de email**
- **2 templates**
- **1 dominio**

Para más emails, considera actualizar a un plan de pago.

## 🔒 Seguridad

- Nunca expongas tu Private Key
- Solo usa la Public Key en el frontend
- Considera implementar rate limiting para evitar spam

## 📞 Soporte

Si tienes problemas:
1. Revisa la [documentación oficial de EmailJS](https://www.emailjs.com/docs/)
2. Verifica los logs en tu dashboard de EmailJS
3. Asegúrate de que todas las variables de entorno estén configuradas correctamente