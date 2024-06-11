import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import Stack from '@mui/material/Stack';

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
        <div className="flex-[2]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[98px] leading-[50px]">Project<br/><span className="text-[50px]">Lorum</span></h1>
            </div>
            <div className="mx-24 my-10">
                <Stack spacing={2} direction="row">
                    <Button variant="contained" sx={{backgroundColor: '#e2e2e2', "&:hover": {backgroundColor: "#818781"}}}><ArrowBackIcon className="text-[black]"/></Button>
                    <Button variant="contained" sx={{backgroundColor: '#e2e2e2', "&:hover": {backgroundColor: "#818781"}}}><ArrowForwardIcon className="text-[black]"/></Button>
                </Stack>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-[30px]">1 <LinearScaleIcon fontSize="large" className="rotate-[-45deg]"/> 4</h1>
            </div>
        </div>
        <div className="flex-[4]">
            <img src="assets\projects\project_1.png" className="w-[800px] h-[700px] object-cover" alt="" />
        </div>
    </div>
  )
}
