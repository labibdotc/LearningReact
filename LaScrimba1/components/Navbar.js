import React from 'react'
import ReactDOM from 'react-dom'
// import logo from '../React-icon.png'


function Navbar(){
    return (
        <>
            <nav>
                <img src='../React-icon.png'/>
                <h3 className="nav--logo_txt">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </>
    );
}
export default Navbar;