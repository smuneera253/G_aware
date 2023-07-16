import React from "react";
import './leaderpage.css'


function Leader(){
    return(
       <div>
        
            
            <div>
                <marquee>
        
                <p className="phara">Our website provides comprehensive  information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
                </marquee>
                </div>
            <div className="MAIN">
                <div className="leader1 shad ">
                    <div className="leader2 ">
                        <img src="resources/people.png" className="people"/>
                        <h2 className="bottom1">Poltical leaders</h2>
                        
                    </div> 
                        <div>
                                <ul>
                                    <li><p className="PM CM">President</p></li>
                                    <li><p className="PM CM">Voic President</p></li>
                                    <li><p className="PM CM">Prime Minister</p></li>
                                    <li><p className="PM CM">cheif Minister</p></li>
                                    <li><p className="PM CM">member of parlament.....(MP)</p></li>
                                    <li><p className="PM CM">member of ligislative assembly....(MLA)</p></li>
                                    <li><p className="PM CM">Zilla Parishat Territorial Constituencies....(ZPTC)</p></li>
                                    <li><p className="PM CM">Mandal Parishat Territorial Constituencies....(MPTC )</p></li>
                                </ul>
                                
                        </div>
                        
                </div>
                    <div className="MAIN2">
                        <div className="MAIN3 ">
                         <b><p className="OF ">First Prasident Of india</p> </b>
                            <img src="resources/prasident.jpeg" className="prasident"/>
                            <div  className="Name">
                            <b><p>Doctor babu rajendra prasad</p></b>
                            <p>(born December 3, 1884, Zeradei, India—died February 28, 1963, Patna)</p>
                            <p> Indian politician, lawyer, and journalist who was the first president of the Republic of India (1950–62).</p>
                            <p>Raised in a landowning family of modest means, Prasad was a graduate of the Calcutta Law    that College. </p>
                            </div>
                        </div>
                
                    </div>
               </div>
               <div className="MAIN4">
                <b><p className="import">important plans</p></b>
                <p className="import1">The prasident of collaborate others and making the plans </p>
                <div className="MAIN5 shado">
                    <div className="plan1 ">
                    <div className="plan2 shadow3 ">
                       
                        <img src="resources/Quiteindia.jpg" className="photo"/>
                        <p className="move">Quite india movment</p>
                        <button className="all">click me</button>
                       
                    </div>
                    <div className="plan3 shadow3">
                        <img src="resources/nehru.png" className="photo"/>
                        <p className="move">planing namak sitya</p>
                        <button className="all">click me</button>
                    </div>
                    <div className="plan3 shadow3">
                        <img src="resources/Mahatma.jpg" className="photo"/>
                        <p className="move">planing namak sitya</p>
                        <button className="all">click me</button>
                    </div>
                    <div className="plan3 shadow3">
                        <img src="resources/Nehruandbabu.jpg" className="photo"/>
                        <p className="move">planing namak sitya</p>
                        <button className="all">click me</button>
                    </div>
                    
                    </div>
                </div>
               </div> 
              
        </div>
        
        
    );
    
}

export default Leader;