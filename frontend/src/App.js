// Libraries
import './App.css';
import React, {Suspense,lazy, useState} from 'react';

import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

// Components
import Header from './MainApp/Header/Header';
import LandingPage from "./User/Pages/LandingPage/LandingPage";
import SignIn from './MainApp/SignIn/SignIn';
import SignUp from './MainApp/SignUp/SignUp';
import Footer from './MainApp/Footer/Footer';
import MainPage from './MainApp/MainPage/MainPage';
import GuardedRoute from './AuthGuards/guardedRoute';
// Lazy Loaded Components
// const MainPage = lazy(() => import('./MainApp/MainPage/MainPage'));

const App = () =>{
  const [isAuth,setAuth]=useState(false);
  const authHandler=props=>{
    setAuth(newval=>props)
  }
  return (
    <Router>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/signin">
            <SignIn onAuth={authHandler} />  
          </Route>
          <Route path="/signup" component={SignUp} />
          <GuardedRoute path="/landingPage" component={LandingPage} auth={isAuth} />
          <Route path="/" component={MainPage}/>
          <Redirect to='/'/>
        </Switch>
      </Suspense>
      <Footer/>
  </Router>
   
)
}

export default App;
