import PropTypes from 'prop-types'
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover_img, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='h-14 w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddToBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;