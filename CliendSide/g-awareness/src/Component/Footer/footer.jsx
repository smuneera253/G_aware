import React from "react";
import './footer.css';
import { footerdata } from "../constant/contantfooter";

function Footer(){
    return(
        <div>
             <div> <div className="box61"><span className="back1">back to top</span></div>
            <div className="box7">
                <div className="aboutus">

                    {
                        footerdata.map((item,i)=>(
                            <div key={i} className="foter">
                                <h4>{item.title}</h4>
                                {
                                    item.SubText.map((data,index)=>
                                        <p>{data}</p>
                                    )
                                }
                            </div>
                        ))
                    }

                </div>

                <hr />
                <div className="icon2">

                    <img className="Twitter" src="resources/Twitter.png" alt="image" />
                    <img className="linkdil" src="resources/linkdil.png" alt="image" />
                    <div>
                        <img className="facebook" src="resources/facebook.webp" alt="image" />
                    </div>
                </div>
                

                <p></p>
                {/* <p className="this">This website offers comprehensive government information, job notifications, and insights on Indian culture, cricket, and agriculture.</p>*/}
            </div>
        </div>
        </div>
    );
}
export default Footer