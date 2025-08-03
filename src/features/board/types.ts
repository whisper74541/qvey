export interface Board {
    id: number
    subject: string
    content: string
    userId: string
    generatedTime: string
    modifiedTime: string
}

export interface BoardListResponse {
    data: Board[]
    count: number
}

export interface BoardCreateDto {
    subject: string // 제목
    content: string // 본문
}
