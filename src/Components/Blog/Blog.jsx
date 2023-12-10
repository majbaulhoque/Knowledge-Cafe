import PropTypes from 'prop-types'

const Blog = ({blog}) => {
    const {title,cover_img, author, author_img, posted_date, hashtags, reading_time} = blog;
    return (
        <div>
            <img className='w-[885px]' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex p-2'>
                    <img className='w-14 h-14' src={author_img}alt="" />
                    <div className='ml-6'>
                        <h3 className='text-lg'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h3 className='text-4xl'> {title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;