import axiosInstance from '@/shared/api/axios'
import { BOARD_API } from '@/shared/config/apiRoutes'
import type { Board, BoardListResponse, BoardCreateDto } from '../types'

/**
 * 전체 게시글 목록 조회
 * BoardPostListResponse 에서 .data만 꺼내서 BoardPost[]로 반환
 */
export const fetchBoards = async (): Promise<Board[]> => {
    const { data } = await axiosInstance.get<BoardListResponse>(BOARD_API)
    return data.data
}

/**
 * 게시글 등록 API
 */
export const createBoard = async (newPost: BoardCreateDto): Promise<Board> => {
    const { data } = await axiosInstance.post(BOARD_API, newPost)
    return data.data
}
