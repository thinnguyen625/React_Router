import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from'./components/Contact'

class App extends Component {
   render() {
      return (
         <Router>
            <div className="App">
               {/* Menu */}
               <nav className="navbar navbar-inverse">
                  <a className="navbar-brand" href="/#">WEB</a>
                  <ul className="nav navbar-nav">
                     <li>
                        <NavLink activeStyle={{
                           backgroundColor : 'white',
                           color : 'red'
                        }} exact to="/" className="my-link active">Trang chủ</NavLink>
                     </li>
                     <li>
                        <NavLink activeStyle={{
                           backgroundColor : 'white',
                           color : 'red'
                        }} to="/about" className="my-link active">Giới thiệu</NavLink>
                     </li>
                     <li>
                        <NavLink activeStyle={{
                           backgroundColor : 'white',
                           color : 'red'
                        }} to="/contact" className="my-link active">Liên hệ</NavLink>
                     </li>
                  </ul>
               </nav>
               {/* Nội dung */}

               <Route path="/" exact component={Home} />
               <Route path="/about" component={About} />
               <Route path="/contact" component={Contact} />

            </div>
         </Router>
      );
   }
}

export default App;
