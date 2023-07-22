import React from "react";
import './leaderpage.css'
import { Quiteindiamomement, learderCatogories, marqueedata, presidentData } from "../constant/navBarConstant";


function Leader(){
    return(
       <div>
        
        {
            marqueedata.map((item)=>(
            <p>
                <marquee className="phara">{item}</marquee>
            </p>
            ))
       } 
            
            <div className="MAIN">
                <div className="leader1 shad ">
                    <div className="leader2 ">
                        <img src="resources/people.png" className="people"/>
                        <h2 className="bottom1">Poltical leaders</h2>
                        
                    </div> 
                        <div>
                             <ul>
                                    {
                                        learderCatogories.list.para.map((item,i)=>(
                                            <li key = {i}>
                                                <p className="PM CM">{item}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                        </div> 
                        
                </div>
                    <div className="MAIN2">
                        <div className="MAIN3 ">
                          <b><p className="OF ">First Prasident Of india</p> </b>
                            <img src="resources/prasident.jpeg" className="prasident"/>
                            <div  className="Name">
                                
                                <h3>{presidentData.head}</h3>
                                {
                                    presidentData.data.map((item,i)=>(
                                        <p key = {i}>{item}</p>
                                    ))
                                }
                             </div>
                        </div>
                
                    </div>
               </div>
               <div className="MAIN4">
                <b><p className="import">important plans</p></b>
                <p className="import1">The prasident of collaborate others and making the plans </p>
                <div className="MAIN5 shado">
                    
                    <div className="plan1 ">
                        {
                            Quiteindiamomement.map((item,i)=>(
                                <div className="plan2 shadow3 ">
                                    <img key={i} src={item.image} className="photo"/>
                                    <div key={i} className="move1">{item.text}</div>
                                    
                                    <button key={i} className="all">{item.button}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
               </div> 
              
        </div>
        
        
    );
    
}

export default Leader;