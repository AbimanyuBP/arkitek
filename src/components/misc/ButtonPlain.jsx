import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function ButtonPlain({text, buttonColor, buttonTextColor}) {

  return (
    <div className={"flex items-center cursor-pointer w-[140px] h-[50px] " + buttonColor}>
        <h2 className={"ml-[20px] " + buttonTextColor}>{text} <ArrowForwardIcon className={buttonTextColor} fontSize="small"/></h2>
    </div>
  )
}
