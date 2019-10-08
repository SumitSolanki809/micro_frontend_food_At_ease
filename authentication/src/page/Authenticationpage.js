import React from 'react'
import Header from '../components/header/Header'
import Login from '../components/login/Login'
import './Authenticationpage.css'
import App from '../App'
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import Register from '../components/Register/Register'
class Authenticationpage extends React.Component {

    render() {
        return (
            <Router>
            <div className="MainOne">
                
                <Switch>
                <Route path="/Register" component={Register} />
            <Route component={Login} />
                </Switch>
            </div>
            </Router>
        )
    }

}
export default Authenticationpage