export default function ContactUs(){
    return (
        <div className=" flex p-5 flex-col space-y-10 pt-[20vh] items-center md:h-[100vh]">
            <h1 className=" text-4xl md:text-6xl font-bold">Book a table</h1>
            <p className=" text-xl md:text-3xl w-full p-2 md:w-[50vw] text-center font-bold">We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
            <div className="flex flex-col space-y-5 w-full md:w-[40vw]">
                <input type="text" placeholder="First Name" className="p-4 w-full outline-none rounded-xl border-2" />
                <input type="text" placeholder="Last Name" className="p-4 w-full outline-none rounded-xl border-2" />
                <input type="text" placeholder="Email Address" className="p-4 w-full outline-none rounded-xl border-2" />
                <input type="text" placeholder="Subject" className="p-4 w-full outline-none rounded-xl border-2" />
                <textarea placeholder="Message" className="p-4 w-full outline-none rounded-xl border-2"/>
                <button  className="p-4 text-2xl rounded-xl border outline-none font-bold w-full text-white bg-red-500" >Submit</button>
            </div>
        </div>
    )
}