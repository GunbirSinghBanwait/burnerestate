import { FaSearch } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-extrabold text-2xl sm:text-3xl text-teal-500 transition-all duration-300'>
            <span className='text-teal-500'>Burner</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center transition-all duration-300'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 text-slate-700'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='text-slate-700 hover:text-teal-500 transition-all duration-300'>
            <FaSearch />
          </button>
        </form>
        <ul className='flex gap-4'>
          <NavLink
            to='/'
            exact
            activeClassName='text-teal-500 font-bold text-lg transition-all duration-300'
            className='transition-all duration-300'
          >
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='text-teal-500 font-bold text-lg transition-all duration-300'
            className='transition-all duration-300'
          >
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </NavLink>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover border-2 border-teal-500'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-slate-700 hover:underline transition-all duration-300'>
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
