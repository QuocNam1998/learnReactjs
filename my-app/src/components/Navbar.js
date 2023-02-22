import React from 'react';
import "../style.css"; //trong reactjs muon xai thang nao thi import thang do, thằng nào xài thì thằng đó import 

export default function Navbar() {
    const navbar = document.querySelector('.background-nav')
    window.onscroll=() => {
        if(window.scrollY > 730 ){
            navbar.classList.add('setBackground')
        }
        else {
           navbar.classList.remove('setBackground') 
        }
    }

    return (

        <nav className='nav'>

            <div className='background-content'>
                <div className='nav-Left'>
                    <ul className='listitem-Left'>
                        <li id='brandi' className='item-Left'><a className='brandi font-Pacifico' src='#'>Brandi</a></li>
                        <li className='item-Left'><a className='tagLine font-title fontSize-12 ' src='#'>I'am your tag line</a></li>

                    </ul>
                </div>
                <div className='nav-Right'>
                    <ul className='listitem-Right'>
                        <li className='item-Right'><a className='item-nav-right font-title fontSize-12 pd__custom' href='#Home'>Home</a></li>
                        <li className='item-Right'><a className='item-nav-right font-title fontSize-12 pd__custom' href='#Features'>Features</a></li>
                        <li className='item-Right'><a className='item-nav-right font-title fontSize-12 pd__custom' href='#Work'>Works</a></li>
                        <li className='item-Right'><a className='item-nav-right font-title fontSize-12 pd__custom' href='#Team'>Team</a></li>
                        <li className='item-Right'><a className='item-nav-right font-title fontSize-12 pd__custom' href='#Conntact'>Conntact</a></li>
                    </ul>
                </div>
            </div>

            <div className='background-nav'>

            </div>


        </nav>


    )
}