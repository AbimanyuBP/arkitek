import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import {projectList} from '../../misc/projectList';

export default function Hero() {

    const [clicked, useClicked] = useState(0);


  return (
    <div className="flex justify-center items-center">
        <div className="flex-[2]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[98px] text-slate-400 leading-[50px]">Project<br/><span className="text-[50px] text-black">{projectList[clicked].projectName}</span></h1>
            </div>
            <div className="mx-[94px] mt-16">
                <Stack spacing={2} direction="row">
                    <Button onClick={() => useClicked(clicked > 0 ? clicked - 1 : projectList.length-1)} variant="contained" sx={{backgroundColor: '#e2e2e2', "&:hover": {backgroundColor: "#818781"}}}><ArrowBackIcon className="text-[black]"/></Button>
                    <Button onClick={() => useClicked(clicked == projectList.length-1 ? 0 : clicked+1)} variant="contained" sx={{backgroundColor: '#e2e2e2', "&:hover": {backgroundColor: "#818781"}}}><ArrowForwardIcon className="text-[black]"/></Button>
                </Stack>
            </div>
            <div className="mx-[94px] mt-[90px]">
                <h1 className="text-[30px]">{clicked+1} <HorizontalRuleIcon sx={{fontSize: "50px", color: "gray"}} className="rotate-[-45deg]"/> {projectList.length}</h1>
            </div>
        </div>
        <div className="flex-[4]">
            <img src={projectList[clicked].imgUrl} className="w-[800px] h-[700px] object-cover" alt="" />
            <div className="bg-white cursor-pointer w-[200px] h-[50px] relative bottom-[50px] flex items-center">
                <h2 className="ml-[20px]">View Project <ArrowForwardIcon className="text-[black]" fontSize="small"/></h2>
            </div>
        </div>
    </div>
  )
}
