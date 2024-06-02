
import PopularMenuSection from "../../components/popular_menu_section";

export default function Order(){
    return (
        <div className="flex flex-col w-full border items-center pt-[18vh]">
            <div>
                <PopularMenuSection type={"checkout"}/>
            </div>
        </div>
    )
}