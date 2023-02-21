import React from 'react';
import "../style.css"; //trong reactjs muon xai thang nao thi import thang do, thằng nào xài thì thằng đó import 

export default function Navbar(){
   
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
                            <li className='item-Right'><a className='item-nav-right font-title fontSize-12' href='#Home'>Home</a></li>
                            <li className='item-Right'><a className='item-nav-right font-title fontSize-12' href='#Features'>Features</a></li>
                            <li className='item-Right'><a className='item-nav-right font-title fontSize-12' href='#Work'>Works</a></li>
                            <li className='item-Right'><a className='item-nav-right font-title fontSize-12' href='#Team'>Team</a></li>
                            <li className='item-Right '><a className='item-nav-right font-title fontSize-12' href='#Conntact'>Conntact</a></li>
                        </ul>
                    </div>
                </div>

                <div className='background-nav'>

                </div>
                
                
            </nav>

       
    )
}