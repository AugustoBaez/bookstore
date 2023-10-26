import { useState, useEffect } from 'react'
import Spinner from "./Spinner"
import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import axios from 'axios'
import BooksCard from './BooksCard'
import BooksTable from './BooksTable'

export const Homepage = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowType] = useState('table')

    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                setBooks(res.data.book)
                setLoading(false)
            })
            .catch((error) => {
                console.log("error fetching books", error)
                setLoading(false)
            })
    }, [])

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('table')}>Table</button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('card')}>Card</button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books list</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {/* {
                loading ? (
                    <Spinner />
                ) : (
                    <BooksTable books={books} />
                )
            } */}
            {
                loading ? <Spinner /> : showType == 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)
            }
        </div>
    )

}