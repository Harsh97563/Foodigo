import PopularMenuSection from "../../components/popular_menu_section";

export default function Menu(){
    return (
        <div className="flex flex-col w-full items-center justify-center pt-[18vh]">
            <div>
                <PopularMenuSection type={""} />
            </div>
        </div>
    )
}