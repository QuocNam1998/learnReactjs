import React from "react";
import '../style.css';
import { HeartOutlined } from '@ant-design/icons';

export default function () {
    return (
        <div id='Work' className="container-work">
            <div className="work-Top pd-16">
                <h1 className="cl-gr font-title fontWeight-800 fontSize-27">WORKS</h1>
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
                <p className="mr-top32  font-title fontWeight-600 opacity-09">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, <p className="font-title fontWeight-600 opacity-09"> totam rem aperiam, eaque ipsa quae ab illo inventore</p></p>
            </div>
            <div>
                <ul className="list-work">
                    <li className="item font-title fontWeight-700 fontSize-14 ">All</li>
                    <li className="item font-title fontWeight-700 fontSize-14 ">Brandi</li>
                    <li className="item font-title fontWeight-700 fontSize-14 ">Web</li>
                    <li className="item font-title fontWeight-700 fontSize-14 ">Logo Design</li>
                    <li className="item font-title fontWeight-700 fontSize-14 ">Photography</li>
                </ul>
            </div>
        </div>
    )
}