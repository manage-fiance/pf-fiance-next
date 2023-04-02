import { client } from "@/services/https";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const {id} = req.query    
    const result = await client.get(`/books/${id}`)
    res.status(200).json({
        success: true,
        data: result.data
    })
}