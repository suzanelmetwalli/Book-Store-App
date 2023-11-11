import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logInOut } from '../../Store/authSlice'; 
export default function Header() {
  const {error} = useSelector((state)=> state.books);
  const {isLoggedIn} = useSelector((state)=> state.author);
  const dispatch = useDispatch();

  return (
    <>
   {error && <div className='alert alert-danger mb-0 p-2'>{error}</div> }
   {/* or */}
   {/* {error ? <div className='alert alert-danger mb-0'>{error}</div> :''} */}
    <div className='d-flex justify-content-between align-items-center bg-main p-2'>
    <h3 className="logo text-white">My Books</h3>
    <button className='btn btn-outline-primary' onClick={()=> dispatch(logInOut())}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    </div>
    </>
  )
}
