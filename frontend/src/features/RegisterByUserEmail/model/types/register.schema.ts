export interface RegisterSchema {
    email: string;
    password: string;
    name: string;
    isLoading: boolean;
    error?: string
}