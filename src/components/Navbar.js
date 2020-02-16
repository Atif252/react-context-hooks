import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'



const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <nav style={{background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <ul>
        <li><Link style={{color: theme.syntax}} to="/">Home</Link></li>
        <li><Link style={{color: theme.syntax}} to="/about">About</Link></li>
        <li><Link style={{color: theme.syntax}} to="/contact">Contact</Link></li>
      </ul>
      </nav>
  )
}




// USING CONTEXT IN CLASS BASED COMPONENTS WITHOUT HOOKS

// class Navbar extends Component {
//   // For accessing context in class based components
//   // static contextType = ThemeContext
//   render(){
//     return (
//       <AuthContext.Consumer>{(authContext) => (
//         <ThemeContext.Consumer>{(themeContext) => {
//           const { isAuthenticated, toggleAuth } = authContext
//           const { isLightTheme, light, dark } = themeContext
//           const theme = isLightTheme ? light : dark
//           return (
//             <nav style={{background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <div onClick={toggleAuth}>
//                 {isAuthenticated ? 'Logged In' : 'Logged Out'}
//               </div>
//               <ul>
//                 <li><Link style={{color: theme.syntax}} to="/">Home</Link></li>
//                 <li><Link style={{color: theme.syntax}} to="/about">About</Link></li>
//                 <li><Link style={{color: theme.syntax}} to="/contact">Contact</Link></li>
//               </ul>
//              </nav>
//           )
//         }}
//         </ThemeContext.Consumer>
//       )}
//       </AuthContext.Consumer>
//     )
//   } 
// }


export default Navbar
