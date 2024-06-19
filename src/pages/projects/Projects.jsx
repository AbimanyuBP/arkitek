import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import TitleText from '../../components/misc/TitleText'
import ButtonPlain from '../../components/misc/ButtonPlain'
import Button from '@mui/material/Button';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Stack from '@mui/material/Stack'

function ProjectCard(){
    return(
        <div className="flex m-10 *:m-5">
            <img className="w-[550px] h-[400px] object-cover" src="\assets\projects\project_1.png"/>
            <div className=" *:mb-10">
                <h1 className="text-[35px] text-gray-300">Sample Project</h1>
                <p className="max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ducimus architecto illum quidem officia veniam inventore alias quibusdam labore, dolorum quisquam similique, vitae et officiis recusandae odio consequatur? Voluptate, aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laudantium eius, corrupti numquam aliquam amet rerum quod quos id natus, adipisci veritatis repudiandae? Vitae modi exercitationem consequuntur, libero tempora consectetur!</p>
                <ButtonPlain text="View More" buttonColor="bg-white" buttonTextColor="text-black"/>
            </div>
        </div>
    )
}

export default function Projects() {
  return (
    <div>
        <Navbar/>
        <TitleText top="Our" bottom="Projects"/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <div className="flex *:ml-20 *:my-10">
          <div className="">
              <h1 className="text-[30px]">1 <HorizontalRuleIcon sx={{fontSize: "50px", color: "gray"}} className="rotate-[-45deg]"/> 4</h1>
          </div>
          <div className="">
                <Stack spacing={2} direction="row">
                    <Button variant="contained" sx={{backgroundColor: '#e2e2e2', "&:hover": {backgroundColor: "#818781"}}}><ArrowBackIcon className="text-[black]"/></Button>
                    <Button variant="contained" sx={{backgroundColor: '#e2e2e2', "&:hover": {backgroundColor: "#818781"}}}><ArrowForwardIcon className="text-[black]"/></Button>
                </Stack>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
