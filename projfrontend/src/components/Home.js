import React from 'react';
import { isAuthenticated } from '../auth/helper';
import {Avatar} from '@material-ui/core';
import './style.css';

const Home=()=>{
    const Ava=()=>{
        if(isAuthenticated()){
        return(<div>
        <li><a href="/Profile">
        <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></a></li>
        </div>)}
        else{
        return(<li className="nav-item">
        <a className="nav-link" href="/Register">Register</a>
    </li>
    )}
    }
    return(<div id="section1"><div className="header" id="topheader">
    <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container text-uppercase p-2">


            <a className="navbar-brand" href="#">The Anonymous</a>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-uppercase">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Consultation <span className="sr-only"></span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/Map">NearBy Hospital <span className="sr-only"></span></a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                {Ava()}

                </ul>

            </div>
        </div>
    </nav>
    <section className="header-section">
            <div className="center-div">
                <h1 className="font-weight-bold " style={{"font-family": 'Zilla Slab Highlight'}}> We Are The New Change </h1>
                <p> Health And Security</p>
                <div class="header-buttons">
                    <a href="#">About us</a>
                    <a href="#">Contact</a>
                            
                </div>
            </div>
        </section>

    </div>

<section  class="header-extradiv">
    <div class="container">
        <div class="row">
            <div class="extra-div col-lg-4 col-md-4 col-12">
            <a href="#"><i class="fa-4x fa fa-desktop" aria-hidden="true"></i>
            </a>
                <h2>Consult A doctor</h2>
                <p>Want to learn something absolutely new? An open mind is the best place to build a palace! Every course covers the subject from basics.Build</p>
            </div>

            <div class="extra-div col-lg-4 col-md-4 col-12">
            <a href="#"><i class="fa-4x fa fa-trophy " aria-hidden="true"></i>
            </a>
                <h2>Visit Near by hospital</h2>
                <p> Recognized certificates to give your resume an edge. A blue-chip credential to enter your field</p>
            </div>
            
            <div class="extra-div col-lg-4 col-md-4 col-12">
            <a href="#"><i class="fa-4x fa fa-magic" aria-hidden="true"></i>
            </a>
                <h2> Health Check UP</h2>
                <p>Industry experts to guide you through your course and share their experience with you. Gain a friend in your field and a coach for life.</p>
            </div>
        
    </div>
    </div>
</section>
</div>);
}
export default Home;
