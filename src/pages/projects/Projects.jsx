import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import TitleText from '../../components/misc/TitleText'
import ButtonPlain from '../../components/misc/ButtonPlain'
import Button from '@mui/material/Button';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Stack from '@mui/material/Stack'
import { projectList } from '../../misc/projectList';
import { useState } from 'react';

function ProjectCard({namaewa, desc, imgLink}){
    return(
        <div className="flex m-10 *:m-5">
            <img className="w-[550px] h-[400px] object-cover" src={imgLink}/>
            <div className=" *:mb-10">
                <h1 className="text-[35px] text-gray-300">{"Project "+namaewa}</h1>
                <p className="max-w-[500px]">{desc}</p>
                <ButtonPlain text="View More" buttonProp="bg-white hover:bg-slate-200" buttonTextProp="text-black"/>
            </div>
        </div>
    )
}

export default function Projects() {
    const [clicked, useClicked] = useState(0);
    const [start , useStart] = useState(0);
    const [end, useEnd] = useState(5);
    
    function setter(clickedVal, startVal, endVal){
        if(clickedVal >= projectList.length/5){
            useClicked(0);
            useStart(0);
            useEnd(5);
        }
        else{
            if(clickedVal < 0){
                useClicked((projectList.length/5)-1);
                useStart(start+5);
                useEnd(end+5);
            }
            else{
                useClicked(clickedVal);
                useStart(startVal);
                useEnd(endVal);
            }
        }
    }

  return (
    <div>
        <Navbar/>
        <TitleText top="Our" bottom="Projects"/>
        {projectList.slice(start, end).map((project) => (
                <ProjectCard namaewa={project.projectName} desc={project.projectOverview} imgLink={project.imgUrl}/>
                ))}
        <div className="flex *:ml-20 *:my-10">
          <div className="">
              <h1 className="text-[30px]">{clicked+1} <HorizontalRuleIcon sx={{fontSize: "50px", color: "gray"}} className="rotate-[-45deg]"/> {projectList.length/5}</h1>
          </div>
          <div className="">
                <Stack spacing={2} direction="row">
                    <Button onClick={() => {setter(clicked-1, start-5, end-5)}} variant="contained" sx={{backgroundColor: '#e2e2e2', "&:hover": {backgroundColor: "#818781"}}}><ArrowBackIcon className="text-[black]"/></Button>
                    <Button onClick={() => {setter(clicked+1, start+5, end+5)}} variant="contained" sx={{backgroundColor: '#e2e2e2', "&:hover": {backgroundColor: "#818781"}}}><ArrowForwardIcon className="text-[black]"/></Button>
                </Stack>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
