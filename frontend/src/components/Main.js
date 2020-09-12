import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'

class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" exact={true} component={SignUp}/>                    
                <Route path="/login" component={Login}/>                    
                <Route path="/home" component={Home}/>                    
                
            </div>
        )
    }
}
//Export The Main Component
export default Main;