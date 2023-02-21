import React from "react";
import '../style.css';
import { HeartOutlined} from '@ant-design/icons';

export default function Somefunfacts(){
 return(
     <div className="container-somefunfacts"> 
        <div className="somefunfacts-content">
            <div>
                 <h1 className="cl-gr mr-t32 font-title txt-center mr-top64 fontWeight-800 fontSize-27 ">SOME FUN FACTS</h1>
            </div>

            <div className="somefunfacts-content__heart">
                <div className="flex-heart">
                    <div>
                        <img className="background-white" src={require('../assest/icon/rowFeature.png')}></img>
                        </div>
                            <img className="pd-t6-w16 " src={require('../assest/Somefunfacts/heartWhite.png')}></img>
                            {/* <i className="pd-t6-w16 opacity-06"><HeartOutlined /></i> */}
                        <div>
                        <img className="background-white" src={require('../assest/icon/rowFeature.png')}></img>
                    </div>
                </div>
            </div>

            <div className="somefunfacts-content__icon">
                <div className="pd-w48">
                    <img src={require('../assest/Somefunfacts/hours.png')}></img>
                </div>
                <div className="pd-w48">
                    <img src={require('../assest/Somefunfacts/clients.png')}></img>
                </div>
                <div className="pd-w48">
                    <img src={require('../assest/Somefunfacts/Projects.png')}></img>
                </div>
                <div className="pd-w48">
                    <img src={require('../assest/Somefunfacts/Awareds.png')}></img>
                </div>

            </div>
            
        </div>

        <div className="somefunfacts-layer">

        </div>
        <div className="somefunfacts-background">

            </div>
     </div>
    )

}