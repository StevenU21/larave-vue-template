# Laravel Vue Template

Plantilla base para iniciar nuevos proyectos con Laravel + Inertia + Vue. Está pensada para acelerar el arranque de proyectos modernos con TypeScript, Vite, Tailwind CSS y las configuraciones comunes (login, Breeze, modo claro/oscuro y estructura de carpetas). Incluye además soporte para empaquetado con NativePHP en caso de querer crear builds para Windows, Linux o macOS.

## Características principales

- Laravel 12.x (configuración lista para comenzar)
- Inertia.js + Vue.js (con TypeScript)
- Tailwind CSS 3.x
- Vite como bundler
- Axios para llamadas HTTP
- Laravel Breeze (autenticación básica, login/registro ya listos)
- Modo oscuro / claro integrado
- Estructura base de carpetas y ejemplos de componentes/ páginas
- Carpeta `nativephp/` con configuración para empaquetado nativo (Electron / NativePHP)
- Ejemplos y utilidades para desarrollo rápido

## Requisitos

- PHP compatible con Laravel 12.x
- Composer
- Node.js (v16+ recomendado) y npm o yarn
- Git (opcional)

## Estructura relevante del repo

- `app/` - código backend de Laravel
- `resources/js/` - código frontend (Inertia + Vue + TypeScript)
- `resources/css/` - estilos Tailwind
- `nativephp/` - configuración para empaquetado nativo (Electron / NativePHP)
- `routes/` - rutas de la aplicación
- `public/` - archivos públicos y assets compilados

## Instalación y puesta en marcha (Windows - PowerShell)

1. Clona el repositorio y entra en la carpeta del proyecto:

```powershell
git clone <repo-url> laravel-vue-template
cd laravel-vue-template
```

2. Instala dependencias PHP con Composer:

```powershell
composer install
```

3. Copia el archivo de entorno y genera la clave de aplicación:

```powershell
Copy-Item -Path .env.example -Destination .env
php artisan key:generate
```

4. Instala dependencias de Node y compila para desarrollo:

```powershell
npm install
npm run dev
```

5. Ejecuta el servidor de desarrollo de Laravel:

```powershell
php artisan serve
```

Abre tu navegador en http://127.0.0.1:8000 (o la dirección que indique `php artisan serve`).

## Scripts útiles (package.json)

- `npm run dev` — compila en modo desarrollo y levanta watcher de Vite
- `npm run build` — build para producción
- `npm run lint` — lint para JavaScript/TypeScript (si está configurado)

## Autenticación y Breeze

La plantilla incluye Laravel Breeze con vistas y rutas iniciales para registro, login, recuperación de contraseña y verificación de email. También hay ejemplos de integración con Inertia + Vue para las páginas de autenticación.

## Modo oscuro / claro

La base incluye utilidades para alternar entre tema claro y oscuro (Tailwind config + ejemplo de toggle en frontend). Revisa `resources/js` y las clases Tailwind en los componentes para ver la integración.

## Empaquetado nativo (NativePHP / Electron)

Si en el futuro quieres empaquetar la aplicación como aplicación de escritorio, la carpeta `nativephp/` contiene la configuración base (Electron, Vite + plugin y scripts). Pasos generales:

1. Revisa `nativephp/` y personaliza los archivos de `electron` y `electron.vite.config.mjs`.
2. Instala dependencias dentro de `nativephp/` y ejecuta los scripts de build allí.

Nota: el empaquetado nativo puede necesitar herramientas adicionales (electron-builder, firmas, etc.). Ver la documentación en `nativephp/` y la web de NativePHP/Electron.

## Tests

Se incluyen pruebas base con Pest / PHPUnit en `tests/`.

## Notas para desarrolladores

- Mantén actualizadas las versiones de Tailwind y Vite para aprovechar mejoras de rendimiento.
- Si añades paquetes npm, registra cualquier side-effect o cambio en `vite.config.js`.

## Licencia

Esta plantilla se distribuye bajo la licencia MIT — ajústala según tus necesidades.

---


