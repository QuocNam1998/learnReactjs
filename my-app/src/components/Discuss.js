import React from 'react';
import '../style.css';
import { HeartOutlined} from '@ant-design/icons';

export default function() {
    return (
        <div className='Discuss'>
        <div className='Discuss__top'>
            <div className=''>
                    <div className='title-discuss txt-center'>
                        <h1 className='cl-gr mr-top32 mr-custom font-title fontWeight-800 fontSize-27'>LET'S DISCUSS</h1>
                    </div>
                    <div className="flex-heart">
                            <div>
                                <img src={require('../assest/icon/rowFeature.png')}></img>
                             </div>
                                  <img className="pd-t6-w16 " src={require('../assest/icon/heart.png')}></img>
                            {/* <i className="pd-t6-w16 opacity-06"><HeartOutlined /></i> */}
                             <div>
                                <img src={require('../assest/icon/rowFeature.png')}></img>
                            </div>
                    </div>
                    <div className='txt-center'>
                            <span className=' font-title fontWeight-600 pd-t16 opacity-09'>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</span>
                    </div>
            </div>
           

            {/* form message */}

            <div className='flex-item'>
                <div className='item-1'>
                    <div className='fontSize-20 fontWeight-600 opacity-08'>
                         <p className=' font-title'>Cras at ultrices erat, sed <p className=' font-title pd-t4'> vulputate!</p> </p>
                    </div>
                    
                    <div className='address-item1 pd-t32 opacity-06 font-title fontWeight-600'>
                        <p className='pd-t4 font-title fontSize-13'>2345 Setwant natrer, 1234</p>
                        <p className='pd-t4 font-title fontSize-13'>Washington. United state</p>
                        <p className='pd-t4 font-title fontSize-13'>401. 12345</p>
                        <p className='pd-t4 font-title fontSize-13'>hello@brandi.com</p>
                        <p className='pd-t4 font-title fontSize-13'>www.brandi.com</p>
                    </div>
                </div>

                {/* item 2 */}
                <div className='item-2'>
                    <h2 className='font-title'>Say hello!</h2>
                    <div className='input__top mr-top32 opacity-06 '>
                        <input className='input__Name pd-top16 pd-bottom16 font-title' placeholder='Name'></input>
                        <input className='input__Email pd-top16 pd-bottom16 font-title' placeholder='Email'></input>
                    </div>
                    <div className='opacity-06'>
                        <input className='input_Message width-height-100 pd-t32 pd-bottom16 font-title' placeholder='Message'></input>
                    </div>
                    <div className='class_btn'>
                        <button className='btn__message pd-t32  font-title fontWeight-600 fontSize-16'>Send message</button>
                    </div>
                </div>

                {/* item 3 */}
                <div className='item-3'>
                    <div className='hover pd-t8'> <img src={require('../assest/Discuss/behance.png')}></img></div>
                    <div className='hover  pd-t8'> <img src={require('../assest/Discuss/twitter.png')}></img></div>
                    <div className='hover  pd-t8'> <img src={require('../assest/Discuss/dribbble.png')}></img></div>
                    <div className='hover pd-t8'>  <img src={require('../assest/Discuss/forrst.png')}></img></div>
                    <div className='hover pd-t8'> <img src={require('../assest/Discuss/googleplus.png')}></img></div>
                    <div className='hover pd-t8'>  <img src={require('../assest/Discuss/facebook.png')}></img></div>
                </div>
            
            </div>
        </div>
           <div className='Discuss__bottom'>
                <div className='PIN'>
                     <img src={require('../assest/Discuss/PIN.png')}></img> 
                </div>
           </div>
        </div>
    )
}