import React, { Component } from 'react'
import Recipe from './Recipe';
//import { Link } from 'react-router-dom';
import RecipeSearch from './RecipeSearch';
import Footer from './Footer';
//import { recipe } from '../tempDetails';
export default class RecipeList extends Component {
    constructor(props){
        super();
    }

    backToList(){
        window.location.reload();
    }
    render() {
        const { recipes,handleDetails,value
        ,handleSubmit,handleChange,error,handleIndex} = this.props;
        return (
            <React.Fragment>
                <RecipeSearch value={value} handleChange={handleChange}
                handleSubmit={handleSubmit} handleIndex={handleIndex}/>
                <div className="container my-5 ">
                {/*title*/}
                    <div className="row">
                 
                     <div className=" col-10 mx-auto col-md-6 text-center
                     text-uppercase mb-2">
                     <h1 className="text-slanted">recipe list</h1>
                     </div>
                    </div>
                        {/* end title*/}
                
                <div className="row">
                 
                {error?(
                     <div className="col-10 mx-auto col-md-6 text-center">
                     
                       <button type="button" className="btn btn-warning 
                       async getRecipes() { 
                           mb-5 text-capitalize text-left" onClick={this.backToList}> 
                           back to recipe list</button>
                           <h1 className="text-danger text-center">{error}</h1>
                    </div>
                    )
                :( recipes.map(recipe=>{
                    return(
                        <Recipe key={recipe.recipe_id}
                        recipe={recipe}
                        handleDetails={()=>handleDetails(0,recipe.recipe_id)}/>
                    );
                })
                )}
                    
    
                </div>
                </div>
                <Footer/>
              
            </React.Fragment>
        )
    }
}
