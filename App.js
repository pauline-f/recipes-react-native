import React from 'react';
import RecipesNavigator from './navigation/RecipesNavigator';
import { createStore, combineReducers } from 'redux';
import recipesReducer from './store/reducers/recipes';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  recipes: recipesReducer
})
const store = createStore(rootReducer);

export default App = () => {
  return (
    <Provider store={store}>
      <RecipesNavigator />
    </Provider>
  );
}
