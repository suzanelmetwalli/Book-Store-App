import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from '../../Store/bookSlice';

export default function AddForm() {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector((state)=> state.author);
  // refs
 const title = useRef(null);
 const price = useRef(null);
 const desc = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      desc: desc.current.value,
    }
    dispatch(insertBook(data));
    title.current.value = null;
    price.current.value = null;
    desc.current.value = null;
  }

  return (
    <div className='d-flex justify-content-center align-items-center py-5 border-bottom' >
      <div className=' w-50'>
        <h3>Insert Book</h3>
        <form onSubmit={handleSubmit} >
          <label htmlFor="title">Title</label>
          <input type="text" className='form-control mb-3 mt-2' id='title' ref={title} required/>
          <label htmlFor="price">Price</label>
          <input type="number" className='form-control mb-3 mt-2' id='price' ref={price} required/>
          <label htmlFor="desc">Description</label>
          <textarea name="" id="desc" rows="3"className='form-control mb-3 mt-2' ref={desc} required></textarea>
          <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}> Submit</button>
        </form>
      </div>
    </div>
  )
}
