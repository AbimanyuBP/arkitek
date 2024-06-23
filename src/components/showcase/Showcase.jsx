import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import project1 from "/assets/projects/project_1.png"
import project2 from "/assets/projects/project_2.jpg"
import project3 from "/assets/projects/project_3.jpg"
import project4 from "/assets/projects/project_4.jpg"
import project5 from "/assets/projects/project_5.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ButtonPlain from "../misc/ButtonPlain"
import { Link } from "react-router-dom"
import { projectList } from "../../misc/projectList"


export default function Showcase() {

  return (
    <div className="my-5 mx-20">
        <div className="flex justify-end mb-5">
            <h1 className="text-[50px] text-gray-500">Our Projects</h1>
        </div>
        <Box>
            <ImageList variant="masonry" cols={3} gap={8}>
                {projectList.slice(0-5).map((item) => (
                    <ImageListItem key={item.imgUrl}  className="cursor-pointer hover:animate-growabit ">
                        <img src={item.imgUrl} alt={item.projectName}/>
                        <ImageListItemBar
                            title={item.projectName}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
        <div className="flex justify-end mt-5">
            <Link to={'/projects'}><ButtonPlain text="Read More" buttonProp="bg-gray-600 hover:bg-slate-800" buttonTextProp="text-white"/></Link>
        </div>
    </div>
  )
}
