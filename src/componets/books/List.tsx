import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import useSWR from 'swr'
import {
    get
} from '../../services/api'
import { Box, Grid } from '@mui/material'
import { Book } from '@/models/books'
import { useRouter } from 'next/router'
import BookBlock from './Block'

type ListBookProps = {
    limit?: number,
    page?: number,
    onFetchSuccess: (arg: boolean) => void
}

const getBooksData = async (url: string) => {
    const data = await get(url)
    return data
}

export default function ListBooks({limit, page, onFetchSuccess}: ListBookProps) {
    const router = useRouter()
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getBooksData(`/api/books?limit=${limit}&page=${page}`).then(res => {
            if (res.success) {
                setBooks(res.data?.data)
                onFetchSuccess(false)
            }
        }).catch()

        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <Box className='books' sx={{
            mb: 16
        }}>
            <Grid spacing={6} container>
                {books.map((item: Book) =>
                    <BookBlock item={item} loading={loading} key={item.id}/>
                    )
                }
            </Grid>

        </Box>
    )
}
