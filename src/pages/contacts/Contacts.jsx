import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import TitleText from '../../components/misc/TitleText'
import Footer from '../../components/footer/Footer'

export default function Contacts() {
  return (
    <div>
        <Navbar/>
        <div className="flex">
          <div className="mb-20">
            <TitleText top="Contact" bottom="Information"/>
            <h1 className="ml-20 font-medium">Archtectr LTD</h1>
            <p className="ml-20 mb-5">1234 Sample Street Austin Texas 78704</p>
            <p className="ml-20 font-medium">081423457653</p>
            <p className="ml-20">janetdesign@gmail.com</p>
          </div>
          <img className="w-[800px] h-[400px] object-cover m-5" src="\assets\misc\placeholder_map.png" alt="" />
        </div>
        <Footer/>
    </div>
  )
}
