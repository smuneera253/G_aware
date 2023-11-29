import React from "react";
import './govtoffice.css';

function GovtOffice(){
    return(
        <div>
            
            <div>
                <marquee>
        
                <p className="phara">Our website provides comprehensive  information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
                </marquee>
               </div> 
            <div className="mainT">
                <div className="mainA">
                    <div className="png">
                         <img src="resources/office.png" className="office"/>
                         <h3 className="off"> Government office number</h3>
                     </div>
                     <div className="sectors">
                        <ul>
                            <li className="office_catogeri"><p>Ministry of Agriculture</p></li>
                            <li  className="office_catogeri"><p>Ministry of Panchayati Raj</p></li>
                            <li className="office_catogeri"><p>Ministry of Chemicals and Fertilizers</p></li>
                            <li className="office_catogeri"><p>Ministry of Civil Aviation</p></li>
                            <li className="office_catogeri"><p>Ministry of Consumer Affairs,<br/> Food and Public Distribution</p></li>
                            <li className="office_catogeri"><p>Ministry of Co-operation</p></li>
                            <li className="office_catogeri"><p>Ministry of Corporate Affairs</p></li>
                            <li className="office_catogeri"><p>Ministry of Culture</p></li>
                            <li className="office_catogeri"><p>Ministry of Defence</p></li>
                            <li className="office_catogeri"><p>Ministry of Environment, Forest and Climate Change</p></li>
                            <li className="office_catogeri"><p>Ministry of Health and Family Welfare</p></li>
                        </ul>

                     </div>
                </div>
                <div className="mainB">
                    <div className="oneline">
                        <div className="twoline"></div>
                        <div className="twoline"></div>
                        <div className="twoline"></div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}


export default GovtOffice