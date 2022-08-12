import Cuisine from "./cuisine.interface";

export const cuisines: Cuisine[] = [
    {
        id: 1,
        type: "chinese",
        description: "Some description about Chinese Food",
        recipes: [
            {
                number: 1,
                name: "noodles",
                meal: "Main Course",
                ingredients: ["Noodles", "Veggies", "Tofu"],
                steps: ["Boil noodles", "Cut veggies", "Cook in work"]
            },
            {
                number: 2,
                name: "spring rolls",
                meal: "Appetizer",
                ingredients: ["Veggies", "Pastry rolls"],
                steps: ["Cook Veggies", "Stuff rolls", "Cook in work"]
            },
            {
                number: 3,
                name: "bean ball",
                meal: "Dessert",
                ingredients: ["Beans", "Sugar", "Flour Dough"],
                steps: ["Roll dough", "Mush beans", "Stuff beans in dough", "Steam"]
            },
            {
                number: 4,
                name: "sesame chicken",
                meal: "Main Course",
                ingredients: ["Chicken", "Sauce"],
                steps: ["Batter chicken", "Roll in sauce", "Fry"]
            }
        ]
    },
    {
     id:2,
     type: "indian",
     description: "indian food description, tasty food.",
     recipes: [
         {
            number: 1,
            name: "Keema Aloo",
            meal: "Main Coutse",
            ingredients: ["Beef", "Potatoes", "Garlic"],
            steps: ["Mince garlic", "Slice potatoes", "Cook beef"]
         },
         {
            number: 2,
            name: "Tomato Cucumber Kachumbar",
            meal: "Appetizer",
            ingredients: ["Tomato", "Cucumber", "Onion"],
            steps: ["Add Tomato", "Add cucumber", "Add onion", "Mix"]
         },
         {
            number: 3,
            name: "Kashmiri Lamb",
            meal: "Main Coutse",
            ingredients: ["Lamb", "Chilli", "Sauce"],
            steps: ["Cook lamb", "Add chilli", "Put in sauce"]
         }
     ]
    },
    {
        id: 3,
        type: "italian",
        description: "Italian food description. The best Italian-style pasta, chicken dishes, soup, and more.",
        recipes: [
            {
                number: 1,
                name: "Italian Shrimp Risotto",
                meal: "Main Coutse",
                ingredients: ["Shrimp", "Scallop", "Black Pepper"],
                steps: ["Cook shrimp", "cook scallop", "Add black pepper", "Cook all"]
             },
             {
                number: 2,
                name: "Traditional Spaghetti",
                meal: "Appetizer",
                ingredients: ["Spaghetti", "Bacon", "Olive oil"],
                steps: ["Boil water", "Add spaghetti", "Add bacon", "Cook sauce"]
             }
        ]
       }
    
];