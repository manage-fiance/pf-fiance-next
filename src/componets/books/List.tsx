import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import useSWR from 'swr'
import {
    get
} from '../../services/api'
import { Grid } from '@mui/material'
import { Book } from '@/models/books'
import { useRouter } from 'next/router'
import BookBlock from './Block'

type ListBookProps = {
    limit?: number,
    page?: number
}

const getBooksData = async (url: string) => {
    const data = await get(url)
    return data
}

export default function ListBooks({limit, page}: ListBookProps, props: React.ReactNode) {
    const router = useRouter()
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getBooksData(`/api/books?limit=${limit}&page=${page}`).then(res => {
            if (res.success) {
                setBooks(res.data?.data)
            }
        }).catch()

        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <div className='books'>
            <Grid spacing={6} container>
                {books.map((item: Book) =>
                    <BookBlock item={item} loading={loading} key={item.id}/>
                    )
                }
            </Grid>

        </div>
    )
}
