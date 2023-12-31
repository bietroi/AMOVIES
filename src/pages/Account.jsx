import React from 'react'
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className=" w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/96abfe55-c1a4-4420-8442-9a360b3ad96d/VN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className="bg-black/60 fixed top-0  left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account;