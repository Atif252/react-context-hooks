import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import About from './components/layout/About'
import Contact from './components/layout/Contact'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from './contexts/AuthContext'


class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <Route exact path='/' component={BookList} />
            <ThemeToggle />
          </AuthContextProvider>
        </ThemeContextProvider>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
