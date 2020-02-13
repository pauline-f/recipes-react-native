import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RecipesListScreen from '../screens/RecipesListScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

const RecipesNavigator = createStackNavigator({
  RecipesList: RecipesListScreen,
  RecipeDetails: RecipeDetailsScreen
});

export default createAppContainer(RecipesNavigator);