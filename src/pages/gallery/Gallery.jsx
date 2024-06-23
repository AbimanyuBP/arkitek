import Footer from '../../components/footer/Footer'
import TitleText from '../../components/misc/TitleText'
import Navbar from '../../components/navbar/Navbar'
import project1 from "/assets/projects/project_1.png"
import project2 from "/assets/projects/project_2.jpg"
import project3 from "/assets/projects/project_3.jpg"
import project4 from "/assets/projects/project_4.jpg"
import project5 from "/assets/projects/project_5.jpg"
import project6 from "/assets/projects/project_6.jpg"
import project7 from "/assets/projects/project_7.jpg"
import project8 from "/assets/projects/project_8.jpg"
import project9 from "/assets/projects/project_9.jpg"
import project10 from "/assets/projects/project_10.jpg"
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Stack from '@mui/material/Stack'
import { projectList } from '../../misc/projectList'

export default function Gallery() {
  const images = projectList

  return (
    <div>
        <Navbar/>
        <TitleText top="Photo" bottom="Gallery"/>
        <Box className=" m-20 flex justify-center">
            <ImageList cols={5} gap={8}>
                {images.map((item) => (
                    <ImageListItem key={item.imgUrl}  className="cursor-pointer">
                        <img src={item.imgUrl} alt={"Project " + item.projectName}/>
                        <ImageListItemBar
                            title={"Project " + item.projectName}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
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
