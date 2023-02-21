import React from "react";
import '../style.css';
import { HeartOutlined} from '@ant-design/icons';

export default function MeetourTeam() {
    
    // xu ly doi mau ten filmrDoe
    let members = document.getElementById('johnFilmr');
    console.log(members)

    function handlerMove() {
        return setTimeout(() => {
            members.classList.add('cl-gr');
        }, 100); 
    }

    function handlerLeave() {
        return setTimeout(()=>{
            members.classList.remove('cl-gr');
        },100); 
    }

    // xu ly doi ten Chystine Hineu
    const members1 = document.getElementById('Hineu');

    function handlerMove1() {
        return setTimeout(() => {
            members1.classList.add('cl-gr');
        }, 100); 
    }

    function handlerLeave1() {
        return setTimeout(()=>{
            members1.classList.remove('cl-gr');
        },100); 
    }

    // xu ly doi ten Matrone
    const members2 = document.getElementById('Matrone');
    function handlerMove2() {
        return setTimeout(() => {
            members2.classList.add('cl-gr');
        }, 100); 
    }

    function handlerLeave2() {
        return setTimeout(()=>{
            members2.classList.remove('cl-gr');
        },100);
    }

    // xu ly doi mau 
    const Flaulkin = document.getElementById('Flaulkin');
    function handlerMove3() {
        return setTimeout(() => {
            Flaulkin.classList.add('cl-gr');
        }, 100); 
    }

    function handlerLeave3() {
        return setTimeout(()=>{
            Flaulkin.classList.remove('cl-gr');
        },100);
    }

    return (
        <div id='Team' className="MeetourTeam">
            <div className="content txt-center mr-top64 ">
                    <h1 className="cl-gr mr-t32 font-title fontWeight-800 fontSize-27">MEET OUR TEAM</h1>
                <div className="flex-heart">
                    <div>
                        <img  src={require('../assest/icon/rowFeature.png')}></img>
                        </div>
                            <img className="pd-t6-w16 " src={require('../assest/icon/heart.png')}></img>
                            {/* <i className="pd-t6-w16 opacity-06"><HeartOutlined /></i> */}
                        <div>
                        <img src={require('../assest/icon/rowFeature.png')}></img>
                    </div>
                    </div>
                <p className="mr-top16  font-title fontWeight-600 opacity-08">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                 doloremque laudantium, <p className="font-title fontWeight-600"> totam rem aperiam, eaque ipsa quae ab illo inventore</p></p>
            </div>

            {/* members */}
            <div className="img-container">
                <div onMouseEnter={handlerMove} onMouseLeave={handlerLeave} className="img-container__1">
                    <img className='img height-80 width-100' src={require('../assest/MeetOurTeam/JohnFilmr.png') } alt='' />
                    <div className="img-container__1__background">
                    <div className="img-container__1__content ">
                    <p className=" txt-center fontWeight-600">Nemo enim ipsam 
                            <p className="txt-center pd-bottom16 fontWeight-600">voluptatem quia voluptas</p> </p>
                            <div className="opacity-08 cl-white">
                                <p className="txt-center pd-2 " >sit aspernatur aut odit aut</p>
                                <p className="txt-center pd-2 "> fugit, sed quia consequuntur</p>
                                <p className="txt-center pd-2 ">magni dolores eos qui ratione</p>
                                <p className="txt-center pd-2 ">voluptatem.</p>
                            </div>
                                
                        </div> 
                        <div className="img-container__1__icon mr-top32">
                            <img  className="pd-w2" src={require('../assest/MeetOurTeam/twister.png')}/>
                            <img className="pd-w2" src={require('../assest/MeetOurTeam/facebook.png')}/>
                            <img className="pd-w2" src={require('../assest/MeetOurTeam/google.png')}/>
                        </div>
                    </div>
                    <div className="width-100">
                        <p id='johnFilmr' className="mr-8 txt-center fontWeight-500 ">John Filmr Doe</p>
                        <p className="txt-center fontSize-13 opacity-04">Managing Director</p>
                    </div>
                    
                   
                    
                </div>
               
                <div className="img-container__2">
                    <img className='img height-80 width-100' src={require('../assest/MeetOurTeam/ChystineHineu.png') } alt='' />
                    <div onMouseEnter={handlerMove1} onMouseLeave={handlerLeave1} className="img-container__1__background">
                    <div className="img-container__1__content ">
                            <p className=" txt-center fontWeight-600">Nemo enim ipsam 
                            <p className="txt-center pd-bottom16 fontWeight-600">voluptatem quia voluptas</p> </p>
                            <div className="opacity-08 cl-white">
                                <p className="txt-center pd-2 " >sit aspernatur aut odit aut</p>
                                <p className="txt-center pd-2 "> fugit, sed quia consequuntur</p>
                                <p className="txt-center pd-2 ">magni dolores eos qui ratione</p>
                                <p className="txt-center pd-2 ">voluptatem.</p>
                            </div>
                                
                        </div> 
                        <div className="img-container__1__icon mr-top32">
                            <img  className="pd-w2" src={require('../assest/MeetOurTeam/twister.png')}/>
                            <img className="pd-w2" src={require('../assest/MeetOurTeam/facebook.png')}/>
                            <img className="pd-w2" src={require('../assest/MeetOurTeam/google.png')}/>
                        </div>
                    </div>
                    <div className="width-100">
                        <p id='Hineu' className="mr-8 txt-center fontWeight-500 ">Chystine Hineu</p>
                        <p className="txt-center fontSize-13 opacity-04">Lead Designer</p>
                    </div>
                </div>
               
                <div onMouseEnter={handlerMove2} onMouseLeave={handlerLeave2} className="img-container__3">
                    <img className='img height-80 width-100' src={require('../assest/MeetOurTeam/MartinMatrone.png') } alt='' />
                    <div className="img-container__1__background">
                    <div className="img-container__1__content ">
                    <p className=" txt-center fontWeight-600">Nemo enim ipsam 
                            <p className="txt-center pd-bottom16 fontWeight-600">voluptatem quia voluptas</p> </p>
                            <div className="opacity-08 cl-white">
                                <p className="txt-center pd-2 " >sit aspernatur aut odit aut</p>
                                <p className="txt-center pd-2 "> fugit, sed quia consequuntur</p>
                                <p className="txt-center pd-2 ">magni dolores eos qui ratione</p>
                                <p className="txt-center pd-2 ">voluptatem.</p>
                            </div>
                                
                        </div> 
                        <div className="img-container__1__icon mr-top32">
                            <img  className="pd-w2" src={require('../assest/MeetOurTeam/twister.png')}/>
                            <img className="pd-w2" src={require('../assest/MeetOurTeam/facebook.png')}/>
                            <img className="pd-w2" src={require('../assest/MeetOurTeam/google.png')}/>
                        </div>
                    </div>
                    <div className="width-100">
                        <p id='Matrone' className="mr-8 txt-center fontWeight-500 ">Martin Matrone</p>
                        <p className=" txt-center fontSize-13 opacity-04">Lead Developer</p>
                    </div>
                </div>
                
                <div onMouseEnter={handlerMove3} onMouseLeave={handlerLeave3} className="img-container__4 ">
                    <img onMouseLeave={handlerLeave} onMouseEnter={handlerMove} className='img height-80 width-100' src={require('../assest/MeetOurTeam/SteveFlaulkin.png') } alt='' />
                    <div className="img-container__1__background">
                        <div className="img-container__1__content ">
                        <p className=" txt-center fontWeight-600">Nemo enim ipsam 
                            <p className="txt-center pd-bottom16 fontWeight-600">voluptatem quia voluptas</p> </p>
                            <div className="opacity-08 cl-white">
                                <p className="txt-center pd-2 " >sit aspernatur aut odit aut</p>
                                <p className="txt-center pd-2 "> fugit, sed quia consequuntur</p>
                                <p className="txt-center pd-2 ">magni dolores eos qui ratione</p>
                                <p className="txt-center pd-2 ">voluptatem.</p>
                            </div>
                                
                        </div> 
                        <div className="img-container__1__icon mr-top32">
                            <img  className="pd-w2" src={require('../assest/MeetOurTeam/twister.png')}/>
                            <img className="pd-w2" src={require('../assest/MeetOurTeam/facebook.png')}/>
                            <img className="pd-w2" src={require('../assest/MeetOurTeam/google.png')}/>
                        </div>
                    </div>
                    <div className="width-100">
                        <p id="Flaulkin" className="mr-8 txt-center fontWeight-500">Steve Flaulkin</p>
                        <p className=" txt-center fontSize-13 opacity-04">Sr. UI Designer</p>
                    </div>
                </div>

           
                
        </div>

        <div className="mr-bottom64" >
                <div className="center mr-32">
                     <img  className="center-hover" src={require('../assest/icon/3dots.png')}></img>
                </div>
        </div>
        
 </div>
    )
}