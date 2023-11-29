// // import React from "react";

// // export function componenet(props){
// //     return(
// //         <div>hello world{props.name}</div>
// //     );
// // }
// //  export default componenet;



// import React from "react";

// function componenet(){
//     return(
//         <div>
//             <div></div>
//             <button></button>

            
//         </div>
//     )
// }
// export default componenet



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './pee.css';

function Slidercarozal() {
  const data = [
    {
      name: `satyagrah`,
      img: `/resources/flower.jpeg`,
      review: `Hi, hello, welcome to Muneera's beautiful website to get information about the Satyagrah movement.`,
    },
    {
      name: `muslim leag`,
      img: `/resources/flower3.png`,
      review: `Hi, hello, welcome to Muneera's beautiful website to get information about the Muslim League movement.`,
    },
    {
      name: `environment`,
      img: `/resources/indian-culture.jpg`,
      review: `Hi, hello, welcome to Muneera's beautiful website to get information about the Environmental movement.`,
    },
    {
      name: `flower`,
      img: `/resources/flowersss.png`,
      review: `Hi, hello, welcome to Muneera's beautiful website to get information about the Flower movement.`,
    },
];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed (milliseconds) for automatic sliding
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true, // Allow variable width for cards
    centerMode: true, // Center the active card
    centerPadding: "20px", // Set the gap between cards
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Adjust the speed (milliseconds) for automatic sliding
  };

  return (
    <div className="main">
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
  );
}

export default Slidercarozal;

