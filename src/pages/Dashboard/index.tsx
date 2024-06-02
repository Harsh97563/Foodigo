
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import PopularMenuSection from "../../components/popular_menu_section"
import ChefCards from "../../components/chef_cards"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "../../components/carousel"


const chefData = [
    { "name": "Vikas Khanna", "designation": "Executive Chef", "image_src": "images/chef_1.png" },
    { "name": "Sanjeev Kapoor", "designation": "Master Chef", "image_src": "images/chef_2.png" },
    { "name": "Ranveer Brar", "designation": "Celebrity Chef", "image_src": "images/chef_1.png" },
    { "name": "Tarla Dalal", "designation": "Cookery Expert", "image_src": "images/chef_2.png" },
    { "name": "Manish Mehrotra", "designation": "Culinary Director", "image_src": "images/chef_1.png" },
    { "name": "Vineet Bhatia", "designation": "Michelin-starred Chef", "image_src": "images/chef_2.png" }
  ]
  

export default function Dashboard(){
    const navigate = useNavigate()
    const [chef, setChef] = useState(false)
    const Categories = ["Dinner", "Lunch", "Dessert", "Drink"]
    
    return (
        <div className="flex flex-col w-full ">
            <div className="flex pt-[18vh] items-center justify-evenly w-full bg-gradient-to-b from-red-200 to-white">
                <div className="flex md:w-[50vw] flex-col items-center space-y-6 text-center">
                    <div className="flex flex-col w-full items-center">
                        <div className=" text-[35px] w-full md:text-[70px] font-bold md:w-[30vw]">
                            Best Restaurant In 
                            <span className=" text-red-500"> Town.</span>
                        </div>

                    </div>
                    <div className=" md:text-2xl md:w-[30vw] text-amber-800">We provide best food in town, we provide home delivery and dine in services.</div>
                    <div className="flex space-x-8">
                        <button className=" bg-red-600 text-white md:text-2xl font-bold p-4 rounded-xl md:px-10"
                        onClick={() => navigate('/order')}
                        >Order Now</button>
                        <button className=" bg-red-100 text-red-600 md:text-2xl font-bold p-4 rounded-xl md:px-10"
                        onClick={() => navigate('/reservation')}
                        >Reservation</button>
                    </div>
                </div>
                <div className="hidden md:flex md:w-[40vw]">
                    <img src="images/dash_1.png" alt="" />
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row-reverse mt-[10vh] md:mt-[20vh] items-center justify-evenly w-full">
                <div className="flex text-center items-center flex-col space-y-6">
                    <div className="w-full">
                        <div className=" text-[35px] md:text-[70px] font-bold w-full md:w-[30vw]">
                            Our Most Popular 
                            <span className=" text-red-500"> Dish.</span>
                        </div>

                    </div>
                    <div className=" md:text-2xl md:w-[30vw] text-amber-800">This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.</div>
                    <div className="flex">
                        <button className=" bg-red-600 text-white md:text-2xl font-bold p-2 md:p-4 rounded-xl md:px-10">Order Now</button>
                    </div>
                </div>
                <div className=" w-[70vw] md:w-[35vw]">
                    <img src="images/dash_2.png" alt="" />
                </div>
            </div>
            <div className=" mt-12 md:mt-24 flex flex-col items-center">
                <h1 className="text-[35px] md:text-[70px] font-bold">Our Popular Menu</h1>
                <div className="flex justify-center w-full">
                    <Tabs className="w-full md:w-[55vw]"
                    selectedTabClassName="bg-red-500 text-white"
                    selectedTabPanelClassName=" tab-panel--selected">
                        <TabList className="flex gap-[15px] md:gap-[150px] text-xl"
                        >
                            {Categories.map((res) => (
                                <Tab className="p-2 px-3 md:px-10 rounded-lg">
                                    {res}
                                </Tab>
                            ))}
                        </TabList>
                        {Categories.map((res) => (
                            <TabPanel>
                                <PopularMenuSection data={res}/>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div>
            <div className="flex w-full items-center flex-col mt-24">
                <h1 className="md:text-[70px] font-bold">Our Popular Chef</h1>
                <div className={` ${chef ? "md:grid": "md:flex"} hidden overflow-hidden md:w-[62vw] grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 grid-row-6 md:grid-rows-2 pt-16`}>
                    {chefData.map((res)=> (
                        <ChefCards data={res}/>
                    ))}
                </div>
                <button className="mt-16 font-bold md:text-2xl text-white bg-red-500 p-5 px-16 rounded-lg"
                onClick={()=> setChef(prev => !prev)}
                >{chef ? "View Less": "View All"}</button>
            </div>
            <div className="flex flex-col items-center mt-16">
                <h1 className="md:text-[40px] font-bold">What Our Customers Say</h1>
                <Carousel/>
                <div className="flex flex-col justify-center items-center bg-red-200 h-[30vh] md:w-[50vw] w-full rounded-3xl space-y-16 mt-10">
                    <div className=" text-2xl md:text-5xl font-bold">Hungary We are open now..</div>
                    <div className="flex space-x-8">
                        <button className=" bg-red-600 text-white text-xl md:text-2xl font-bold md:p-4 rounded-xl px-5 md:px-10"
                        onClick={() => navigate('/order')}
                        >Order Now</button>
                        <button className=" bg-red-100 text-red-600 text-xl md:text-2xl font-bold p-4 rounded-xl px-5 md:px-10"
                        onClick={() => navigate('/reservation')}
                        >Reservation</button>
                    </div>
                </div>
            </div>
        </div>
    )
}