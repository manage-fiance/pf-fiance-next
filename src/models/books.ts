export type Book = {
    created_at: string,
    name: string,
    avatar: string,
    description: string,
    short_description: string,
    id: number,
    rating: string
}

export type BookRequest = {
    limit: number,
    page: number,
    title: string
}