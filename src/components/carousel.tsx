
import {  ChevronLeft, ChevronRight} from "lucide-react";
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"


export default function Carousel(){
    const handleDragStart = (e:any) => e.preventDefault();
    const items = [
        <div onDragStart={handleDragStart}>
            I recently tried a new sushi place and was blown away by the freshness of their fish. 
        </div>,
        <div  onDragStart={handleDragStart}>
            The margherita pizza I had was simply fantastic. The crust was thin and crispy, with a slight chewiness that made it perfect. 
        </div>,
        <div  onDragStart={handleDragStart}>
            I had the pleasure of trying a homemade lasagna recently, and it was one of the best I've ever tasted. 
        </div>
    ]

    return (
        <div className=" flex text-center text-gray-800 w-full p-2 md:w-[35vw] text-2xl font-bold mt-10">
            <AliceCarousel 
            touchTracking
            mouseTracking items={items} 
            disableDotsControls 
            infinite
            autoPlay
            animationDuration={2000}
            renderNextButton={() => {
            return <button className="text-2xl md:absolute -right-16 z-50 top-3"><ChevronRight stroke="red" width={50} height={50}/></button>}}
            renderPrevButton={() => {
            return <button className="text-2xl md:absolute -left-16 z-50 top-3"><ChevronLeft stroke="red" width={50} height={50}/></button>}}
            />
        </div>
    )
}