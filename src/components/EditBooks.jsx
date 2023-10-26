import React, { useState, useEffect } from 'react'
import BackButton from './BackButton'
import Spinner from './Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBooks = () => {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  const handleSaveBook = () => {
    setLoading(true)
    const book = {
      title, author, publishYear
    }
    axios.put(`http://localhost:8000/api/books/update/${id}`, book)
      .then((res) => {
        console.log(res)
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        console.log("error adding new book", error)
      })
  }

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8000/api/books/${id}`)
      .then((res) => {
        console.log(res.data.book)
        setTitle(res.data.book[0].title)
        setAuthor(res.data.book[0].author)
        setPublishYear(res.data.book[0].publishYear)
        setLoading(false)
      })
      .catch((error) => {
        console.log("error editing book", error)
      })
  }, [])

  return (
    <div>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit book</h1>
      {
        loading ? <Spinner /> : ''
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4 text-gray-400'>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 py-2 px-2 w-full' />
        </div>
        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4 text-gray-400'>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 py-2 px-2 w-full' />
        </div>
        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4 text-gray-400'>Publish Year</label>
          <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-gray-500 py-2 px-2 w-full' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBooks