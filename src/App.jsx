import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks)
  }

  const handleMarkAsRead = (id, time) =>{
    setReadingTime(readingTime + time);
    // ! Remove the blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md: flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
