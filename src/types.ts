export type Meal = {
  dateModified: string | null;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string | null;
  strDrinkAlternate: string | null;
  strImageSource: string | null;
  strIngredient1: string;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
};

export type Drink = {
  dateModified: string;
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strDrinkThumb: string;
  strGlass: string;
  strIBA: string | null;
  strImageAttribution: string | null;
  strImageSource: string | null;
  strIngredient1: string;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strInstructions: string;
  strInstructionsDE: string;
  strInstructionsES: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strMeasure1: string;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strTags: string | null;
  strVideo: string | null;
};

export type MealData = {
  meals: Meal[];
};

export type DrinkData = {
  drinks: Drink[];
};

export type RecipeDetailsType = {
  meals: Meal[] | any;
  drinks: Drink[] | any;
};

export type FavoriteType = {
  id: string;
  type: string;
  nationality: string;
  category: string;
  alcoholicOrNot: string;
  name: string;
  image: string;
};

export type RecipeInProgressType = {
  id: string;
  type: string;
  name: string;
  image: string;
  category: string;
  ingreientsList: string[];
  instructions: string;
};
