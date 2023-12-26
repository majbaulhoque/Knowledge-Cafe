import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex max-w-7xl mx-auto justify-between p-4 items-center border-b-2'> 
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img className='items-center' src={profile} alt="" />
        </div>
    );
};

export default Header;