const NavBar=()=>{
    return(
        <>
        <div className=" bg-[#f8f8f8]">
        <div className="bg-red-300 flex h-[3rem] w-full ">
            <div className="bg-red-300 w-3/6 flex justify-start items-center ml-4">
                WEBSITE
            </div>
            <div className="bg-red-300 flex  flex-row w-3/6 items-center justify-center">
            <div className="w-[33%] h-5/6 flex items-center justify-center">PROFILE</div>
               <div className="h-5/6 w-[33%] flex items-center justify-center">PROJECT</div>
               <div className="h-5/6 w-[33%] flex items-center justify-center">CONTACT</div>
                <div className="h-5/6 w-[33%] flex items-center justify-center">PIC</div>
            </div>
        </div>
        </div>
        </>
    )
}
export default NavBar;