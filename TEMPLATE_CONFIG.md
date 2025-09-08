# 📧 Configuración del Template de EmailJS

## 🎯 Template Básico (Recomendado para empezar)

Copia y pega este template en EmailJS:

```
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

## 🎨 Template Avanzado (Con HTML y estilos)

Si quieres un email más profesional, usa este template HTML:

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
        </div>
    </div>
</body>
</html>
```

## 🔧 Variables Disponibles

El formulario envía automáticamente estas variables:

- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente  
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Contenido del mensaje
- `{{date}}` - Fecha y hora (formato: "15 de enero de 2024, 14:30")

## 📋 Pasos para Configurar

1. **Ve a tu dashboard de EmailJS**
2. **Selecciona "Email Templates"**
3. **Haz clic en "Create New Template"**
4. **Copia uno de los templates de arriba**
5. **Pega el template en el editor**
6. **Guarda el template**
7. **Copia el Template ID** (ej: `template_ez82hdt`)

## ✅ Verificación

Para verificar que todo funciona:

1. El template debe mostrar las variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{date}}`
2. El Template ID debe coincidir con el que tienes en tu `.env.local`
3. El template debe estar **publicado** (no en borrador)

## 🚨 Problemas Comunes

### El email llega vacío
- Verifica que las variables estén escritas exactamente como se muestran arriba
- Asegúrate de que el template esté publicado

### La fecha no aparece
- Verifica que `{{date}}` esté en el template
- El formulario envía la fecha automáticamente

### El nombre o email no aparecen
- Verifica que `{{from_name}}` y `{{from_email}}` estén en el template
- Asegúrate de que el formulario tenga los campos name y email

## 📞 Soporte

Si tienes problemas:
1. Verifica que el template esté publicado
2. Revisa que las variables estén escritas correctamente
3. Asegúrate de que el Template ID sea correcto
