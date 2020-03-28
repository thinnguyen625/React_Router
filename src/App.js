import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
                     <li className="active">
                        <a href="/">Trang chủ</a>
                     </li>
                     <li>
                        <a href="/about">Giới thiệu</a>
                     </li>
                     <li>
                        <a href="/contact">Liên hệ</a>
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
