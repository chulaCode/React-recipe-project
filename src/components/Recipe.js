import React, { Component } from 'react'

export default class extends Component {
  render() {
    const {
      image_url, title, source_url, publisher,
      } = this.props.recipe;
      const {handleDetails}=this.props;
    return (
      //render return returns just one element etc div, section...
      //all other element can e a child of that one element react fragment
      //can serve that purpose since it won't show in the html

      <React.Fragment>
        {/*no need for container and row since it has been 
       defined in recipeList file*/}
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3 pr-4 pl-4">
          <div className="card">
            <img src={image_url} className="img-card-top"
              style={{ height: "14rem" }} alt="recipe" />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                provided by {publisher}</h6>
            </div>
            <div className="card-footer">
            <button type="button" className="btn btn-primary
            text-capitalize"
            onClick={handleDetails}>details</button>
            <a href={source_url} className="btn btn-success mx-2
            text-capitalize" target="_blank"
            rel="noopener noreferrer"
           >recipe url</a>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}
