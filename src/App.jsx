import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    console.log(blog)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md: flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
