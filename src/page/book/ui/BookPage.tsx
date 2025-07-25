import React from 'react';
import { BookList } from '@/features/book/ui';

export const BookPage: React.FC = () => (
  <main className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-6">📚 문제집 목록</h1>
    <BookList />
  </main>
);