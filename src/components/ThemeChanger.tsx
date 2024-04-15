'use client';

import { useTheme } from 'next-themes'


function ThemeChanger() {

  const { theme, setTheme } = useTheme()

  return (

    <>
      {
        theme === "light" ?
          <button onClick={() => setTheme('dark')} className=' h-full flex items-center' type="button" aria-label="search"  > <i className='bx bxs-moon' ></i> </button>
          :
          <button onClick={() => setTheme('light')} className=' h-full flex items-center' type="button" aria-label="search"  > <i className='bx bxs-sun' ></i> </button>
      }
    </>
  )
}

export default ThemeChanger