
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
                    <span className="text-[12px] cursor-pointer">MAIN</span>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
                <li>
                    <hr className="bg-[black] h-[2px]"/>
                    <span className="text-[12px] cursor-pointer">GALLERY</span>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
                <li>
                    <hr className="bg-[black] h-[2px]"/>
                    <span className="text-[12px] cursor-pointer">PROJECTS</span>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
                <li>
                    <hr className="bg-[black] h-[2px]"/>
                    <span className="text-[12px] cursor-pointer">CERTIFICATIONS</span>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
                <li>
                    <hr className="bg-[black] h-[2px]"/>
                    <span className="text-[12px] cursor-pointer">CONTACTS</span>
                    <hr className="bg-[black] h-[2px]"/>
                </li>
            </ul>
        </div>
    </div>
  )
}
