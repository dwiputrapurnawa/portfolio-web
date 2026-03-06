export interface Project {
    title: string;
    description: string;
    client: string;
    image: string;
}

export interface Message {
    id: number,
    name: string,
    email: string,
    message: string,
    created_at: string,
    updated_at: string
}

export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
}