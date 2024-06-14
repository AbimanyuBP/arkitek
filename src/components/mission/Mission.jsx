import { Stack } from '@mui/material'
import React from 'react'

export default function Mission() {
  return (
    <div className="m-8">
        <h1 className="text-[50px] text-gray-500">Mission Statement</h1>
        <Stack direction="row" spacing={5} justifyContent="space-between" className="mt-2">
          <div className="flex items-center">
            <h1 className="text-[180px] text-gray-100 mr-4">1</h1>
            <p className="max-w-[500px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ad doloremque at labore asperiores sed voluptates sit neque expedita, nemo facere, itaque velit in animi veritatis ipsam nulla! Inventore, assumenda. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi delectus illum nobis esse accusamus nihil hic repellendus exercitationem fugit reprehenderit.</p>
          </div>
          <div className="flex items-center">
            <h1 className="text-[180px] text-gray-100 mr-4">2</h1>
            <p className="max-w-[500px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ad doloremque at labore asperiores sed voluptates sit neque expedita, nemo facere, itaque velit in animi veritatis ipsam nulla! Inventore, assumenda. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi delectus illum nobis esse accusamus nihil hic repellendus exercitationem fugit reprehenderit.</p>
          </div>
        </Stack>
    </div>
  )
}
