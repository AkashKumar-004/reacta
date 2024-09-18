import NavBar from "../Components/NavBar";
import Cat from '../assets/img/cat.png'
const Page=()=>{
    return(
        <>
        <div className="h-screen w-screen ">
            <div className="h-[80vh] w-[100%] flex flex-row bg-sky-300">
                <div className="w-[40%] h-full flex items-center justify-center shadow-2xl"><img src={Cat}></img></div>
                <div className="w-[60%] h-full flex gap-6 flex-col">
                    <div className=" h-[50%] w-full flex justify-center items-center shadow-md">
                            <div className="w-[80%] flex justify-center items-start flex-col">AKASH KUMAR S</div>
                    </div>
                    <div className=" h-[50%] flex items-center justify-center flex-col">
                                <div className="w-[80%] h-[20%] flex ">
                                    <div className="font-bold text-2xl">Discription</div>
                                </div>
                                <div className="w-[80%] h-[80%] flex justify-end ">
                                    <div className="w-[80%]">hi</div>
                                </div>
                    </div>
                </div>
            </div>
            <div className="h-[20vh]"></div>   
        </div>
        </>
    )
}
export default Page;