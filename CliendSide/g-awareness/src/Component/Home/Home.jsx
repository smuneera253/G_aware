import React, { useState, useEffect, useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Homepage.css';
import { Link } from 'react-router-dom';


// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
//   height: '600px',
// };

// const slideImages = [
//   {
//     url: 'https://static.india.com/wp-content/uploads/2017/03/Bhagat-Singh-Quotes-4.jpg',
//   },
  // {
  //   url: 'https://2.bp.blogspot.com/-aCocm6S6B_o/VzRM-1X-o_I/AAAAAAAAHSc/nB_iS_7-p_kIhQyhw5dINQNZhFRuYk0uQCKgB/s1600/Culture-Customs-and-Traditions-of-India.jpg',
  // },
  // {
  //   url: 'https://iasexamportal.com/sites/default/files/salient-features-of-the-indian-society-img1.jpg',
  // },
  // {
  //   url: 'https://agricoop.gov.in/images/breadcrumb-banner-1.jpg',
  // },
  // {
  //   url: 'https://www.nexus-ie.co.uk/wp-content/uploads/2020/05/investment-3247252_1280-1080x675.jpg',
  // },
  // {
  //   url: 'https://nhrc.nic.in/sites/default/files/slider-1.jpg',
  // },
//   
//   {
//     url: 'https://www.india.gov.in/sites/upload_files/npi/files/upaj.jpg',
//   },
//   {
//     url: 'https://www.mha.gov.in/sites/default/files/styles/homepage_top_slider/public/banner1_1_0_0_0.jpg?itok=STbFEEXc',
//   },
// ];






const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
};

