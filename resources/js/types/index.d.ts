export interface AppPageProps {
    auth?: {
        user?: {
            id: number;
            name: string;
            email?: string;
        } | null;
    };
    flash?: {
        message?: string;
    } | null;
    errors?: Record<string, string[]>;
}

export { };
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
