import React, { useState } from "react";
import './Tourist.css';
import { TouristButton } from "../constant/navBarConstant";
import { useDispatch, useSelector } from "react-redux";
import { getAllTourist } from "../../redux/ProductRedux/action";

function Tourist(){
    const [touristClick ,setTourist] = useState(false);
    const dispatch = useDispatch();
    const TouristData = useSelector((state)=> state.tour.TouristData);

    console.log("Component TouristData:",TouristData);

    const fetchTouristData = (url)=>{
        setTourist(true);
        dispatch(getAllTourist(url));
    }
    // const TouristSlider = ({ touristClick, TouristData }) => {
    // }
    return(
        <div>

   
        <div>
            <marquee>
    
            <p className="phara">Our website provides comprehensive  information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
            </marquee>
        </div>
        <div className="mainbox">
          <div className="mainbox1">
            <div className="firstbox">
                        <img src="/resources/Budget1.png" className="dolar"/>
                        <h2 className="boderbottom">Tourist Place </h2>
                        
                    </div> 
                    <div className="tourist">
                        <ul>
                           
                            {
                                TouristButton.TouristButtonData.map((item,first)=>(
                                    <li key={first} className="Tourist_text">
                                        <p  onClick={()=> fetchTouristData(item.touristApi)}>{item.touristText}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
             
            </div>
            <div className="mainbox2">
                {
                    touristClick && TouristData.length>0 ?(
                        TouristData.map(({id,place,state,image})=>(
                            <div>
                                <div className="Tourist_second">
                                <div key={id}>
                                    <img src={image} className="Tourist_Img"/>
                                    <p className="Tourist_Place">{place}</p>
                                    <p className="Tourist_state">{state}</p>
                                </div>
                            </div>
                            </div>
                            
                        ))
                        
                        ): TouristData && !TouristData ?(
                            <p>loading.....</p>
                        ):(
                            <p>No tourist data</p>


                        
                    
                )}
                {/* <div className="tourist-container">
  {touristClick && TouristData.length > 0 ? (
    TouristData.map(({ id, place, state, image }) => (
      <div key={id} className="tourist-item">
        <img src={image} alt={`Tourist place ${id}`} className="Tourist_Img" />
        <p className="Tourist_Place">{place}</p>
        <p className="Tourist_state">{state}</p>
      </div>
    ))
  ) : TouristData && !TouristData ? (
    <p>loading.....</p>
  ) : (
    <p>No tourist data</p>
  )}
</div> */}
               
            
            </div>
        </div>
       
        
   </div>

       
    
    
    );
}
export default Tourist
























// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllTourist } from "../../redux/ProductRedux/action";
// import './Tourist.css';
// import { TouristButton } from "../constant/navBarConstant";

// function Tourist() {
//   const [touristIndex, setTouristIndex] = useState(0);
//   const dispatch = useDispatch();
//   const TouristData = useSelector((state) => state.tour.TouristData);

//   console.log("Component TouristData:", TouristData);

//   const fetchTouristData = (url) => {
//     dispatch(getAllTourist(url));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTouristIndex((prevIndex) => (prevIndex + 1) % TouristData.length);
//     }, 5000); // Adjust the interval (in milliseconds) as needed

//     return () => clearInterval(interval);
//   }, [TouristData]);

//   return (
//     <div>
//       <div>
//         <marquee>
//           <p className="phara">Our website provides comprehensive information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
//         </marquee>
//       </div>
//       <div className="mainbox">
//         <div className="mainbox1">
//           <div className="firstbox">
//             <img src="/resources/Budget1.png" className="dolar" />
//             <h2 className="boderbottom">Tourist Place </h2>
//           </div>
//           <div className="tourist">
//             <ul>
//               {TouristButton.TouristButtonData.map((item, first) => (
//                 <li key={first}>
//                   <p className="Tourist_text redcolor purple" onClick={() => fetchTouristData(item.touristApi)}>{item.touristText}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="mainbox2">
//           <div className="tourist-container">
//             {TouristData && TouristData.length > 0 ? (
//               TouristData.map(({ id, place, state, image }, index) => (
//                 <div
//                   key={id}
//                   className="tourist-item"
//                   style={{ transform: `translateX(${-touristIndex * 100}%)` }}
//                 >
//                   <img className="Tourist_Img" src={image} alt={`Tourist place ${id}`}  />
//                   <p className="Tourist_Place">{place}</p>
//                   <p className="Tourist_state">{state}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No tourist data</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tourist;
