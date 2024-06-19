import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function ButtonPlain({text, buttonProp, buttonTextProp}) {

  return (
    <div className={"flex items-center cursor-pointer w-[140px] h-[50px] " + buttonProp}>
        <h2 className={"ml-[20px] " + buttonTextProp}>{text} <ArrowForwardIcon className={buttonTextProp} fontSize="small"/></h2>
    </div>
  )
}
