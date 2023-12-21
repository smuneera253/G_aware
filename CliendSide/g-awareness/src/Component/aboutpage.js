import React, { useEffect, useState } from "react";
import './aboutpage.css';
import { data } from "./constant/navBarConstant";

function AboutPage(){
  
   const [displayText, setDisplayText] = useState('')
  const textContent = "G-aware provides comprehensive insights into the leaders who hold pivotal roles in the governance of the nation. This encompasses essential information about political figures, offering a detailed overview of their background, roles, and responsibilities within the government. The platform systematically outlines the basic information of state leaders, presenting key details such as their educational background, political career trajectory, and significant achievements. Users can gain a nuanced understanding of each leader's contributions to the nation's political landscape....";

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

  //scond typing animation 

  const [typeplan, setTypeplans] = useState('');
  const typingplans =
    "Government benefit plans and schemes vary widely across countries and regions. These programs are often designed to provide financial assistance, healthcare, education, and support to citizens in need. Here are some common types of government benefit plans or schemes:Social Security,( Provides financial support to individuals who are retired, disabled, or unemployed. It may also include benefits for survivors and dependents.)Healthcare Programs,(Medicare: Provides health insurance for individuals aged 65 and older.Medicaid: Offers healthcare coverage to low-income individuals and families.)Unemployment Benefits,( Provides financial assistance to individuals who have lost their jobs.)Housing Assistance,(Section 8 Housing: Subsidizes housing costs for low-income individuals and families.)Food Assistance,(Supplemental Nutrition Assistance Program (SNAP)Education Grants and Scholarships,(Scholarship Programs,Child Care Assistance,Disability Benefits,Veteran Benefits,Worker's Compensation,Tax Credits,Environmental Programs,Small Business Grants,Agricultural Subsidies,Pension Plans,Maternity and Family Leave";

  useEffect(() => {
    let start = 0;
    const intervalId = setInterval(() => {
      if (start <= typingplans.length) {
        // setTypeplans((prevTypeplan) => prevTypeplan + typingplans[start]);
        setTypeplans(typingplans.slice(0, start));

        start += 1;
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
                            <span className="minis_plush">{selected === i ? "-" : "+"}</span>
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

                <div className="aboutpage_level1">
                  <h1 className="Aware-Benefit">Aware of Government Benefit Plans</h1>
                  <div className="Aware-Benefitwhite_box">
                    <img src="resources/sceam.jpg" className="sceam_image"/>
                    <div className="typeplan_about">{typeplan}</div>
                  </div>
                </div>

                <div className="office_number">
                <h1 className="HelpLine-Number">HelpLine Number</h1>

                  <div className="office_number_whitebox">
                    <img src="resources/emergency-call.avif"/>
                   
                    <div className="helpline_text"> G-aware website, users can access a wealth of information and assistance by exploring the site's features. To begin, simply enter the website's URL in the browser's address bar and press Enter. Look for a dedicated "Help" or "Support" section, typically found in the navigation menu or website footer. If seeking assistance related to a specific line number or topic, utilize the site's search function by entering relevant keywords. For more personalized support or technical issues, check for contact information such as email addresses, phone numbers, or contact forms to reach out directly to the website's customer support. Additionally, explore user guides, manuals, or community forums within the website to access detailed information and engage with other users or administrators. Familiarizing oneself with these resources ensures a smoother and more informed experience on the G-aware website.</div>
                  </div>
                </div>

                <div className="humavalue_about">
                  <div className="humavalue_about_whitebox"></div>
                </div>
            
       </div>
    )
}
export default AboutPage