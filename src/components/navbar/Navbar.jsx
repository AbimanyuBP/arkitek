
export default function Navbar() {
  return (
    <div className="flex">
        <div className="flex-[2]">
            <img src="\assets\logo\Logo.png" className="py-[20px] pl-[100px] cursor-pointer" alt="" />
        </div>
        <div className="flex-[6]">
            <ul className="flex py-[30px] pl-[20px] pr-[200px] justify-between">
                <li>
                    <hr className="bg-[black] h-[2px]"/>
                    <a href="/"><span className="text-[12px] cursor-pointer">MAIN</span></a>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
                <li>
                    <hr className="bg-[black] h-[2px]"/>
                    <a href="/gallery"><span className="text-[12px] cursor-pointer">GALLERY</span></a>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
                <li>
                    <hr className="bg-[black] h-[2px]"/>
                    <a href="/projects"><span className="text-[12px] cursor-pointer">PROJECTS</span></a>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
                <li>
                    <hr className="bg-[black] h-[2px]"/>
                    <a href="/certifications"><span className="text-[12px] cursor-pointer">CERTIFICATIONS</span></a>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
                <li>
                    <hr className="bg-[black] h-[2px]"/>
                    <a href="/contacts"><span className="text-[12px] cursor-pointer">CONTACTS</span></a>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
            </ul>
        </div>
    </div>
  )
}
