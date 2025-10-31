import axios, { AxiosInstance } from 'axios';

declare global {
    interface Window {
        axios: AxiosInstance;
    }
}

// Base URL configurable vía Vite env
const baseURL = (import.meta.env.VITE_API_BASE_URL as string) ?? window.location.origin;

export const http: AxiosInstance = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    // Si tu API usa cookies/sesiones, habilita esto
    withCredentials: true,
});

// CSRF token desde meta tag (Laravel)
const token = document.head?.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
if (token) {
    http.defaults.headers.common['X-CSRF-TOKEN'] = token;
}

// Interceptor básico: puedes extender según tus necesidades
http.interceptors.response.use(
    (response) => response,
    (error) => {
        // Ejemplo: redirigir en 401 (no autenticado)
        if (error?.response?.status === 401) {
            // Si usas Inertia, podrías usar Inertia.visit('/login') aquí
        }
        return Promise.reject(error);
    },
);

// Mantener compatibilidad global si otros scripts esperan window.axios
(window as unknown as Window).axios = http;

export default http;
