export interface Project {
    id: number,
    title: string,
    description: string,
    client: string,
    project_url: string,
    slug: string,
    image?: string,
    created_at: string,
    updated_at: string
}

export interface Message {
    id: number,
    name: string,
    email: string,
    message: string,
    created_at: string,
    updated_at: string
}