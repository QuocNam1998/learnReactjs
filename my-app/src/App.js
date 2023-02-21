import React from 'react';
import Navbar from './components/Navbar';
import Img from './components/Img';
import Header from './components/header';
import Features from './components/Features';
import Work from './components/Work';
import MeetourTeam from './components/MeetourTeam';
import Somefunfacts from './components/Somefunfacts';
import Discuss from './components/Discuss';
import Footer from './components/Footer';

import './style.css';

export default function App() {
    return (
        <div className='container'>
            <Navbar />
            <Header />
            <Features />
            <Work />
            <Img />
            <MeetourTeam />
            <Somefunfacts />
            <Discuss />
            <Footer />
        </div>
    )
}