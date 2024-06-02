
export default function ChefCards({data}: any){
    return (
        <div className="flex flex-col items-center space-y-4    ">
            <div className="flex items-center justify-center bg-gradient-to-b from-red-400 to-white rounded-t-3xl w-[19vw] h-[49vh]">
                <img className="w-[15vw] h-[49vh]" src={data.image_src} alt="Chef Image" />
            </div>
            <div className="text-3xl font-semibold">{data.name}</div>
            <div className="text-xl text-gray-800">{data.designation}</div>
        </div>
    )
}