import { useState } from 'react';
import { RecipesContext } from './index';
import { FavoriteType, RecipeDetailsType } from '../types';

type RecipesProviderProps = {
  children: React.ReactNode;
};

export function RecipesProvider({ children }: RecipesProviderProps) {
  const [productsInfo, setProductInfo] = useState<RecipeDetailsType[]>([]);
  const [favorite, setFavorite] = useState<FavoriteType[]>([]);
  const [onlyRecipes, setOnlyRecipes] = useState<RecipeDetailsType>({
  } as RecipeDetailsType);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const setHandleProductsInfo = (recipes: RecipeDetailsType[]) => {
    setProductInfo(recipes);
  };

  const hanleSetOnlyRecipes = (recipes: RecipeDetailsType) => {
    setOnlyRecipes(recipes);
  };

  const handleSetFavorite = (recipe: FavoriteType) => {
    setFavorite([...favorite, recipe]);
  };

  const handleSetIngredients = (ingredientsList: string[]) => {
    setIngredients(ingredientsList);
  };

  return (
    <RecipesContext.Provider
      value={
      {
        productsInfo,
        setHandleProductsInfo,
        onlyRecipes,
        hanleSetOnlyRecipes,
        favorite,
        handleSetFavorite,
        ingredients,
        handleSetIngredients,
      }
      }
    >
      <div>
        { children }
      </div>
    </RecipesContext.Provider>
  );
}

// const [done, setDone] = useState<{ meals: []; }>({ meals: [] });
// const [inProgress, setInProgress] = useState<{ meals: []; }>({ meals: [] });
