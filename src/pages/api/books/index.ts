// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Book } from '@/models/books'
import { client } from '@/services/https'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  data: Array<Book>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result: any = await client.get("/books")
  res.status(200).json({name: "Hello", data: result.data})
}
