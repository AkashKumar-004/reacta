import NavBar from "../Components/NavBar";
import Cat from '../assets/img/cat.png'
const Page=()=>{
    return(
        <>
        <div className="h-screen w-screen ">
           
         <div className=""><NavBar/></div>
            <div className="h-3/5 w-full flex flex-row">
                <div className="w-3/5 h-full flex items-center justify-center"><img src={Cat}></img></div>
                <div className="w-3/5 h-full flex justify-center items-center flex-col gap-4">
                <div className=" h-[30%]">
                    <div className="flex justify-center items-center">AKASH KUMAR</div>
                </div>
                <div className="h-[30%]">
                    o
                </div>
                </div>
            </div>
            <div className="h-1/6"></div>   
        </div>
        </>
    )
}
export default Page;