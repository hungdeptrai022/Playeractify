import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { auth, logout } from '../firebase';

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    // Voice search functionality remains the same
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirect to login after logout
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return (
    <div className='w-full flex justify-between items-center font-semibold'>
      {/* Navigation Arrows */}
      <div className='flex items-center gap-2'>
        <img 
          onClick={() => navigate(-1)} 
          className='w-8 bg-black p-2 rounded-2xl cursor-pointer' 
          src={assets.arrow_left} 
          alt="Back" 
        />
        <img  
          onClick={() => navigate(1)} 
          className='w-8 bg-black p-2 rounded-2xl cursor-pointer' 
          src={assets.arrow_right} 
          alt="Forward" 
        />
      </div>

      {/* Search Bar */}
      <div className='flex items-center gap-3'>
        <input
          className='bg-stone-800 text-center shadow-inner text-white focus:outline-none ml-2 rounded-2xl w-[max(10vw,250px)] h-[max(2vw,35px)] hover:bg-stone-700 focus:bg-stone-700'
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='What do you want to play?'
        />
        <img 
          className="w-6 cursor-pointer" 
          src={assets.search_icon} 
          alt="Search" 
        />
        <img 
          className="w-6 cursor-pointer" 
          onClick={handleVoiceSearch} 
          src={assets.micro_icon} 
          alt="Voice Search" 
        />
        {isListening && <p>Listening...</p>}
      </div>

      {/* User Options */}
      <div className='flex items-center gap-4'>
        {user ? (
          <>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>
              {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
            </p>
            <button 
              onClick={handleLogout}
              className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <p 
              onClick={() => navigate('/login')}
              className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'
            >
              Sign In
            </p>
            <p 
              onClick={() => navigate('/register')}
              className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'
            >
              Register
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
