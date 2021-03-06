import React, { Component } from 'react';
import './App.css';
//import { Switch, Route } from 'react-router-dom';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

class App extends Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=30e1677d9921524b31e77d8ea278244e",
    details_id:35385,
    pageIndex:1,
    error:'',
    search:"",
    query:'&q=',
    base_url:"https://www.food2fork.com/api/search?key=30e1677d9921524b31e77d8ea278244e"
  }
  //with async u don't need a call back IF UR USING AWAIT  u need to use assync
  
  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData= await data.json();
      console.log(jsonData);
      if(jsonData.recipes.length===0){
        this.setState(()=>{
          return{error:`So sorry sweet heart your search result did not return any
          result please click on the go bact to recipe button and try searching for an actual recipe seperated with
          commas thanks!`}
          
        })
      }else{
        //using arrow function
        this.setState(()=>{
          return { recipes:jsonData.recipes }
        })
      }
      /*
      this.setState( {
        recipes:jsonData.recipes
      });*/
    } catch (error) {
      console.log(error);
    }

  }
  componentDidMount(){
   this.getRecipes();
  }
  displayPage=index=>{
    switch(index){
      default:
      case 1: 
      return  (<RecipeList recipes={this.state.recipes} 
      handleDetails={this.handleDetails}
      value={this.state.search}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      error={this.state.error}/> );
      case 0:
      return (<RecipeDetail id={this.state.details_id}
      handleIndex={this.handleIndex}
      />);
    }
  }
  handleIndex=index=>{
    this.setState({
      pageIndex:index,
    
    })
  };
  handleDetails=(index,id)=>{
    this.setState({
      pageIndex:index,
      details_id:id
    })
  };
  handleChange=(e)=>{
   this.setState({
     search:e.target.value
   },()=>{
     console.log(this.state.search)
   });
  };
  handleSubmit=(e)=>{
    e.preventDefault();
    const {base_url,query,search}=this.state;
    this.setState(()=>{
      return {url:`${base_url}${query}${search}`,
    search:""}
    //we need to set the search to an emptry string if not
    //we'll keep getting back the search results entered at first
    },()=>{ this.getRecipes();})
  }
  render() {
    //console.log(this.state.recipes)
    return (
      <React.Fragment>
       {this.displayPage(this.state.pageIndex)}
       {/*
      <Switch>
      <Route exact path="/" component={RecipeList} />
       </Switch>*/}
      </React.Fragment>
    );
  }
}

export default App;
