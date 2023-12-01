import React, { useEffect, useState } from "react";
import './budget.css';
import { BudgetTopic } from "../constant/navBarConstant";
import { useDispatch, useSelector } from "react-redux";
import { getAllBudget } from "../../redux/ProductRedux/action";

function Budget() {
  const [budgetClick, setBudgetClick] = useState(false);
  const dispatch = useDispatch();
  const budgetData = useSelector((state) => state.budget.budgetData);

  console.log(budgetData);

  const fetchBudgetData = (url) => {
    setBudgetClick(true);
    // console.log("Fetching budget data from:", url);
    dispatch(getAllBudget(url));
  };


  const testimonials = [
    {
      id: 1,
      name: 'user1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      name: 'User 2',
      text: 'Proin fringilla neque eget arcu fringilla, ac vestibulum mi tristique.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.LZ-22I7XjH2iRZmMP-8kDAHaEo&pid=Api&P=0&h=180',
    },
  ];

  const [currentIndext, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndext + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndext, testimonials.length]);




  ///youtub
  const [videoVisible, setVideoVisible] = useState(false);

  const handleClick = () => {
    setVideoVisible(!videoVisible);
  };

  const youtubeVideoId = 's2nKZtv-GeM'; // Replace with your actual YouTube video ID

  // typeing text

  const [text, setText] = useState('');
  const originalText = "In government, a budget is a financial plan outlining how public funds will be allocated for various programs, services, and expenses, ensuring transparency and accountability in the use of taxpayers money.    Government budgets also play a crucial role in fostering economic growth, job creation, and social development. By allocating resources responsibly and investing in key areas, governments can positively impact the well-being of their citizens and contribute to the overall prosperity of the nation.";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index <= originalText.length) {
        setText(originalText.slice(0, index));
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration (in milliseconds) to control typing speed

    return () => clearInterval(intervalId);
  }, []); // E




  return (
    <div>
      <div>
        <marquee>
          <p className="phara">Our website provides comprehensive information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
        </marquee>
      </div>

      <div className="Budget_mainbox">
        <div className="budget_scondmainbox">
          <div className="firstbox">
            <img src="/resources/Budget1.png" className="dolar" alt="Budget" />
            <h2 className="boderbottom">Government budget </h2>
          </div>
          <div>
            <ul>
              {BudgetTopic.budgetPara.map((item, i) => (
                <li  className="budget_central budget_state" key={i}>
                  <p onClick={() => fetchBudgetData(item.budgetApi)}>{item.budgetText}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="budget_main">
        {budgetClick && budgetData ? (
            budgetData.length > 0 ? (
              budgetData.map((item, index) => (
                <div className="budget_dispaly">
                  <div key={index}>
                    {/* <p>ID: {item.budget_id}</p> */}
                    <div>
                    <p className="central_box">Central: {item.central}</p>
                    <p className="central_box">Total: {item.total}</p>
                    <p className="central_box">Sector: {item.sector}</p>
                    {/* <p>hello</p> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No budget data</p>
            )
          ) : (
            <p>Loading...</p>
          )}

        
        </div>


        <div className="main4">
          <div className="top">
            <h3 className="lines">more information</h3>
            <ul>
              <li className=" budget_State"><p>Andhra Pradesh</p></li>
              <li className=" budget_State"><p >Karnataka</p></li>
              <li className=" budget_State"><p > Tamil Nadu</p></li>
              <li className=" budget_State"><p>Kerala</p></li>
              <li className=" budget_State"><p>Madhya Pradesh</p></li>
              <li className=" budget_State"><p>Delhi</p></li>
              <li className=" budget_State"><p>Punjab</p></li>
              <li className=" budget_State"><p>Gujarat</p></li>
              <li className=" budget_State"><p>Goa</p></li>
              <li className=" budget_State"><p>Rajasthan</p></li>
              <li className=" budget_State"><p>Odisha</p></li>
            </ul>
          </div>
        </div>
      </div>


        <div className="box_line1"></div>

  {/*card....*/}
  <div className="budget_informationMain">
      <h1 className="budget_information">
       
          More Information Of Budget
        
        </h1>
        <img src="resources/bag-buget.avif" className="img_moreinfo"/>
  </div>

  <div className='body1'>
    
  <div className="containerplans">
        <div className="cardplan">
          <div className="imageplan">
            <img src="resources/agriTomata.jpg"alt="Card" />
          </div>
          <div className="contentplan">
            <h3>Budget On Agriculture</h3>
            <p>
               Agriculture is the process of producing crops and rearing animals for gaining profit.Agriculture provides occupation to a huge Indian population.The contributor to India’s more than 15% GDP is agriculture.Agriculture is the occupation that gives us crops to eat.Fruits, pulses, oil, vegetables, etc things are obtained through agriculture.Agriculture also provides us with leather, cotton, wool, and other animal products.Agriculture can reduce starvation, poverty, and can raise employment to some extent.Budgets show how the government handles its current debt and whether it plans to borrow more, crucial for evaluating its long-term financial well-being.
            </p>
          </div>
        </div>
      </div>
    
    

      </div>
      {/* uytre1 */}
      <div className="body2">
      <div className="containerplans1">
        <div className="cardplan1">
          <div className="imageplan1">
            <img src="resources/education.avif" alt="Card" />
          </div>
          <div className="contentplan1">
            <h3>Budget of Education </h3>
            <p>
              Distribute education funds fairly across all levels and regions based on their specific needs.Distribute education funds fairly across all levels and regions based on their specific needs.Allocate funds for competitive teacher salaries and ongoing professional development to enhance teaching skills.Provide schools with up-to-date textbooks, materials, and technology for effective teaching and learning.Improve learning with technology by investing in computers, internet access, and educational software infrastructure.Invest in special education resources and allocate funds for inclusive facilities, ensuring accessibility for all students, including those with disabilities.
            </p>
          </div>
        </div>
      </div> 
      </div>
      
      {/* jhgfd2*/}

      
    
{/* sanpool1 */}
        <div className="body3">
              <div className="containerplans2">
              <div className="cardplan2">
                <div className="imageplan2">
                  <img src="resources/emergency.avif" alt="Card" />
                </div>
                <div className="contentplan2">
                  <h3>Budget Of Health Care </h3>
                  <p>
                  Healthcare budgets are strategically divided to address diverse needs. Personnel costs cover salaries of essential healthcare professionals. Funding for infrastructure, facilities, and technology supports a robust medical environment. Medications and preventive care receive dedicated resources for comprehensive health management. Administrative costs ensure the smooth functioning of healthcare systems, and targeted allocations for mental health and long-term care demonstrate a commitment to holistic well-being. These budgetary decisions collectively shape a responsive and inclusive healthcare framework.
                  </p>
                </div>
              </div>
            </div>
        </div>
     






   <div >
    <p></p>
      <div className="vedio_box">
        <div className="vedio_box1">

          <div className="information">
              <h1 className="basic">Basic information </h1>

                <h1 className="basic2">A budget is a reflection of the priorities of a government.</h1>
               
                <h1 className="basic3">"A government budget is a key instrument in the government’s ability to address societal needs and priorities." </h1>

                
                <div className="budget_bag">
              <div className="typing-animation basic3_box">{text}</div>
              <img src="resources/bag-buget.avif" className="image_bagBudget"/>
              
              </div>
              <p className="more_information">more information click ...</p>

          </div>



         
          <img src="resources/highanglebusget.jpg" className="image_budget"/>

       
        </div>
       
 <button className="clickCircle" onClick={handleClick}>
        {videoVisible ? 'Hide Video' : 'Show Video'}
      </button>

      {videoVisible && (
        <div className="vedio_Box">
          <iframe  className="vedioyouTube1"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?t=16s`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}  </div>
</div>

               










     
    </div>
  );
}

export default Budget;