const slideImages = [
  {
    url: 'https://www.india.gov.in/sites/upload_files/npi/files/upaj.jpg',
  },
  // ... (other images)
  {
    url: 'https://www.mha.gov.in/sites/default/files/styles/homepage_top_slider/public/banner1_1_0_0_0.jpg?itok=STbFEEXc',
  },
  {
        url: 'https://knowindia.india.gov.in/assets/images/banner/inr-banner-my-pride.jpg',
   },
   {
    url: 'https://nhrc.nic.in/sites/default/files/slider-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1600387832732-47302735924b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // {
  //   url: 'https://agricoop.gov.in/images/breadcrumb-banner-1.jpg',
  // },
  // {
  //   url: 'https://iasexamportal.com/sites/default/files/salient-features-of-the-indian-society-img1.jpg',
  // },
  // {
  //   url: 'https://2.bp.blogspot.com/-aCocm6S6B_o/VzRM-1X-o_I/AAAAAAAAHSc/nB_iS_7-p_kIhQyhw5dINQNZhFRuYk0uQCKgB/s1600/Culture-Customs-and-Traditions-of-India.jpg',
  // },
];
















const data = [
  {
    name: 'Mahatma Gandhi',
    img: 'https://tse3.mm.bing.net/th?id=OIP.IBzMZb7LvXB24AN7zGrWMQHaJr&pid=Api&P=0&h=180',
  },
  {
    name: 'Bhagat Singh',
    img: 'https://wallpapercave.com/wp/wp7186102.jpg',
  },
  
  {
    name: 'Maulana Azad',
    img: 'https://contendingmodernities.nd.edu/wp-content/uploads/2020/08/Maulana_Abul_Kalam_Azad.jpg',
  },
  {
    name: 'A. P. J. Abdul Kalam',
    img: 'https://wallpapercave.com/wp/wp9629751.jpg',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
  centerMode: true,
  centerPadding: '25px',
  autoplay: true,
  autoplaySpeed: 3000,
  backgroundColor:"red"
};

const Home = () => {

  //quotes slider
  const [itemIndex, setItemIndex] = useState(1);

  const plusItems = (n) => {
    changeItems(itemIndex + n);
  };

  const currentItem = (n) => {
    changeItems(n);
  };

  const changeItems = (n) => {
    let newIndex = n;
    const items = document.getElementsByClassName("customItems");
    const dots = document.getElementsByClassName("customDot");

    if (n > items.length) {
      newIndex = 1;
    }

    if (n < 1) {
      newIndex = items.length;
    }

    setItemIndex(newIndex);

    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    items[newIndex - 1].style.display = "block";
    dots[newIndex - 1].className += " active";
  };

  useEffect(() => {
    // Automatically change items every 3000 milliseconds (3 seconds)
    const intervalId = setInterval(() => {
      plusItems(1);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [itemIndex]); // Dependency array to ensure the effect runs when itemIndex changes



// Govt Jobs slider



const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);















// const timelineRef = useRef(null);

// useEffect(() => {
//   const handleScroll = () => {
//     const timelineItems = timelineRef.current.querySelectorAll('.timeline.timeline li');

//     timelineItems.forEach(item => {
//       const rect = item.getBoundingClientRect();
//       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//         // Check if scrolling down
//         if (window.scrollY > (window.scrollY || document.documentElement.scrollTop)) {
//           item.style.animationName = 'fadeInFromRight';
//         }
//       }
//     });
//   };

//   // Add a scroll event listener when the component mounts
//   window.addEventListener('scroll', handleScroll);

//   // Remove the scroll event listener when the component unmounts
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []); // Empty dependency array ensures the effect runs only once on mount









  return (
    <div>
      <marquee>
        <p className="phara">
          Our website provides comprehensive information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.
        </p>
      </marquee>
      <div className='image_box'>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
      </div>


      <img src="resources/logoindia.webp" className="img4" />

      <div className="marquee-box box2">
        <p className="Basic-Aware">Freedom Fighters</p>
        <div className="boxewhite">
       


          <div className="mainttt">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index}>
            <div className="card">
              <img src={d.img} alt={d.name} className="card-image" />
              <div className="card-content">
                <h5 className="Homecard-title">{d.name}</h5>
                <p className="card-text">{d.review}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
        </div>
      </div>







{/* box card syle */}
<p className="Basic-Aware">Basic Awareness</p>
<div className="box-container">

      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center" style={{ backgroundImage: "url('https://cosmosmagazine.com/wp-content/uploads/2020/02/180606-agriculture-full.jpg')" }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Agriculture</h3>
              <p> In This website provide agriculture information</p>
              <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
            </div>
          </div>
          <div className="flip-box-back text-center" style={{ backgroundImage: "url('https://cosmosmagazine.com/wp-content/uploads/2020/02/180606-agriculture-full.jpg')" }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Agriculture</h3>
              <p>In this website provide agriculture information</p>
              <Link to='/agri'>
              <button className="flip-box-button">Learn More</button>

              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6916613.jpg')" }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Cricket</h3>
              <p>In this website provide cricket information</p>
              <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
            </div>
          </div>
          <div className="flip-box-back text-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6916613.jpg')" }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Cricket</h3>
              <p>In this website provide cricket information</p>
              <Link to='/Cricket'>
              <button className="flip-box-button">Learn More</button>

              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center" style={{ backgroundImage: "url('https://tse4.mm.bing.net/th?id=OIP.SuYEcWyildzw6ZkWSbHTEAHaEo&pid=Api&P=0&h=180')" }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Army</h3>
              <p>In this website provide army information</p>
              <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
            </div>
          </div>
          <div className="flip-box-back text-center" style={{ backgroundImage: "url('https://tse4.mm.bing.net/th?id=OIP.SuYEcWyildzw6ZkWSbHTEAHaEo&pid=Api&P=0&h=180')" }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Army</h3>
              <p>In this website provide army information</p>
              <Link to='/army'>
              <button className="flip-box-button">Learn More</button>

              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center" style={{ backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')" }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
            </div>
          </div>
          <div className="flip-box-back text-center" style={{ backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')" }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <button className="flip-box-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="box3_Home">
        <h2 className="jobs">Indian Government Jobs Syllabus</h2>
        <div className="box4 ">
        <Link to='/upse'>
              <img src="resources/UPSC.webp" alt="UPSC Image" className="img10 color3" />
        </Link>
              
              
          <Link to='/beid'>
              
              <img src="https://www.exams88.in/wp-content/uploads/2021/02/B.Ed-Entrance-Exam-2023.jpg" className="img10 color3" />

            </Link>
          
          
          
          <Link to="/rail">
              <img src="resources/train .webp"  alt="Train" className="img10 color3" />
          </Link>         

        <Link to='/Neet'>
                
            <img src="resources/NEET1.webp" className="img10 color3" />

        </Link>
        
          <Link to='/Cbi'>
              <img src="resources/CBI.png" className="img10 color3" />

          </Link>


        </div>
      </div>















              <div className='HomeTrangle_design'></div>




              <h2 className='Home_classificationHeading'>classification of  fundamental rights</h2>

              <main ref={ref}>

                    <div className="child-one">
                      <img src='https://media.geeksforgeeks.org/wp-content/uploads/20220921154048/FundamentalRights1-660x389.png'/>
                    </div>
                    <div className="child-two">
                    {/* <div className='Home_classification' > */}

                              <ul className="timeline">
                                <li>
                                  <span className="badge badge-primary badge-pill font-weight-normal  frontRight">Right to equality ( 14 - article 18)</span>
                                </li>
                                <li>
                                  <span className="badge badge-primary badge-pill font-weight-normal frontRight">Right to freedom  ( 19 - article 22)</span>
                                </li>
                                <li>
                                  <span className="badge badge-primary badge-pill font-weight-normal frontRight">Right to against exploitation ( 23 - article 24)</span>
                                </li>
                                <li>
                                  <span className="badge badge-primary badge-pill font-weight-normal frontRight">Right to freedom of religion  ( 25 - article 28)</span>
                                </li>
                                <li>
                                  <span className="badge badge-primary badge-pill font-weight-normal frontRight">Culture and  educational rights(29 - arcles 30)</span>
                                </li>
                              </ul>

                              </div>

                    {/* </div> */}
               
               
               
               
               
              
               

               </main>
               <div className='Home_HelpLineNUmbers'>
               <h4 className='Home_HelpLineNUmbers11'>Helpline Number</h4>

               </div>

<div className='Home_help'>
                
{/* <h4>Helpline Number</h4> */}

<div className="ag-format-container">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
            <img src='https://www.emri.in/wp-content/uploads/2017/03/dail-100-logo.png' className='imageHome_logohelp1'/>
            </div>

            <div className="ag-courses-item_date-box">
            
              <span className="ag-courses-item_date">Police Number</span>
            </div>
          </a>
        </div>

        {/* Add more course items here */}
        
        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
            <img src='https://ik.imagekit.io/stapleaffiliates/prizehometickets/assets/images/charities/kids-helpline-logo.png' className='imageHome_logohelp1'/>
            </div>

            <div className="ag-courses-item_date-box">
              Start
              <span className="ag-courses-item_date">Kids HelpLine</span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
            <img src='https://www.childlineindia.org/images/footer-call-us.png' className='imageHome_logohelp'/>
            </div>

            <div className="ag-courses-item_date-box">
            
              <span className="ag-courses-item_date">Night_day,anyChitvation</span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
            <img src='https://play-lh.googleusercontent.com/D3cHAUvsC97GpPw8brZJ554Pe6k_K0qDbpajn1nvqwtd1CBHnoQsAMBG_Jy_NbTilzEn=s180' className='imageHome_logohelp'/>
            </div>

            <div className="ag-courses-item_date-box">
              
              <span className="ag-courses-item_date">National Consumer Helpline</span>
            </div>
          </a>
        </div>

        {/* ... Add as many course items as needed ... */}
        
      </div>
    </div>



              </div>


{/* cards colo */}


{/* kjhgfd */}
























          <div className='Home_boxTourist'>
      <div className="Home_title">
        <h1 className='Home_headH2'>
          <span style={{ color: '#000000' }}>Tou</span>
          <span style={{ color: '#3F0071' }}>rist</span>
          <span style={{ color: '#610094' }}>Attr</span>
          <span style={{ color: '#610094' }}>acti</span>
          <span style={{ color: '#5f27cd' }}>ons</span>
        </h1>
      </div>


      <div className='Home_backgroundColor'>
      <div className="card1">
        <img src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png" alt="" />
        <h3 className='Home_h333'>Pyramids</h3>
        <p className='Homepage_paragraph'>
          The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt.
          As of November 2008, sources cite either 118 or 138 as the number of identified Egyptian pyramids.
        </p>
      </div>
      {/* Similar structure for card2 and card3 */}
      <div className="card2">
        <img src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png" alt="Eiffel Tower" />
        <h3 className='Home_h333'>Statue of Liberty</h3>
        <p className='Homepage_paragraph'>
          The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor
          in New York City, in the United States.
        </p>
      </div>
      <div className="card3">
        <img src="https://www.pngplay.com/wp-content/uploads/8/Taj-Mahal-Transparent-File.png" alt="" />
        <h3 className='Home_h333'>Taj Mahal</h3>
        <p className='Homepage_paragraph'>
          The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river
          in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor.
        </p>
      </div>
{/* 


      <div className="card3">
        <img src="" alt="" />
        <h3 className='Home_h333'>Taj Mahal</h3>
        <p className='Homepage_paragraph'>
          The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river
          in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor.
        </p>
      </div> */}
      
    </div>
    </div>



















<div className='Home_box55'>
      <p className='qouts1'>Quots</p>
  </div>

      <div className="customItems">
        <img src="resources/john-keats.jpeg"  alt="Person 1" />
        <p className='Qouts_paragraph'>
          I love you the more in that I believe you had liked me for my own sake
          and for nothing else
        </p>
        <p className="customAuthor">- John Keats</p>
      </div>

      <div className="customItems">
        <img src="resources/hemingway.jpg" alt="Person 2" />
        <p className='Qouts_paragraph'>
          But man is not made for defeat. A man can be destroyed but not
          defeated.
        </p>
        <p className="customAuthor">- Ernest Hemingway</p>
      </div>

      <div className="customItems">
        <img src="resources/thomas_edison.jpg" alt="Person 3" />
        <p className='Qouts_paragraph'>I have not failed. I've just found 10,000 ways that won't work.</p>
        <p className="customAuthor">- Thomas A. Edison</p>
      </div>

      <a className="customPrev" onClick={() => plusItems(-1)}>
        {/* ❮ */}
      </a>
      <a className="customNext" onClick={() => plusItems(1)}>
        {/* ❯ */}
      </a>

      <div className="customDot-container">
        <span className="customDot" onClick={() => currentItem(1)}></span>
        <span className="customDot" onClick={() => currentItem(2)}></span>
        <span className="customDot" onClick={() => currentItem(3)}></span>
      </div>
      

    </div>
  );
};

export default Home;



