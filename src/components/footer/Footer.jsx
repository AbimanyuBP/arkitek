import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
  return (
    <div className="bg-gray-700">
        <div className="flex p-10 justify-between">
            <img src="\assets\logo\Logo_White.png" className="w-[150px] h-[100px] cursor-pointer" alt="" />
            <div className=" *:mb-3 *:text-white">
                <h1 className="text-[20px] font-medium mb-3">Information</h1>
                <h2 className="cursor-pointer">Main</h2>
                <h2 className="cursor-pointer">Gallery</h2>
                <h2 className="cursor-pointer">Projects</h2>
                <h2 className="cursor-pointer">Certifications</h2>
                <h2 className="cursor-pointer">Contacts</h2>
            </div>
            <div className=" *:mb-3 *:text-white">
                <h1 className="text-[20px] font-medium mb-3">Contacts</h1>
                <div className="flex gap-2">
                    <LocationOnOutlinedIcon className=""/>
                    <p className="w-[200px] text-white">1234 Sample Street
                    Austin Texas 78704</p>
                </div>
                <div className="flex gap-2">
                    <CallOutlinedIcon className=""/>
                    <p className="">081423457653</p>
                </div>
                <div className="flex gap-2">
                    <EmailOutlinedIcon/>
                    <p className="">janetdesign@gmail.com</p>
                </div>
            </div>
            <div className=" *:mb-3 *:text-white">
                <h1 className="text-[20px] font-medium mb-3">Social Media</h1>
                <div className=" *:mr-5 *:cursor-pointer">
                    <FacebookIcon/>
                    <XIcon/>
                    <LinkedInIcon/>
                    <PinterestIcon/>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center *:text-white">
            <h1>&copy; 2021 All Rights Reserved</h1>
        </div>
    </div>
  )
}
