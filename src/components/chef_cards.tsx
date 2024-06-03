
export default function ChefCards({data}: any){
    return (
        <div className="flex w-full flex-col items-center md:space-y-4    ">
            <div className="flex items-center justify-center pb-1 bg-gradient-to-b from-red-400 to-white rounded-t-3xl md:w-[19vw]">
                <img className="w-[33vw] md:w-[15vw] md:h-[49vh]" src={data.image_src} alt="Chef Image" />
            </div>
            <div className=" text-[10px] md:text-3xl font-semibold">{data.name}</div>
            <div className=" text-[8px] md:text-xl text-gray-800">{data.designation}</div>
        </div>
    )
}