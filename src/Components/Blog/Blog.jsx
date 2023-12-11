import PropTypes from 'prop-types'
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmark}) => {
    const {title,cover_img, author, author_img, posted_date, hashtags, reading_time} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mt-4 mb-6 rounded-xl' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex p-2'>
                    <img className='w-14 h-14 mb-4' src={author_img}alt="" />
                    <div className='ml-6'>
                        <h3 className='text-lg mb-1'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                
                <div className='mt-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 '><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
            <h3 className='text-4xl'> {title}</h3>
            <p className='mt-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.function
}

export default Blog;