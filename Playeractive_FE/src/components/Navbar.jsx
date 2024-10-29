import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isListening, setIsListening] = useState(false);
   
    
    const handleVoiceSearch = () => {
        if (!('webkitSpeechRecognition' in window)) {
          alert('Trình duyệt của bạn không hỗ trợ tìm kiếm bằng giọng nói');
          return;
        }
    
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'vi-VN'; // Đặt ngôn ngữ tiếng Việt
        recognition.continuous = false; // Dừng nhận diện khi dừng nói
        recognition.interimResults = false;
    
        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setSearchQuery(transcript);
          console.log('Kết quả nhận diện:', transcript);
        };
    
        recognition.start();
      };
  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
            </div>
            <div className='flex items-center gap-3 flex-row'>
                    <input className='bg-stone-800 text-center shadow-inner  text-white focus:outline-none ml-2 rounded-2xl  w-[max(10vw,250px)] h-[max(2vw,35px)] hover:bg-stone-700 focus:bg-stone-700' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='What do you want to play' />
                    <img  className="w-6 cursor-pointer" src={assets.search_icon}   alt="" />
                    <img  className="w-6 cursor-pointer" onClick={handleVoiceSearch} src={assets.micro_icon} alt="" /> {isListening && <p>Listening...</p>}
            </div>
            <div className='flex items-center gap-4'>
                <p  className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Log in</p>
                <p  className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Register</p>
                <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>Q</p>
            </div>
        </div>
        {/* <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Song</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Artist</p>
        </div> */}
    </>
  )
}

export default Navbar