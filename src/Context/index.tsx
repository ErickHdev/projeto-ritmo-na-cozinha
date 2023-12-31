import { createContext } from 'react';
import { FavoriteType, RecipeDetailsType } from '../types';

export type AuthContextType = {
  emailState: string;
  handleSetEmailState: (email: string) => void;
};

export type RecipesContextType = {
  productsInfo: {
    meals: [];
  } | any;
  setHandleProductsInfo: (produtcs: RecipeDetailsType[]) => void;
  hanleSetOnlyRecipes: (produtcs: RecipeDetailsType) => void;
  onlyRecipes: RecipeDetailsType;
  favorite: FavoriteType[] | any;
  handleSetFavorite: (recipe: FavoriteType | any) => void;
  ingredients: string[];
  handleSetIngredients: (ingredientsList: string[]) => void;

};

export const AuthContext = createContext({} as AuthContextType);

export const RecipesContext = createContext({} as RecipesContextType);
