import React from 'react'

const Note = () => {
  return (
    <div className='mt-5'>
        <div className="flex">
            <div className="w-7 bg-red-500 my-3 mr-5"></div>
            <p className=' text-lg text-white my-3'>Ghế đã được đặt</p>
        </div>

        <div className="flex">
            <div className="w-7 bg-white border border-gray-500 my-3 mr-5"></div>
            <p className=' text-lg text-white my-3'>Ghế còn trống</p>
        </div>

        <div className="flex">
            <div className="w-7 bg-green-500 my-3 mr-5"></div>
            <p className=' text-lg text-white my-3'>Ghế đang được đặt</p>
        </div>  
    </div>
  )
}

export default Note