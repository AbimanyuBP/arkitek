
export default function Navbar() {
  return (
    <div className="flex">
        <div className="flex-[2]">
            <img src="\assets\logo\Logo.png" className="py-[20px] pl-[100px] cursor-pointer" alt="" />
        </div>
        <div className="flex-[6]">
            <ul className="flex py-[30px] pl-[20px] pr-[200px] justify-between">
                <li className="group flex flex-col items-center">
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                    <a href="/"><span className="text-[12px]">MAIN</span></a>
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                </li>
                <li className="group flex flex-col items-center">
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                    <a href="/gallery"><span className="text-[12px] cursor-pointer">GALLERY</span></a>
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                </li>
                <li className="group flex flex-col items-center">
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                    <a href="/projects"><span className="text-[12px] cursor-pointer">PROJECTS</span></a>
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                </li>
                <li className="group flex flex-col items-center">
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                    <a href="/certifications"><span className="text-[12px] cursor-pointer">CERTIFICATIONS</span></a>
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                </li>
                <li className="group flex flex-col items-center">
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                    <a href="/contacts"><span className="text-[12px] cursor-pointer">CONTACTS</span></a>
                    <hr className="bg-[black] h-[2px] group-hover:animate-awooga group-hover:fill-mode-forwards"/>
                </li>
            </ul>
        </div>
    </div>
  )
}
