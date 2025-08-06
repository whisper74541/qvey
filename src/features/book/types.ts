export interface Book {
    id: number
    title: string
    description: string
}

export interface BookListResponse {
    data: Book[]
    count: number
}
