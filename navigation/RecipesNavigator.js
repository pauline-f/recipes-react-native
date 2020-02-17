import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RecipesListScreen from '../screens/RecipesListScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import IngredientsListScreen from '../screens/IngredientsListScreen';
import recipes from '../recipes';

const RecipesNavigator = createStackNavigator({
  RecipesList: {
    screen: RecipesListScreen,
    navigationOptions: {
      headerTitle: recipes.FR.informations.title
    }
  },
  RecipeDetails: RecipeDetailsScreen,
  IngredientsList: IngredientsListScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#43a047'
    },
    headerTintColor: 'white'
  }
});

export default createAppContainer(RecipesNavigator);