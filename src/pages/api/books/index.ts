// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Book, BookRequest } from '@/models/books';
import { client } from '@/services/https';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  data: Array<Book>;
  success: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { limit, page } = req.query
  const BookRequest: BookRequest = {
    limit: 0,
    page: 0,
    title: ''
  }
  const result: any = await client.get('/books');
  if (limit && page) {
    BookRequest.limit = Number(limit)
    BookRequest.page = Number(page)
  }
  const currentPage = --BookRequest.page
  const startItem = currentPage * BookRequest.limit
  const endItem = startItem + BookRequest.limit
  const paginationItems = result.data.slice(startItem, endItem)
  const bookData = []
  for (let i = 0; i < paginationItems.length; i++) {
    bookData.push(result.data[i])
  }
  res.status(200).json({ name: 'Hello', data: bookData, success: true });
}
