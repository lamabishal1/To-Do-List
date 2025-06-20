import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {

    const handleForm = (event) => {
        event.preventDefault();
        console.log(event.target)
    }
  return (
    <>
    <div className='flex flex-col gap-4 justify-center items-center h-[500px]'>
    <div className="" >
        Signup Form</div>

    <form onSubmit={handleForm} className='flex flex-col gap-y-4 justify-center bg-white p-4 rounded shadow-md'>
    <div >
    <label> Name:
        <input className='mx-2' type='text' name='name' placeholder='Enter name... '/>
    </label>
    </div>
        <div>
            <label> Email:
        <input className='mx-2' type='email' name='email' placeholder='Enter email... '/>
    </label>
    </div>
    <div>
        <label>Gender:</label>
        <select name="gender" className='mx-2' >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>
    <div className='flex gap-2'>
        <label >Country:</label>
        <input type="radio" name='country' value="Japan" /> Japan
        <input type="radio" name='country' value="Outside"/> Outside Japan
    </div>
    <div>
    <Link to='/submit'> <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Submit</button></Link>
        </div>
    </form>
</div>
        </>
  )
}

export default Form