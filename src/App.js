import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import UserFeed from './UserFeed/UserFeed';
import NewPost from './NewPost/NewPost'
import RecipeDetails from './RecipeDetails/RecipeDetails'
import ApiContext from './ApiContext';
import config from './config';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= { recipes: []}
  }

  componentDidMount(){
    document.title = 'My Recipe Box'
    const recipesRes = fetch(`${config.API_ENDPOINT}/recipes`, {
        method:'GET',
      });

    Promise.all([recipesRes])
      .then(responses => Promise.all(responses.map(res => res.json())))

    Promise.all([
      fetch(`${config.API_ENDPOINT}/recipes`),
      ])
    .then(([recipeRes]) => {
      return Promise.all([
        recipeRes.json(),
        ])
    })
    .then(([recipes]) => {
      this.setState({ recipes })
    })
  }

  handleAddRecipe = recipe => {
      this.setState({
        recipes: [
        ...this.state.recipes,
        recipe
        ]
      })
    }
  
  render() {
    const value = {
      recipes: this.state.recipes,
      addRecipe: this.handleAddRecipe,
    }
    return (
    <ApiContext.Provider value={value}>
      <Router>
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
        exact path='/recipe/:activeRecipeId'
        component={RecipeDetails}
      />
      </Router>
    </ApiContext.Provider>
  );
 }
}

export default App;