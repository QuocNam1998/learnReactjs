import React from "react";
import '../style.css';
import { HeartOutlined, FolderOpenTwoTone, EllipsisOutlined } from '@ant-design/icons';

export default function () {
    return (
        <div id='Features' className="features ">
            <div className="features-Top pd-48">
                <h1 className=" cl-gr font-title fontWeight-800 fontSize-27">FEATURES</h1>
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


            </div>
            <div>
                <div className="list-Item">
                    <div className="list-Item_item1">
                        <div>
                            <img className="mr-right16" src={require('../assest/icon/icon1Features.png')} />
                        </div>
                        <div>
                            <h3 className="h1-features font-title fontWeight-600">Branding</h3>
                            <p className="list-item_span fontSize-13 line-height-14 opacity-06 fontWeight-600 font-title fontSize-13">Sed ut perspiciatis unde omnis iste
                                natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore
                            </p>
                        </div>


                    </div>

                    <div className="list-Item_item2">
                        <div>
                            <img className="mr-right16" src={require('../assest/icon/icon2Features.png')} />
                        </div>
                        <div>
                            <h3 className="h1-features font-title fontWeight-600">Development</h3>
                            <p className="list-item_span fontSize-13 line-height-14 opacity-06 fontWeight-600 font-title fontSize-13">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore
                            </p>
                        </div>
                    </div>

                    <div className="list-Item_item3">

                        <div>
                            <img className="mr-right16" src={require('../assest/icon/icon3Features.png')} />
                        </div>
                        <div>
                            <h3 className="h1-features font-title fontWeight-600">Consulting</h3>
                            <p className="list-item_span fontSize-13 line-height-14 opacity-06 fontWeight-600 font-title fontSize-13">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="center mr-customFeatures">
                    <img className="center-hover" src={require('../assest/Features/FeaturesDots.png')}></img>
                </div>
            </div>
        </div>
    )
}