import React from 'react';
import Footercomp from './Footercomp';
import Aboutcomp from '../Aboutcomp';
import Contactcomp from '../Contactcomp';
import Homecomp from '../Homecomp';
import Navigate from './Navigate';
import Error from './Error';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

export default function Maincomp(){
    return(
        <React.Fragment>
            <Navigate/>
            <br/>
            <Router>
                <Switch> 
                    <Route exact path = "/" component = {Homecomp}/>
                    <Route  path = "/about" component = {Aboutcomp}/>
                    <Route  path = "/contact" component = {Contactcomp}/>
                    <Route component = {Error}/>
                </Switch>
            </Router>
            <Footercomp/>
        </React.Fragment>
    );
}