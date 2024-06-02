import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PopulerMenuCard({data, type}: any){
    const navigate = useNavigate()
    const [myorders, setMyorders] = useState([])    
    return (
        <div className="flex flex-col items-center w-full space-y-3 md:space-y-10 md:w-[15vw]">
            <div className="w-[70vw] md:w-[15vw]">
                <img src={data.image_source} />
            </div>
            <div className="flex md:h-[9vh] w-full space-y-3 items-center flex-col text-center">
                <div className=" text-xl md:text-3xl font-bold">{data.title}</div>
                <div>{data.description}</div>
                <div></div>
            </div>
            <div className="flex w-full items-center justify-between">
                <div className="md:text-2xl font-bold">{data.price}</div>
                <button className="bg-red-500 font-semibold text-white p-2 px-5 md:px-10 rounded-lg"
                onClick={()=> {
                    {type != "checkout"? navigate('/order'): "" }
                }}
                >{type === "checkout"? "Add": "Order"}
                </button>
            </div>
        </div>
    )
}