import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBooks } from '@/features/book/api/bookApi';
import type { Book } from '@/features/book/types';

export const BookList: React.FC = () => {
  const { data, isLoading, error } = useQuery<Book[], Error>({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });

  if (isLoading) return <p>불러오는 중...</p>;
  if (error)      return <p>오류 발생: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {data!.map((book: Book) => (
        <div key={book.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="mt-2">{book.description}</p>
        </div>
      ))}
    </div>
  );
};
