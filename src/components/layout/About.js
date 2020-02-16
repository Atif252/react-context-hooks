import React from 'react'

const About = () => {
    return (
        <div className='About'>
            <h4>About</h4>
            <p>In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
        </div>
    )
}

export default About
