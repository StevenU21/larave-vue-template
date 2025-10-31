<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    laravelVersion: { type: String, required: true },
    phpVersion: { type: String, required: true },
});
</script>

<template>

    <Head title="Bienvenido a la plantilla" />

    <div class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center p-6">
        <div class="w-full max-w-3xl">
            <div
                class="rounded-2xl bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-10">
                <div class="flex items-center gap-4">
                    <div class="text-4xl text-red-500 dark:text-red-400">
                        <!-- Laravel brand icon not guaranteed in free pack; use a generic stack icon -->
                        <i class="fa-solid fa-cubes"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">Bienvenido a la
                            plantilla de Laravel</h1>
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Plantilla base para iniciar proyectos
                            modernos con Laravel que integra Inertia + Vue, Tailwind CSS y TypeScript. Revisa el <span
                                class="font-medium">README</span> para más detalles.</p>
                    </div>
                </div>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-3">
                        <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase">Tecnologías
                            incluidas</h3>
                        <ul class="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                            <li class="flex items-center gap-2"><i class="fa-brands fa-laravel w-5 text-red-500"
                                    aria-hidden="true"></i> Laravel (configurado para empezar)</li>
                            <li class="flex items-center gap-2"><i class="fa-brands fa-vuejs w-5 text-green-500"
                                    aria-hidden="true"></i> Inertia + Vue 3 (TypeScript)</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-code w-5" aria-hidden="true"></i>
                                TypeScript y Vite</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-palette w-5"
                                    aria-hidden="true"></i> Tailwind CSS (modo claro/oscuro listo)</li>
                        </ul>
                    </div>

                    <div class="space-y-3">
                        <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase">Extras útiles</h3>
                        <ul class="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                            <li class="flex items-center gap-2"><i class="fa-solid fa-file-lines w-5"
                                    aria-hidden="true"></i> Axios para llamadas HTTP</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-lock w-5" aria-hidden="true"></i>
                                Laravel Breeze ya integrado (auth básica)</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-desktop w-5"
                                    aria-hidden="true"></i> Soporte de empaquetado nativo en <span
                                    class="font-medium">nativephp/</span> (Electron)</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-book w-5" aria-hidden="true"></i>
                                Más info en <span class="font-medium">README.md</span></li>
                        </ul>
                    </div>
                </div>

                <div class="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <a href="https://github.com/StevenU21" target="_blank"
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 transition">
                            <i class="fa-brands fa-github"></i>
                            <span class="text-sm font-semibold">StevenU21</span>
                        </a>
                        <Link href="/login"
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        <span class="text-sm font-semibold">Iniciar sesión</span>
                        </Link>
                    </div>

                    <div class="text-xs text-gray-500 dark:text-gray-400">Versión Laravel: <span class="font-medium">{{
                            laravelVersion }}</span> · PHP: <span class="font-medium">{{ phpVersion }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Scoped styles can be extended here if needed */
</style>
