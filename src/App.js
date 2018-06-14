import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './App.css';

import NavBar from './components/NavBar'
import LeftMenu from './components/LeftMenu'
import HomePage from './screens/HomePage'
import CategoryList from './screens/CategoryList'

const initialState = {
  LoaderGIF: 0
}

function reducer(state = initialState, action){
  switch(action.type){
    case "SHOW":
      return {
        LoaderGIF: 1
      }
    case "HIDE":
      return {
        LoaderGIF: 0
      }
    default:
      return state;
  }
  return state;
}

// showLoader(){
//   this.props.dispatch({type: "SHOW"})
// }
//
// hideLoader(){
//     this.props.dispatch({type: "HIDE"})
// }

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
          <NavBar />
            <div id="LeftMenu" className="col-md-3">
              <LeftMenu />
            </div>
            <div id="MainSection" className="col-md-9">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/kategoria/:subCatID/:subCatSlugName" component={CategoryList} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
