
export default function AboutUs(){
    return (
        <div className="flex p-5 w-full space-y-8 md:space-y-0 pt-28 flex-col">
            <div className="flex flex-col md:flex-row w-full justify-evenly items-center md:h-[100vh]">
                <div className="">
                    <div className="w-[75vw] md:w-[30vw] flex items-center justify-center bg-gray-200 p-8 md:p-16 rounded-full">
                        <div className="w-[55vw] md:w-[25vw] bg-gray-300 p-8 md:p-16 rounded-full">
                            <img src="images/aboutus_1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center space-y-8">
                    <h1 className="text-3xl md:text-6xl font-bold">About Our<hr/>
                        <span className="text-red-500">Resturant</span>
                    </h1>
                    <div className="text-xl md:w-[25vw]">This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.</div>
                    <button className=" bg-red-600 text-white text-2xl font-bold p-4 rounded-xl px-10">Order Now</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse w-full justify-evenly items-center md:h-[90vh]">
                <div>
                    <div className="w-[75vw] md:w-[30vw] flex items-center justify-center bg-gray-200 p-8 md:p-16 rounded-full">
                        <div className="w-[55vw] md:w-[25vw] bg-gray-300 p-8 md:p-16 rounded-full">
                            <img src="images/aboutus_2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-8">
                    
                    <div className="text-xl w-full md:w-[25vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate hic obcaecati, neque odio excepturi accusantium reprehenderit incidunt ipsam atque, deserunt quae architecto ad cum non, voluptatem commodi doloribus? Tempora fugit, provident error nostrum nulla porro! Iste quam odit earum, voluptatum magnam reprehenderit aut voluptas ab sunt, mollitia beatae temporibus libero itaque nesciunt. Natus, aspernatur itaque nemo explicabo placeat eos. Quis, et. Architecto sit incidunt magni et nesciunt.</div>
                </div>
            </div>
            <div className="flex flex-col text-center md:flex-row w-full justify-evenly items-center h-[100vh]">
                <div className="md:w-[25vw]">
                    <img src="images/aboutus_3.png" alt="" />
                </div>
                <div className="flex flex-col space-y-8">
                    <h1 className="w-full text-3xl md:text-6xl font-bold">
                        <span className="text-red-500">Owner </span>
                         & Executive<hr/> Chef
                    </h1>
                    <div className="text-xl w-full md:w-[25vw]">This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.</div>
                </div>
            </div>
        </div>
    )
}