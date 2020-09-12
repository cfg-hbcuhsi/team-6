import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home/HomePage'
import Technology from './Home/Technology/TechnologyPage';
import Medicine from './Home/Medicine/MedicinePage';
import Engineering from './Home/Engineering/EngineeringPage';
import MentorHome from './MentorHome/MentorHome';


class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" exact={true} component={SignUp}/>                    
                <Route path="/login" component={Login}/>                    
                <Route path="/home" component={Home}/>                    
                <Route path="/medicine" component={Medicine}/>                    
                <Route path="/technology" component={Technology}/>                    
                <Route path="/engineering" component={Engineering}/>                    
                <Route path="/mentorhome" component={MentorHome}/>    
            </div>
        )
    }
}
//Export The Main Component
export default Main;