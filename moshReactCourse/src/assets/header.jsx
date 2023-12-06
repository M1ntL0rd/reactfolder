import React, { useState } from 'react';

function Header() {

const [click, setClick]=React.useState(false);

    function handleClick(){
        setClick(!click);

        click===true ? className='navbar' : null;
    }

    return ( 
        <div className="header">
            <button type='button' className="navbarbtn openbtn" >↻</button>
            <div className="navbar">
                <button type='button' className="navbarbtn closebtn" onClick={handleClick}>x</button>
                <div className="atagContainer">
                    <a href="#about" >About</a>
                    <a href="#client">Client</a>
                    <a href="#services">Services</a>
                    <a href="#help">Help</a>
                    <a href="#author">Author</a>
                    <a href="#contact">Contact</a>
                    <a href="#faq">FAQ</a>
                    <a href="#calculator">Calculator</a>
                </div>
                

                {/* NavBar close button
                <button type="button" className="navbarbtn closebtn">x</button>*/}
            </div>
            <h1 className="h1"><span className="logo">∞ↅ∞</span> The ↅrace N∞k</h1>

        </div>
     );
}

export default Header;
