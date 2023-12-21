import React, { useState } from "react";

import './Helplinenumber.css';
import { HelipButton } from "../constant/navBarConstant";
import { getAllHelp } from "../../redux/ProductRedux/action";
import { useDispatch, useSelector } from "react-redux";

function HelpLine() {
    const [helpClick, setHelpClick] = useState(false);
    const dispatch = useDispatch();
    const HelpData = useSelector((state) => state.help.HelpData);

    console.log('Component HelpData:', HelpData);

    const fetchHelpData = (url) => {
        setHelpClick(true);
        dispatch(getAllHelp(url));
    }
    return (
        <div>
            <div className="Help_main">
                <div className="Help_mainsmallbox">
                    <div className="Help_icon">
                    <img src="resources/helpnum.png" className="Help_image" alt="Helpline Icon" />
                        <div className="Help_heding">Helpline Number</div>

                       
                    </div>

                    <p className="Help_text">If you find yourself in a dangerous situation, such as a health emergency, fire, accident, or if you need assistance related to women's safety, agriculture (Kisan Call Center), tourism, electricity, or traffic-related issues, it can be challenging to determine the appropriate helpline number. During such critical moments, you may not know the correct contact information for help. On this website, you will find the right numbers at the right time to get the help you need</p>


                    <div className="Help_mapingdata">
                            <ul>
                                {
                                    HelipButton.HelipButtonData.map((item, start) => (
                                        <li key={start} >
                                            <div className="Help_arrowFlex  Helparrow_hover">
                                                    <p  className="Help_itemHelpText"  onClick={() => fetchHelpData(item.helpApi)}>{item.helpText}</p>
                                                    <img src="resources/arrow_right.png" className="Help_arrow"/>
                                            </div>
                                            
                                            
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                </div>
                <div className="Help_mainbigbox">

                    {helpClick && HelpData && HelpData.length> 0 ? (
                        HelpData.map(({id,emergency,contact,image})=>(
                            <div className="Help_bakendDataMain">
                                 <div key={id}>
                                 <img src={image} className="Help_bakendImage" />

                                <p className="Help_emergency">Name:{emergency}</p>
                                <p className="Help_contact">Number:{contact}</p>
                            </div>
                            </div>
                           
                        ))
                    ): HelpData && !HelpData ?(
                        <p>Loading....</p>
                    ):(
                        <p>No Help Data</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HelpLine;
