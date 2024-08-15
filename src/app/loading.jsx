"use client"
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <RotatingLines 
            visible={true}
            height="48"
            width="48"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
        </div>
    )
}

export default loading