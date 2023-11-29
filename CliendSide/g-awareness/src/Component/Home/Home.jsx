import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Homepage.css';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
};

const slideImages = [
  {
    url: 'https://static.india.com/wp-content/uploads/2017/03/Bhagat-Singh-Quotes-4.jpg',
  },
  {
    url: 'https://2.bp.blogspot.com/-aCocm6S6B_o/VzRM-1X-o_I/AAAAAAAAHSc/nB_iS_7-p_kIhQyhw5dINQNZhFRuYk0uQCKgB/s1600/Culture-Customs-and-Traditions-of-India.jpg',
  },
  {
    url: 'https://iasexamportal.com/sites/default/files/salient-features-of-the-indian-society-img1.jpg',
  },
  {
    url: 'https://agricoop.gov.in/images/breadcrumb-banner-1.jpg',
  },
  {
    url: 'https://www.nexus-ie.co.uk/wp-content/uploads/2020/05/investment-3247252_1280-1080x675.jpg',
  },
  {
    url: 'https://nhrc.nic.in/sites/default/files/slider-1.jpg',
  },
  {
    url: 'file:///home/jtbb/Desktop/quizer/public/banner.jpg',
  },
  {
    url: 'https://www.india.gov.in/sites/upload_files/npi/files/upaj.jpg',
  },
  {
    url: 'https://www.mha.gov.in/sites/default/files/styles/homepage_top_slider/public/banner1_1_0_0_0.jpg?itok=STbFEEXc',
  },
];

const data = [
  {
    name: 'Agriculture',
    img: '/resources/agriculture.jpg',
  },
  {
    name: 'Cricket',
    img: '/resources/cricket.jpeg',
  },
  {
    name: 'Railway',
    img: '/resources/railway.webp',
  },
  {
    name: 'Army',
    img: '/resources/indian army.jpeg',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
  centerMode: true,
  centerPadding: '25px',
  autoplay: true,
  autoplaySpeed: 3000,
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


  return (
    <div>
      <marquee>
        <p className="phara">
          Our website provides comprehensive information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.
        </p>
      </marquee>

      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>

      <img src="resources/logoindia.webp" className="img4" />

      <div className="marquee-box box2">
        <p className="Basic-Aware">Basic Awareness</p>
        <div className="boxewhite">
          <div className="mainttt">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index}>
                  <div className="card">
                    <img src={d.img} alt={d.name} className="card-image" />
                    <div className="card-content">
                      <h2 className="card-title">{d.name}</h2>
                      <p className="card-text">{d.review}</p>
                      <button className="card-button">Read more</button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="box3">
        <p className="jobs">Indian Government Jobs</p>
        <div className="box4 ">
          <img src="resources/UPSC.webp" className="img10 color3" />
          <img src="resources/psc.png" className="img10 color3" />
          <img src="resources/train .webp" className="img10 color3" />
          <img src="resources/NEET1.webp" className="img10 color3" />
          <img src="resources/CBI.png" className="img10 color3" />
          <button className="viewbtn">view all jobs</button>
        </div>
      </div>

<div className='box55'><p className='qouts1'>Quots</p></div>

      <div className="customItems">
        <img src="resources/john-keats.jpeg"  alt="Person 1" />
        <p>
          I love you the more in that I believe you had liked me for my own sake
          and for nothing else
        </p>
        <p className="customAuthor">- John Keats</p>
      </div>

      <div className="customItems">
        <img src="resources/hemingway.jpg" alt="Person 2" />
        <p>
          But man is not made for defeat. A man can be destroyed but not
          defeated.
        </p>
        <p className="customAuthor">- Ernest Hemingway</p>
      </div>

      <div className="customItems">
        <img src="resources/thomas_edison.jpg" alt="Person 3" />
        <p>I have not failed. I've just found 10,000 ways that won't work.</p>
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



