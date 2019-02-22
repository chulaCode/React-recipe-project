import React, { Component } from 'react'
import styled from 'styled-components';
export default class Footer extends Component {
  render() {
    return (
        <FootWrapper className="navbar navbar-expand-sm
        bg-primary navbar-dark px-sm-5 mb-2 ">
        <div className="container" >
        <div className="row">
           <div class="footer-copyright col-12 mx-auto text-center 
            pl-5 py-2 py-lg-3">
      © 2019 Copyright: Ochulaobari Emmanuel
           
           </div>
           </div>
           </div>
           {
             /*
           
             <Link to="/">
            <img  alt="store" className="navbar-brand"/>
            </Link>
           
            <Link to="/cart" className="ml-auto">
      
           </Link>*/}
            </FootWrapper>
           
        )
      }
      //  padding-left: 30rem!important
  }
  const FootWrapper=styled.nav`
  background: var(--mainDark)!important;
    color:var(--mainWhite)!important;
    font-size:0.8rem;
    // y we use rem- because pix are absolute n rem target the reoot element
    //so even if the user changes the value our site is responsive instead of forcing
    //our value's on the user
    text-transform:capitalize;
    margin-bottom:1rem!important;
    
  `;
    
