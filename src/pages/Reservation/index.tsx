

export default function Reservation(){
    return (
        <div className=" p-5 pt-[20vh] h-[100vh]">
            <div className="flex w-full justify-evenly">
                <div className="hidden md:flex w-[20vw] rounded-t-3xl bg-gradient-to-b from-red-400 to-white">
                    <img src="images/chef_1.png" alt="" />
                </div>
                <div className="flex items-center flex-col space-y-10 w-full md:w-[50vw] ">
                    <h1 className=" text-4xl md:text-6xl font-bold">Book a table</h1>
                    <div className="flex w-full items-center flex-col space-y-10">
                        <input type="text" placeholder="Date" className="p-8 text-xl rounded-xl border outline-none font-medium w-full md:w-[25vw]" />
                        <input type="text" placeholder="Time" className="p-8 text-xl rounded-xl border outline-none font-medium w-full md:w-[25vw]" />
                        <input type="text" placeholder="Party Size" className="p-8 text-xl rounded-xl border outline-none font-medium w-full md:w-[25vw]" />
                        <button  className="p-8 text-2xl rounded-xl border outline-none font-bold w-full md:w-[25vw] text-white bg-red-500" >Book Now</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}