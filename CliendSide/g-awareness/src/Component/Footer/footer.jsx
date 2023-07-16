import React from "react";
import './footer.css';

function Footer(){
    return(
        <div>
             <div> <div className="box61"><span className="back1">back to top</span></div>
            <div className="box7">
                <div className="aboutus">
                    <div >
                        <h4>About</h4>
                        <p>Government information</p>
                        <p>Poltical leader</p>
                        <p>Government budjet</p>
                        <p>police department</p>
                    </div>
                    <div className="foter">
                        <h4>Government Plans</h4>
                        <p>loans</p>
                        <p>benefit plans for people</p>
                        <p>hierarchy information about Government</p>
                    </div>
                    <div className="foter">
                        <h4>Government office numbers</h4>
                        <p>Help_line numbers</p>
                        <p>agriculture</p>
                        <p>indian culture</p>
                        <p> indian cricket</p>
                        <p>army</p>

                    </div>
                    <div className="foter">
                        <h4>Government Jobs notifications</h4>
                        <p>UPSC</p>
                        <p>NEET1</p>
                        <p>indian army jobs</p>
                        <p>CBI jobs</p>
                    </div>

                </div>

                <hr />
                <div className="icon2">

                    <img className="Twitter" src="resources/Twitter.png" alt="image" />
                    <img className="linkdil" src="resources/linkdil.png" alt="image" />
                    <div>
                        <img className="facebook" src="resources/facebook.webp" alt="image" />
                    </div>
                </div>
                <p className="this">This website offers comprehensive government information, job notifications, and insights on Indian culture, cricket, and agriculture.</p>
            </div>
        </div>
        </div>
    );
}
export default Footer