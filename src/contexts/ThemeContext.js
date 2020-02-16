import React, { Component, createContext } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    }
    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}} >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider



// Whenever we create a Context we have to also create a provider which is a tag that surrounds whichever components we want to use that context in