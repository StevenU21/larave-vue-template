<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    laravelVersion: { type: String, required: true },
    phpVersion: { type: String, required: true },
});
</script>

<template>

    <Head title="Bienvenido a la plantilla" />
    <div
        class="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700">
        <div class="w-full max-w-3xl">
            <div
                class="rounded-3xl bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700 shadow-2xl p-8 sm:p-12 backdrop-blur-md animate-fade-in">
                <div class="flex flex-col items-center gap-4 mb-6">
                    <div
                        class="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-400 via-pink-400 to-purple-400 dark:from-red-600 dark:via-purple-700 dark:to-gray-700 shadow-lg animate-pop">
                        <i class="fa-solid fa-cubes text-white text-4xl"></i>
                    </div>
                    <h1
                        class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center tracking-tight">
                        Bienvenido a la plantilla de Laravel</h1>
                    <p class="mt-2 text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center">Plantilla base
                        para iniciar proyectos modernos con Laravel que integra <span
                            class="font-semibold text-purple-600 dark:text-purple-400">Inertia + Vue</span>, <span
                            class="font-semibold text-blue-600 dark:text-blue-400">Tailwind CSS</span> y <span
                            class="font-semibold text-green-600 dark:text-green-400">TypeScript</span>. Revisa el <span
                            class="font-medium underline">README</span> para más detalles.</p>
                </div>
                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <h3 class="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-widest">
                            Tecnologías incluidas</h3>
                        <ul class="mt-2 space-y-3 text-gray-700 dark:text-gray-300">
                            <li class="flex items-center gap-3 group"><i
                                    class="fa-brands fa-laravel w-6 text-red-500 group-hover:scale-110 transition-transform"
                                    aria-hidden="true"></i> <span class="font-semibold">Laravel</span> (configurado para
                                empezar)</li>
                            <li class="flex items-center gap-3 group"><i
                                    class="fa-brands fa-vuejs w-6 text-green-500 group-hover:scale-110 transition-transform"
                                    aria-hidden="true"></i> <span class="font-semibold">Inertia + Vue 3</span>
                                (TypeScript)</li>
                            <li class="flex items-center gap-3 group"><i
                                    class="fa-solid fa-code w-6 group-hover:text-blue-500 transition-colors"
                                    aria-hidden="true"></i> <span class="font-semibold">TypeScript</span> y Vite</li>
                            <li class="flex items-center gap-3 group"><i
                                    class="fa-solid fa-palette w-6 group-hover:text-pink-500 transition-colors"
                                    aria-hidden="true"></i> <span class="font-semibold">Tailwind CSS</span> (modo
                                claro/oscuro listo)</li>
                        </ul>
                    </div>
                    <div class="space-y-4">
                        <h3 class="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-widest">Extras
                            útiles</h3>
                        <ul class="mt-2 space-y-3 text-gray-700 dark:text-gray-300">
                            <li class="flex items-center gap-3 group"><i
                                    class="fa-solid fa-file-lines w-6 group-hover:text-yellow-500 transition-colors"
                                    aria-hidden="true"></i> <span class="font-semibold">Axios</span> para llamadas HTTP
                            </li>
                            <li class="flex items-center gap-3 group"><i
                                    class="fa-solid fa-lock w-6 group-hover:text-blue-700 transition-colors"
                                    aria-hidden="true"></i> <span class="font-semibold">Laravel Breeze</span> ya
                                integrado (auth básica)</li>
                            <li class="flex items-center gap-3 group"><i
                                    class="fa-solid fa-desktop w-6 group-hover:text-purple-700 transition-colors"
                                    aria-hidden="true"></i> Soporte de empaquetado nativo en <span
                                    class="font-medium">nativephp/</span> (Electron)</li>
                            <li class="flex items-center gap-3 group"><i
                                    class="fa-solid fa-book w-6 group-hover:text-green-700 transition-colors"
                                    aria-hidden="true"></i> Más info en <span class="font-medium">README.md</span></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <a href="https://github.com/StevenU21" target="_blank"
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 shadow transition-all duration-200 animate-fade-in-up">
                            <i class="fa-brands fa-github text-xl"></i>
                            <span class="text-base font-bold">StevenU21</span>
                        </a>
                        <Link href="/login"
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg transition-all duration-200 animate-fade-in-up">
                        <i class="fa-solid fa-right-to-bracket text-xl"></i>
                        <span class="text-base font-bold">Iniciar sesión</span>
                        </Link>
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-right">Versión Laravel:
                        <span class="font-bold text-blue-600 dark:text-blue-400">{{ laravelVersion }}</span> · PHP:
                        <span class="font-bold text-green-600 dark:text-green-400">{{ phpVersion }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes fade-in {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-in-up {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pop {
    0% {
        transform: scale(0.7);
        opacity: 0;
    }

    80% {
        transform: scale(1.1);
        opacity: 1;
    }

    100% {
        transform: scale(1);
    }
}

.animate-fade-in {
    animation: fade-in 0.8s cubic-bezier(.4, 0, .2, 1) both;
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s cubic-bezier(.4, 0, .2, 1) both;
}

.animate-pop {
    animation: pop 0.7s cubic-bezier(.4, 0, .2, 1) both;
}
</style>
