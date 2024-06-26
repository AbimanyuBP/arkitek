import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ButtonPlain from '../misc/ButtonPlain'

export default function Contacts() {
  return (
    <div className=" m-20">
        <h1 className="text-[50px] text-gray-500">Contact Us</h1>
        <div className="flex">
            <div className="flex flex-col *:bg-gray-300 mr-5 w-[50%] *:mt-3 *:h-[50px] *:p-3">
                <input type="text" placeholder="Name" required/>
                <input type="text" placeholder="Phone Number" required/>
                <input type="text" placeholder="Email" required/>
                <input type="text" placeholder="Interesed In"/>
                <textarea placeholder="Message"/>
            </div>
            <img src="\assets\misc\contacts_guy.png" alt="" />
        </div>
        <div className="">
            <ButtonPlain text="Send Email" buttonProp="bg-gray-600 hover:bg-slate-800" buttonTextProp="text-white"/>
        </div>
    </div>
  )
}
