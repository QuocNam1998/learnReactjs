import React from 'react';
import '../style.css';

export default function Img(){
    return (
        <div className='container-Img'>
            <div className='Img__top--1600'>
                <div className='Img__top--1600--kingkong width300'>
                     <img className='width-height-100' src={require('../assest/image/kingkong.png')}alt=''/>
                     <div className='Img__top-background width-height-100'>
                        <div><img className='eye1' src={require('../assest/layer/Eye.png')} alt=''/></div>
                        <div><h4 className='pd-top16'>Labore et dolore magnam </h4></div>
                        <div><p className='fontSize-14 pd-t8'>Photography</p></div>
                        
                     </div>
                </div>

                <div className='Img__top--1600--taitho width300'>
                     <img  class='width-height-100' src={require('../assest/image/taitho.png')}alt=''/>
                     <div className='Img__top-background width-height-100'>
                        <div><img className='eye1' src={require('../assest/layer/Eye.png')} alt=''/></div>
                        <div><h4 className='pd-top16'>Labore et dolore magnam </h4></div>
                        <div><p className='fontSize-14 pd-t8'>Photography</p></div>
                        
                     </div>
                </div>
                
                <div className='Img__top--1600--3mans width300'>
                     <img className='width-height-100' src={require('../assest/image/3mans.png')}alt=''/>
                     <div className='Img__top-background width-height-100'>
                        <div><img className='eye1' src={require('../assest/layer/Eye.png')} alt=''/></div>
                        <div><h4 className='pd-top16'>Labore et dolore magnam </h4></div>
                        <div><p className='fontSize-14 pd-t8'>Photography</p></div>
                        
                     </div>
                </div>

                <div className='Img__top--1600--giotnuoc width300'>
                     <img className='width-height-100' src={require('../assest/image/giotnuoc.png')}alt=''/>
                     <div className='Img__top-background width-height-100'>
                        <div><img className='eye1' src={require('../assest/layer/Eye.png')} alt=''/></div>
                        <div><h4 className='pd-top16'>Labore et dolore magnam </h4></div>
                        <div><p className='fontSize-14 pd-t8'>Photography</p></div>
                        
                     </div>
                </div>
            </div>


            {/* bottom */}
            <div className='Img__bottom--1600'>
                <div className='Img__top--1600--soldier width300'>
                     <img className='width-height-100' src={require('../assest/image/soldier.png')}alt=''/>
                     <div className='Img__top-background width-height-100'>
                        <div><img className='eye1' src={require('../assest/layer/Eye.png')} alt=''/></div>
                        <div><h4 className='pd-top16'>Labore et dolore magnam </h4></div>
                        <div><p className='fontSize-14 pd-t8'>Photography</p></div>
                        
                     </div>
                </div>

                <div className='Img__top--1600--3minions width300'>
                     <img  className='width-height-100' src={require('../assest/image/3minions.png')}alt=''/>
                     <div className='Img__top-background width-height-100'>
                        <div><img className='eye1' src={require('../assest/layer/Eye.png')} alt=''/></div>
                        <div><h4 className='pd-top16'>Labore et dolore magnam </h4></div>
                        <div><p className='fontSize-14 pd-t8'>Photography</p></div>
                        
                     </div>
                </div>
                
                <div className='Img__top--1600--mannoeye width300'>
                     <img className='width-height-100' src={require('../assest/image/mannoeye.png')}alt=''/>
                     <div className='Img__top-background width-height-100'>
                        <div><img className='eye1' src={require('../assest/layer/Eye.png')} alt=''/></div>
                        <div><h4 className='pd-top16'>Labore et dolore magnam </h4></div>
                        <div><p className='fontSize-14 pd-t8'>Photography</p></div>
                        
                     </div>
                </div>

                <div className='Img__top--1600--cangua width300'>
                     <img className='width-height-100' src={require('../assest/image/cangua.png')}alt=''/>
                     <div className='Img__top-background width-height-100'>
                        <div><img className='eye1' src={require('../assest/layer/Eye.png')} alt=''/></div>
                        <div><h4 className='pd-top16'>Labore et dolore magnam </h4></div>
                        <div><p className='fontSize-14 pd-t8'>Photography</p></div>
                        
                     </div>
                </div>
            </div>
        </div>
    );
}