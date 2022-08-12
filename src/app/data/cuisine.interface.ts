import Recipe from "./recipe.interface";

export default interface Cuisine {
    id: number;
    type: string;
    description: string;
    recipes: Recipe[];
}