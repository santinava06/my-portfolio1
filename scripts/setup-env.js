#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Configurando variables de entorno para EmailJS...\n');

// Verificar si .env.local ya existe
const envPath = path.join(process.cwd(), '.env.local');
const envExamplePath = path.join(process.cwd(), 'env.example');

if (fs.existsSync(envPath)) {
  console.log('✅ .env.local ya existe');
  console.log('📝 Contenido actual:');
  console.log(fs.readFileSync(envPath, 'utf8'));
} else {
  console.log('📝 Creando .env.local desde env.example...');
  
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ .env.local creado exitosamente');
    console.log('⚠️  Recuerda actualizar las credenciales con tus valores reales de EmailJS');
  } else {
    console.log('❌ env.example no encontrado');
    process.exit(1);
  }
}

console.log('\n📋 Próximos pasos:');
console.log('1. Edita .env.local con tus credenciales reales de EmailJS');
console.log('2. Reinicia tu servidor de desarrollo: npm run dev');
console.log('3. Prueba el formulario de contacto');
console.log('\n📚 Para más información, consulta:');
console.log('- EMAILJS_SETUP.md');
console.log('- DEPLOYMENT.md');
