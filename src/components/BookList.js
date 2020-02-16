import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'


// USING CONTEXT IN FUNTIONAL BASED COMPONENTS WITH HOOKS
const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='book-list' style={{color: theme.syntax, background: theme.bg, }}>
            <ul>
                <li style={{background: theme.ui}}>The way of kings</li>
                <li style={{background: theme.ui}}>The forty rules of Love</li>
                <li style={{background: theme.ui}}>The Alchemist</li>
            </ul>
        </div>
    )
}



// USING CONTEXT IN CLASS BASED COMPONENTS WITHOUT HOOKS
// class BookList extends Component {
//     static contextType = ThemeContext
    
//     render() {
//         const { isLightTheme, light, dark } = this.context
//         const theme = isLightTheme ? light : dark
//         return (
//             <div className='book-list' style={{color: theme.syntax, background: theme.bg, }}>
//                 <ul>
//                     <li style={{background: theme.ui}}>The way of kings</li>
//                     <li style={{background: theme.ui}}>The forty rules of Love</li>
//                     <li style={{background: theme.ui}}>The Alchemist</li>
//                 </ul>
//             </div>
//         )
//     }
// }


export default BookList