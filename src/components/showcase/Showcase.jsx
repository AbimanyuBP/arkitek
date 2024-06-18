import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import project1 from "/assets/projects/project_1.png"
import project2 from "/assets/projects/project_2.jpg"
import project3 from "/assets/projects/project_3.jpg"
import project4 from "/assets/projects/project_4.jpg"
import project5 from "/assets/projects/project_5.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ButtonPlain from "../misc/ButtonPlain"


export default function Showcase() {
    const images = [
        {
            img: project1,
            title: "Project Aulum"
        },
        {
            img: project2,
            title: "Project Navaro"
        },
        {
            img: project3,
            title: "Project Merry"
        },
        {
            img: project4,
            title: "Project Autumn"
        },
        {
            img: project5,
            title: "Project Breeze"
        },
    ]

  return (
    <div className="my-5 mx-20">
        <div className="flex justify-end mb-5">
            <h1 className="text-[50px] text-gray-500">Our Projects</h1>
        </div>
        <Box>
            <ImageList variant="masonry" cols={3} gap={8}>
                {images.map((item) => (
                    <ImageListItem key={item.img}  className="cursor-pointer">
                        <img src={item.img} alt={item.title}/>
                        <ImageListItemBar
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
        <div className="flex justify-end mt-5">
            <ButtonPlain text="Read More" buttonColor="bg-gray-600" buttonTextColor="text-white"/>
        </div>
    </div>
  )
}
