// import React from "react";
// import './footer.css';
// import { footerdata } from "../constant/contantfooter";

// function Footer(){
//     return(
//         <div className="top_foter1">
//              <div> <div className="box611"><span className="back11">back to top</span></div>
//             <div className="box71">
//                 <div className="aboutus1">

//                     {
//                         footerdata.map((item,i)=>(
//                             <div key={i} className="foter1">
//                                 <h4>{item.title}</h4>
//                                 {
//                                     item.SubText.map((data,index)=>
//                                         <p>{data}</p>
//                                     )
//                                 }
//                             </div>
//                         ))
//                     }

//                 </div>

//                 <hr />
//                 <div className="icon21">

//                     <img className="Twitter1" src="resources/Twitter.png" alt="image" />
//                     <img className="linkdil1" src="resources/linkdil.png" alt="image" />
//                     <div>
//                         <img className="facebook1" src="resources/facebook.webp" alt="image" />
//                     </div>
//                 </div>
                

//                 <p></p>
               <p className="this">This website offers comprehensive government information, job notifications, and insights on Indian culture, cricket, and agriculture.</p>
//             </div>
//         </div>
//         </div>
//     );
// }
// export default Footer











import React from "react";
import './footer.css';
import { FooterIconLink, footerdata } from "../constant/contantfooter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="top_foter1">
      <div>
        <div className="foter_box611">
          <span className="foter_back11">
            {/* <Link to='/home'> */}
                
                {/* <p className="footer_top">back to top</p> */}

                <a href="#navbar_navbar1"><p className="footer_top">back to top</p></a>




                {/* <a  href="#UPSC_MAinBoxHead4">Skip to main Content</a> */}

            {/* </Link> */}
            
            </span>
        </div>
        <div className="foter_box71">
          <div className="foter_aboutus1">
            {footerdata.map((item, i) => (
              <div key={i} className="foter_foter1">

                <h4>{item.title}</h4>

                {item.SubText.map((data, index) => (
                  
                  <p className="data_foter" key={index}>{data}</p>
                ))}
              </div>
            ))}
          </div>
          <hr className="foter_line"/>
          <div className="foter_icon21">
            {/* <img className="foter_Twitter1" src="resources/Twitter.png" alt="image" />
            <img className="foter_linkdil1" src="resources/linkdil.png" alt="image" />
            <div>
              <img className="foter_facebook1" src="resources/facebook.webp" alt="image" />
            </div> */}


<div>
      {FooterIconLink.map((item, index) => (
        <a key={index} href={item.FooterLink} target="_blank" rel="noopener noreferrer">
          <img
            className={`footer_icon_${index + 1} ${
              index === 0 ? 'foter_Twitter1' : index === 1 ? 'foter_linkdil1' : 'foter_facebook1'
            }`}
            src={item.FooterImage}
            alt="Social Icon"
          />
        </a>
      ))}
    </div>
         
          </div>
          <p className="foter_this1 ">This website offers comprehensive government information, job notifications, and insights on Indian culture, cricket, and agriculture.</p>

        </div>
      </div>
    </div>
  );
}

export default Footer;
