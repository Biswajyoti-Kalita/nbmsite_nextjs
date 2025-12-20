'use client';

import { useEffect, useState } from 'react';

export default function WelcomeToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the toast has been dismissed before
    const checkCookie = () => {
      if (typeof document !== 'undefined') {
        const cookies = document.cookie.split(';');
        const welcomeToastDismissed = cookies.find(cookie => 
          cookie.trim().startsWith('welcomeToastDismissed=')
        );
        return welcomeToastDismissed !== undefined;
      }
      return false;
    };

    // Only show if not dismissed
    if (!checkCookie()) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    // Set cookie to remember dismissal (expires in 10 year)
    if (typeof document !== 'undefined') {
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 10);
      document.cookie = `welcomeToastDismissed=true; expires=${expiryDate.toUTCString()}; path=/`;
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed -bottom-1 left-0 right-0 mx-auto z-[999] animate-fade-in transition-all duration-300">
      <div className="bg-[#262626] shadow-lg px-4 py-3 md:px-6 md:py-4 flex flex-col items-center gap-4 w-full">
        <div>
            <h1 className='text-[#D0FF3C] text-2xl md:text-4xl font-bold text-center'>Same company. New name.</h1>
            <h5 className='text-sm md:text-base text-white text-center'>Next Audio <span className='text-[#9e9e9e]'>is the new name and digital experience for </span>Next Broadcast Media. <span className='text-[#9e9e9e]'>Welcome</span  ></h5>
        </div>
        <button
          onClick={handleClose}
          className="cursor-pointer w-[100px] h-[30px] text-lg font-semibold flex items-center justify-center rounded-md text-[#FFEDFB] border border-[#FFEDFB] transition-colors"
          aria-label="Close toast"
        >
            Got it
        </button>
      </div>
    </div>
  );
}

