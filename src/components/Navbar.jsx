import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Navbar = () => {

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }



  // console.log(user.email)
  return (
    <div className="text-white flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to='/'>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">AMOVIES</h1>
      </Link>
      {user?.email ?

        <div>
          <Link to='/account'>
            <button className="pr-4 duration-500 hover:scale-105">Account</button>
          </Link>

          <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer duration-500 hover:scale-105">Logout</button>


        </div>
        :

        <div>
          <Link to='/login'>
            <button className="pr-4 duration-500 hover:scale-105">Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer duration-500 hover:scale-105">Sign Up</button>
          </Link>

        </div>}
    </div>
  )
}

export default Navbar;