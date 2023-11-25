// import React, { useState } from "react";
// import './govtplans.css';
// import {Govtplans}from "../constant/navBarConstant";
// import { getAllPlans } from "../../redux/ProductRedux/action";
// import { useDispatch, useSelector } from "react-redux";

// function GovtPlans(){
//     const[plansClick,setPlansClick] = useState(false);
//     const dispatch = useDispatch();
    

//     const PlansData = useSelector((state)=> state.plans.PlansData);
//     // console.log('Rendering GovtPlans component');

//     console.log(PlansData);

//     const fetchPlansData = (url)=> {
        
//         setPlansClick(true);

//         dispatch(getAllPlans(url))
//     };
//     console.log('Rendering GovtPlans component', plansClick, PlansData);

//     return(
//         <div>
        
           
//             <div>
//                 <marquee>
        
//                 <p className="phara">Our website provides comprehensive  information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
//                 </marquee>
//                 </div>
//                 <div className="main11">
//                     <div className="main12">
//                         <div className="state">
//                             <h4 className="state1">State Sponsored Scheme list    </h4 >
//                         </div>
//                         <div>
//                             <ul>
                               
//                                 {
//                                     Govtplans.plansparagraph.map((item,i)=>(
//                                         <li key={i}>
//                                             <p className="redcolor1 purple1" onClick={()=> fetchPlansData(item.plansApi)}>{item.plansText}</p>
//                                         </li>
//                                     ))
//                                 }
//                             </ul>
//                         </div>
                     
//                     </div>
                    
//                              {/* <div className="main13">
//                                     {plansClick && !PlansData ? (
//                                     <p>Loading....</p>
//                                     ) : (
//                                     PlansData && PlansData.length > 0 ? (
//                                         PlansData.map((item, index) => (
//                                         <div key={index} className="plan_box">
//                                             {/* <p>ID: {item.id}</p> 
//                                             <div className="color_box">
//                                                 <div className="plan_box1">
//                                                         <p className="planeName"> {item.planName}</p>
//                                                         <p>{item.sector}</p>
//                                                         <p>{item.about}</p>
//                                                         <p>{item.plan_name}</p>
//                                                 </div>
//                                             </div>
                                            
                                        
//                                         </div>
//                                         ))
//                                     ) : (
//                                         <p>No plans data</p>
//                                     )
//                                     )}
//                                 </div>  */}


//                             <div className="main13">

//                                 {plansClick && PlansData && PlansData.length > 0 ? (
//                                         PlansData.map(({ id, planName, sector, about, plan_name }) => (
//                                             <div className="plan_box1">
//                                             <div key={id}>
//                                                 <div >
//                                                     {/* <p>{id}</p> */}
//                                                     <p >{planName}</p>
//                                                     <p className="sector">{sector}</p>
//                                                     <p className="About_plans">{about}</p>
//                                                     <p>{plan_name}</p>
//                                                 </div>
//                                             </div>
//                                             </div>
//                                         ))
//                                         ) : plansClick && !PlansData ? (
//                                         <p>Loading....</p>
//                                         ) : (
//                                         <p>No plans data</p>
//                                         )}


//                                 </div> 


//                     </div>

//                 </div>
                
    


//     );
// }
// export default GovtPlans














import React, { useState } from "react";
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
            PlansData.map(({ id, planName, sector, about, plan_name }) => (
              <div key={id} className="plan_box1">
                <p>{planName}</p>
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
    </div>
  );
}

export default GovtPlans;
