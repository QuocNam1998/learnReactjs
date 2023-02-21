import React from "react";
import '../style.css';

export default function Footer() {
    return (
        <div id='Conntact' className="Footer ">
                <div className="Brandi ">
                    <p className="fontSize-24 mr-bottom32 font-Pacifico">Brandi</p>
                    <div>
                        <p className=" font-title pd-t4 fontSize-13 opacity-09">eusmod tempor incididunt ut labore et</p>
                        <p className=" font-title pd-t4 fontSize-13 opacity-09"> dolore magna aliqua.Ut enim ad minim</p>
                        <p className=" font-title pd-t4 fontSize-13 opacity-09"> veniam , quis nostrud exercitation ullamco</p>  
                        <p className=" font-title pd-t4 fontSize-13 opacity-09"> laboris nisi ut aliquip ex ea commodo</p>
                        <p className=" font-title pd-t4 fontSize-13 opacity-09">consequat.</p>
                    </div>
                    
                </div>
                <div id='mr-top26' className="Subscribe mr-top32">
                    <p className="mr-bottom32 font-title fontWeight-600 opacity-09">Subscribe</p>
                    <div className="container--btn">
                        <button className="Subscribe__btn"></button>
                        <img className="Subscribe--arown"   src={require('../assest/Footer/arrown.png')}/>
                    </div>
                    
                    <p className=" font-title fontSize-13 opacity-09">eusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div id='mr-top38' className="Explore">
                    <p className="fontWeight-600 opacity-09">Explore</p>
                    <div className="Explore__children mr-top32">
                        <div className="Explore__children--left opacity-09">
                            <p className="pd-custom font-title fontSize-13">Envato</p>
                            <p className="pd-custom font-title fontSize-13">Themecurve</p>
                            <p className="pd-custom font-title fontSize-13">Kreativeshowcase</p>
                            <p className="pd-custom font-title fontSize-13">Freebiescurve</p>

                        </div>
                        <div className="Explore__children--right opacity-09">
                        <p className="pd-custom  font-title fontSize-13">Themeforest</p>
                        <p className="pd-custom  font-title fontSize-13">Microsoft</p>
                        <p className="pd-custom  font-title fontSize-13">Google</p>
                        <p className="pd-custom  font-title fontSize-13">Yahoo</p>
                        </div>
                        
                    </div>
                </div>
                <div id='mr-top26' className="About opacity-09">
                    <div className="About--top border-left pd-w8 mr-top34">
                        <p className= "font-title fontSize-13" >Create with <p className="inline-block pd-w4 opacity-09">love</p> by <p className="inline-block opacity-09">themcurve</p></p>
                        <p className="pd-t8 font-title fontSize-13">, exclusive for kreativeshowcase</p>
                    </div>
                    <div className="About--bottom">
                        <p className="border-left pd-w8 font-title fontSize-12"> @ 2014 Brandi. All rights Reserved.</p>
                    </div>
                </div>
        </div>
    )
}