import PopulerMenuCard from "./popular-menu-card";

const localdata = {
    "Dinner": [
        {
            "title": "Spaghetti",
            "description": "Classic spaghetti with marinara sauce and garlic bread",
            "stars": 4,
            "price": "₹924.53",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Grilled Salmon",
            "description": "Fresh grilled salmon served with roasted vegetables",
            "stars": 5,
            "price": "₹1,189.96",
            "image_source": "images/risotto.png"
        },
        {
            "title": "Chicken Alfredo",
            "description": "Creamy chicken Alfredo pasta topped with Parmesan cheese",
            "stars": 4,
            "price": "₹1,016.31",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Steak",
            "description": "Juicy grilled steak cooked to perfection",
            "stars": 5,
            "price": "₹1,333.46",
            "image_source": "images/risotto.png"
        },
        {
            "title": "Vegetable Stir Fry",
            "description": "Colorful mix of vegetables stir-fried in a savory sauce",
            "stars": 4,
            "price": "₹733.05",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Mushroom Risotto",
            "description": "Creamy mushroom risotto cooked with Arborio rice",
            "stars": 4,
            "price": "₹809.38",
            "image_source": "images/risotto.png"
        }
    ],
    "Lunch": [
        {
            "title": "Sandwich Combo",
            "description": "Turkey and Swiss sandwich with a side of chips",
            "stars": 4,
            "price": "₹570.86",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Caesar Salad",
            "description": "Classic Caesar salad with grilled chicken and Caesar dressing",
            "stars": 4,
            "price": "₹512.91",
            "image_source": "images/risotto.png"
        },
        {
            "title": "BLT Sandwich",
            "description": "Bacon, lettuce, and tomato sandwich served on toasted bread",
            "stars": 4,
            "price": "₹449.92",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Vegetarian Wrap",
            "description": "Assorted vegetables wrapped in a tortilla with hummus",
            "stars": 4,
            "price": "₹570.86",
            "image_source": "images/risotto.png"
        },
        {
            "title": "Soup of the Day",
            "description": "Chef's choice of homemade soup served with bread",
            "stars": 4,
            "price": "₹398.55",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Quinoa Salad",
            "description": "Healthy quinoa salad with mixed greens and balsamic vinaigrette",
            "stars": 4,
            "price": "₹608.47",
            "image_source": "images/risotto.png"
        }
    ],
    "Dessert": [
        {
            "title": "Chocolate Cake",
            "description": "Decadent chocolate cake with a creamy ganache",
            "stars": 5,
            "price": "₹419.69",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Cheesecake",
            "description": "Smooth and creamy cheesecake with a graham cracker crust",
            "stars": 4,
            "price": "₹359.95",
            "image_source": "images/risotto.png"
        },
        {
            "title": "Apple Pie",
            "description": "Homemade apple pie with a flaky crust and cinnamon filling",
            "stars": 4,
            "price": "₹299.97",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Tiramisu",
            "description": "Traditional Italian tiramisu with layers of espresso-soaked ladyfingers",
            "stars": 5,
            "price": "₹479.96",
            "image_source": "images/risotto.png"
        },
        {
            "title": "Fruit Tart",
            "description": "Colorful fruit tart with a buttery pastry crust and vanilla custard",
            "stars": 4,
            "price": "₹389.77",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Ice Cream Sundae",
            "description": "Classic ice cream sundae with chocolate sauce and whipped cream",
            "stars": 4,
            "price": "₹299.97",
            "image_source": "images/risotto.png"
        }
    ],
    "Drink": [
        {
            "title": "Iced Tea",
            "description": "Refreshing iced tea with a hint of lemon",
            "stars": 4,
            "price": "₹124.98",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Lemonade",
            "description": "Homemade lemonade made with fresh lemons and sugar",
            "stars": 4,
            "price": "₹149.98",
            "image_source": "images/risotto.png"
        },
        {
            "title": "Mojito",
            "description": "Classic Mojito cocktail with rum, mint, lime, and soda water",
            "stars": 5,
            "price": "₹449.94",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Smoothie",
            "description": "Mixed berry smoothie made with yogurt and honey",
            "stars": 4,
            "price": "₹274.95",
            "image_source": "images/risotto.png"
        },
        {
            "title": "Cappuccino",
            "description": "Rich and creamy cappuccino topped with frothed milk",
            "stars": 4,
            "price": "₹199.96",
            "image_source": "images/spaghetti.png"
        },
        {
            "title": "Hot Chocolate",
            "description": "Indulgent hot chocolate topped with whipped cream and chocolate shavings",
            "stars": 4,
            "price": "₹224.96",
            "image_source": "images/risotto.png"
        }
    ]
}
export default function PopularMenuSection({data, type}:any){
    let datatoReturn;
    if (data === "Dinner") {
        datatoReturn = localdata.Dinner
    }
    else if (data === "Lunch") {
        datatoReturn === localdata.Lunch    
    }
    else if (data === "Dessert") {
        datatoReturn = localdata.Dessert
    }
    else{
        datatoReturn = localdata.Drink
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-x-10 gap-y-10 w-full p-10 grid-rows-6 md:grid-rows-2">
            {datatoReturn?.map((res) => (
                <PopulerMenuCard data={res} type={type} />
            ))}
        </div>
    )
}