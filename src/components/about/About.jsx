import { ArrowForward } from '@mui/icons-material'
import React from 'react'

export default function About() {
  return (
    <div className="flex justify-center items-center">
        <div className="bg-slate-300">
            <div className=""></div>
            <div className="">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis</p>
                <div className="">
                    <h2>Read More <ArrowForward/></h2>
                </div>
            </div>
        </div>
    </div>
  )
}
