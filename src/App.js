import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import UserFeed from './UserFeed/UserFeed';
import NewPost from './NewPost/NewPost'
import RecipeDetails from './RecipeDetails/RecipeDetails'

function App() {
  return (
    <main className='App'>
     <Route
      exact path='/'
      component={AboutPage}
    />
    <Route
      exact path='/user'
      component={UserFeed}
    />
    <Route
      exact path='/new'
      component={NewPost}
    />
    <Route 
      exact path='/recipe'
      component={RecipeDetails}
    />
    </main>
  );
}

export default App;