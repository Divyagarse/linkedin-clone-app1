import React, { useEffect } from 'react';
import { Provider, connect } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { getUserAuth } from './actions';

function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Login/>
          </Route>
          <Route path ="/home">
            <Provider store={store}>
            <Header />
            <Home />
            </Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{};
};

const mapDispatchToProps = (dispatch)=>({
  getUserAuth: ()=> dispatch(getUserAuth()),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
