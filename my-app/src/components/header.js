import React from "react";
import '../style.css';
import { DribbbleOutlined, GooglePlusOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

export default function Header() {
    return (
        <div className="container-background">

            <div id='Home' className="header">
                <div className="Sliderdots">
                    <img className='dots_hover' src={require('../assest/header/SliderDots.png')}></img>
                </div>
                <div className="content-Header">
                    <div className="mr-5 txt-center fontSize-48 ">
                        <p className="fontWeight-100 inline-white pd-w16 font-title">Meet</p>
                        <h4 className="font-title inline fontWeight-700">Brandi</h4>
                        <p className="inline font-title fontWeight-100">!</p>
                    </div>

                    <div className="mr-5 txt-center fontSize-46 fontWeight-100 ">
                        <p className="inline-block-gr inline-white font-title ">/creative</p>
                        <p className="inline-white letter-spacing-2 font-title opacity-08"> one page template.</p>
                    </div>

                    <div className="content-Header_item3">
                        <div>
                            <img src={require('../assest/header/thanhngang.png')}></img>
                        </div>
                        <p className="content-Header_item3-children fontWeight-100 font-title">We are team of professionals</p>
                        <div>
                            <img src={require('../assest/header/thanhngang.png')}></img>
                        </div>
                    </div>


                </div>
                <div className="logo-Header">
                    {/* twitter */}
                    <div className="pd-w8 iconHover opacity-06 cl-gray">
                        <i><TwitterOutlined /></i>
                    </div>
                    {/* facebook */}
                    <div className="pd-w8 iconHover opacity-06 cl-gray">
                        <i><FacebookOutlined /></i>
                    </div>
                    {/* googleplus */}
                    <div className="pd-w8 iconHover opacity-06 cl-gray">
                        <i><GooglePlusOutlined /></i>
                    </div>
                    {/* dribbble */}
                    <div className="pd-w8 iconHover opacity-06 cl-gray">
                        <i><DribbbleOutlined /></i>
                    </div>
                </div>
            </div>

            <div className="background-1">

            </div>

            <div className="background-2">


            </div>

        </div>


    )
}