import React from 'react'

export default function TitleText({top, bottom}) {
  return (
    <div className="m-20">
        <h1 className="text-[50px] text-gray-300 leading-[20px]">{top}</h1>
        <h1 className="text-[50px] font-medium">{bottom}</h1>
    </div>
  )
}
