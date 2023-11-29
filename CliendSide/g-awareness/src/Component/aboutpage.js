import React, { useEffect, useState } from "react";
import './aboutpage.css';
import { data } from "./constant/navBarConstant";

function AboutPage(){
  
   const [displayText, setDisplayText] = useState('')
  const textContent = "G-aware provides comprehensive insights into the leaders who hold pivotal roles in the governance of the nation. This encompasses essential information about political figures, offering a detailed overview of their background, roles, and responsibilities within the government. The platform systematically outlines the basic information of state leaders, presenting key details such as their educational background, political career trajectory, and significant achievements. Users can gain a nuanced understanding of each leader's contributions to the nation's political landscape.";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index <= textContent.length) {
        setDisplayText(textContent.slice(0, index));
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []); 

//tggle text

const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };



    return(
       <div>
            <h1 className="About-G-aware">About Of G-aware</h1> 
                <div className="colorOFG-awre">
                    <div className="G-awareInformation-abou">
                        <p className="G-awareInformation">G-aware is a platform that gives you valuable information about the government. It covers details about political leaders, the budget, government plans, office numbers, helpline numbers, and basic human rights. You can find information about agriculture, cricket, the army, and other essential aspects of the government. It's a one-stop source for basic government information, including updates on government jobs. The platform aims to make government-related information easily accessible and understandable for everyone."
                        </p>
                    </div>
                </div>

                <div>
                    <img src="resources/policalLeader.jpg" className="about_Leader"/>
                    <div className="about_Leader_image">
                    <p className="about-allLeader">{displayText}</p>

                        {/* <p className="about-allLeader">G-aware provides comprehensive insights into the leaders who hold pivotal roles in the governance of the nation. This encompasses essential information about political figures, offering a detailed overview of their background, roles, and responsibilities within the government.The platform systematically outlines the basic information of state leaders, presenting key details such as their educational background, political career trajectory, and significant achievements. Users can gain a nuanced understanding of each leader's contributions to the nation's political landscape.</p> */}
                    </div>
                </div>

                <div className="about-budget_information">
                  <h1 className="budgetAware_level1">Aware Of budget</h1>
                  <div className=" white_boxflex">
                    <img src="resources/budgetComponent.png" className="budgetComponent_image"/>
                    <div className="aboutbudgetwhite_box">

                    <div className="wrapper">
                    <div className="according">
                      {data.map((item, i) => (
                        <div className="item" key={i}>
                          <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? "-" : "+"}</span>
                          </div>
                          <div className={selected === i ? "content show" : "content"}>
                            {item.answer}
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>
                    </div>

                  </div>
                </div>
            
       </div>
    )
}
export default AboutPage