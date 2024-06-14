import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function Contacts() {
  return (
    <div>
        <h1 className="text-[50px] text-gray-500">Contact Us</h1>
        <div className="flex">
            <div className="flex flex-col bg-slate-100 *:bg-gray-300 *:text-white mr-5">
                <input type="text" placeholder="Name" required/>
                <input type="text" placeholder="Phone Number" required/>
                <input type="text" placeholder="Email" required/>
                <input type="text" placeholder="Interesed In"/>
                <input type="text" placeholder="Message" required/>
            </div>
            <img src="\assets\misc\contacts_guy.png" alt="" />
        </div>
        <div className="flex justify-end mt-5">
            <div className="flex justify-center items-center bg-gray-600 cursor-pointer w-[130px] h-[50px]">
                <h2 className="ml-[20px] text-white">Read More <ArrowForwardIcon className="text-white" fontSize="small"/></h2>
            </div>
        </div>
    </div>
  )
}
