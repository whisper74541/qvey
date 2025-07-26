import axiosInstance from '@/shared/api/axios';
import { BOOKS_API } from '@/shared/config/apiRoutes';
import type { Book, BookListResponse } from '../types';

/**
 * 전체 책 목록 조회 함수
 * BookListResponse 에서 .data만 꺼내서 Book[]로 반환
 */
export const fetchBooks = async (): Promise<Book[]> => {
  const { data } = await axiosInstance.get<BookListResponse>(BOOKS_API);
  return data.data;
};