import { Book } from '@/models/books'
import { get } from '@/services/api'
import { Grid } from '@mui/material'

import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const fetchBookDetail = async (id: any) => {
    const bookDetailResp = await get(`/books/${id}`)
    if (bookDetailResp.success) bookDetailResp.data
}

export default function BookDetail() {
    const router = useRouter()
    const { id } = router.query
    const [book, setBook] = useState<Book>()
    useEffect(() => {
        fetchBookDetail(id).then((res) => {
        }).catch(e => {
        })
    }, [])
    return (
        <Grid container>
            <Grid item xs={8}></Grid>
            <Grid></Grid>
        </Grid>
    )
}
