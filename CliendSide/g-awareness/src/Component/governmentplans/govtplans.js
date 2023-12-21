import React, { useEffect, useState } from "react";
import './govtplans.css';
import {Govtplans} from "../constant/navBarConstant";
import { getAllPlans } from "../../redux/ProductRedux/action";
import { useDispatch, useSelector } from "react-redux";

function GovtPlans() {
  const [plansClick, setPlansClick] = useState(false);
  const dispatch = useDispatch();
  const PlansData = useSelector((state) => state.plans.PlansData);

  const fetchPlansData = (url) => {
    setPlansClick(true);
    dispatch(getAllPlans(url))
  };

  ///typing text 

  const [plansText ,setPlansText] = useState('');
  const originalPlansText = "The Government of India has social welfare and social security schemes for India's citizens funded either by the central government, state government or concurrently. Schemes which are fully funded by the central government are referred to as central sector schemes (CS) while schemes mainly funded by the centre and implemented by the states are centrally sponsored schemes (CSS).[1] In the 2022 Union budget of India, there are 740 central sector (CS) schemes.[2][3] and 65 (+/-7) centrally sponsored schemes (CSS).";

  useEffect(()=>{
    let indexValue = 0;
    const intervalIdplans = setInterval(()=>{
      if(indexValue <= originalPlansText.length){
        setPlansText(originalPlansText.slice(0,indexValue));
        indexValue +=1;
      }else{
        clearInterval(intervalIdplans);
      }
    },100);
    return ()=> clearInterval(intervalIdplans);

  }, []);

  return (
    <div>
      <div>
      <marquee>
          <p className="phara">Our website provides comprehensive information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
        </marquee>
      </div>
      <div className="main11">
        <div className="main12">
          <div className="state">
            <h4 className="state1">State Sponsored Scheme list</h4>
          </div>
          <div>
            <ul>
              {Govtplans.plansparagraph.map((item, i) => (
                <li className="plan_list"key={i}>
                  <p className="redcolor1 purple1" onClick={() => fetchPlansData(item.plansApi)}>
                    {item.plansText}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

    
        <div className="main_plan">
          {plansClick && PlansData && PlansData.length > 0 ? (
            PlansData.map(({ id, planName, sector, about, plan_name,image }) => (
              <div key={id} className="plan_box1">
                <img src={image} className="plans_image"/>
                <h1>{planName}</h1>
                <p className="sector">{sector}</p>
                <p className="About_plans">{about}</p>
                <p>{plan_name}</p>
              </div>
            ))
          ) : plansClick && !PlansData ? (
            <p>Loading....</p>
          ) : (
            <p>No plans data</p>
          )}
        </div>
      </div>
<div className="dairy_plans">
  <div className="plans_whitebox">
    <div className="whatis_plansbox">
      <div>
        
          <h1 className="whatis_benifitplas">....what is Sechemes/plans....</h1>
          <h3 className="whatis_benifitplas1">How does it benefit people.....?</h3>
          <h4 className="whatis_benifitplas2">How many components are there in benefit schemes?</h4>
        
      <p className="plan_typeingText">{plansText}</p>

      </div>


    <div className="wrap animate pop">
              <div className="overlay">
                <div className="overlay-content animate slide-left delay-2">
                  <p className="h1cssclass animate slide-left pop delay-4">Basic-aware</p>
                  <p className=" paratgrhaph_pans animate slide-left pop delay-5" style={{ color: 'white', marginBottom: '2.5rem' }}>Central: <em>GovernmentPlans</em></p>
                </div>
                <div className="image-content animate slide delay-5"></div>
                <div className="dots animate">
                  <div className="dot animate slide-up delay-6"></div>
                  <div className="dot animate slide-up delay-7"></div>
                  <div className="dot animate slide-up delay-8"></div>
                </div>
              </div>
              <div className="text_animation">
                <p><img className="inset" src="https://www.infofriendly.com/wp-content/uploads/2019/08/elets-2nd-ejharkhand-summit-2016-g-s-shekhawat-directordirect-benefit-transfer-government-of-india-1-638.jpg" alt="" /><em>Aware  of Government benefit plans for people </em> government plans acrossEducation,Healthcare,Infrastructure,Economy,Environment ,Social Welfare these sectors collectively aim to create a positive impact by addressing the foundational elements of well-being.</p>
                <p>Education and healthcare empower individuals, infrastructure and the economy provide the necessary framework for growth, environmental initiatives secure a sustainable future, and social welfare measures ensure that the benefits of progress are shared equitably.</p>
                <p>Together, these plans work towards building a society that is not only prosperous but also inclusive, sustainable, and supportive of the well-being of all its citizens.</p>
                
              </div> 
          </div>
    </div>

        

    </div>
</div>
      


    </div>
  );
}

export default GovtPlans;
