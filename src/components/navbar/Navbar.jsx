import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex">
        <div className="flex-[2]">
            <img src="\assets\logo\Logo.png" className="py-[20px] pl-[100px] cursor-pointer" alt="" />
        </div>
        <div className="flex-[6]">
            <ul className="flex py-[30px] pl-[20px] pr-[200px] justify-between">
                <li className="group flex flex-col items-center">
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                    <Link to={'/'}><span className="text-[12px]">MAIN</span></Link>
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                </li>
                <li className="group flex flex-col items-center">
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                    <Link to={'/gallery'}><span className="text-[12px] cursor-pointer">GALLERY</span></Link>
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                </li>
                <li className="group flex flex-col items-center">
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                    <Link to={'/projects'}><span className="text-[12px] cursor-pointer">PROJECTS</span></Link>
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                </li>
                <li className="group flex flex-col items-center">
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                    <Link to={'/certifications'}><span className="text-[12px] cursor-pointer">CERTIFICATIONS</span></Link>
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                </li>
                <li className="group flex flex-col items-center">
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                    <Link to={'/contacts'}><span className="text-[12px] cursor-pointer">CONTACTS</span></Link>
                    <hr className="bg-white h-[2px] w-[0.1px] ease-in-out delay-150 group-hover:w-[100%] group-hover:bg-black duration-300"/>
                </li>

            </ul>
        </div>
    </div>
  )
}
