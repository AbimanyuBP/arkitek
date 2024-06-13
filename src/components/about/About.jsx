import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function About() {
  return (
    // <div className="flex justify-center items-center">
    //     <div className="">
    //       <img src="public\assets\projects\project_2.jpg" alt="" className="size-[200px] m-2"/>
    //       <img src="public\assets\projects\project_3.jpg" alt="" className="size-[200px] m-2"/>
    //     </div>
    //     <div className="">
    //       <img src="public\assets\projects\project_4.jpg" alt="" className="size-[400px]"/>
    //     </div>
    //     <div className="max-w-xl">
    //       <h1 className="text-[50px]">About</h1>
    //       <p className="line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dignissimos placeat illum magnam nesciunt quia quis quo molestias sequi possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat animi hic minima, doloremque natus magni dolor qui nostrum doloribus vel distinctio quae aliquid suscipit aspernatur, a, molestiae facilis sunt perferendis? Magni distinctio aspernatur ipsam cupiditate aut asperiores eum non debitis. Porro praesentium deleniti necessitatibus, aperiam voluptatibus quisquam. Autem, aperiam.</p>
    //     </div>
    // </div>
    <div className="flex justify-center items-center bg-gray-100">
      <div className="">
          <img src="public\assets\projects\project_2.jpg" alt="" className="size-[200px] m-2"/>
          <img src="public\assets\projects\project_3.jpg" alt="" className="size-[200px] m-2"/>
        </div>
        <div className="">
          <img src="public\assets\projects\project_4.jpg" alt="" className="size-[400px]"/>
        </div>
      <div className="p-6 max-w-xl">
        <h1 className="text-[50px] text-[gray] mb-4">About</h1>
        <p className="line-clamp-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dignissimos placeat illum magnam nesciunt quia quis quo molestias sequi possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat animi hic minima, doloremque natus magni dolor qui nostrum doloribus vel distinctio quae aliquid suscipit aspernatur, a, molestiae facilis sunt perferendis? Magni distinctio aspernatur ipsam cupiditate aut asperiores eum non debitis. Porro praesentium deleniti necessitatibus, aperiam voluptatibus quisquam. Autem, aperiam.
        </p>
        <div className=" mt-3 bg-white cursor-pointer w-[130px] h-[50px] flex items-center">
            <h2 className="ml-[20px]">Read More <ArrowForwardIcon className="text-[black]" fontSize="small"/></h2>
        </div>
      </div>
    </div>
  )
}
