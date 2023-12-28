
import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { HeadData, Languages, NavItem, Topics, aboutlink } from '../constant/navBarConstant';
import { Toggle } from '../Toggle';

function Navbar({ input, setInputdata, onClickfunction }) {
  const [isDark, setIsDark] = useState(true);

  const handleToggleChange = () => {
    setIsDark(!isDark);
  };



  useEffect(() => {


    // Load Google Translate API script dynamically
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate Element
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ autoDisplay: false }, 'google_translate_element');
    };

    return () => {
      // Remove the script when the component is unmounted
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);


    // const sectionIds = ['section1', 'section2', 'section3'];


  return (
    <nav id="navbar_navbar1">
      <div>
        <div className="navbar_line11">
          {/* <select id="navbar_cars">
            {Languages.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select> */}
{/* 
<div className='TApp' data-theme={isDark ? 'dark' : 'light'}>
        <Toggle
          isChecked={isDark}
          handleChange={handleToggleChange}
        />
      </div> */}








          {HeadData.map((item, i) => (
            <div className={`skip ${item === "Skip main content |" ? null : "Dark"}`}>
              <div className={item === "Skip main content |" ? null : "mood"}>{item}</div>
            </div>
          ))}
          {/* <a className="skiMainContent" href="#UPSE_List3">Skip to main Content</a> */}

                  <div id="google_translate_element" className='goole_Nave'></div>

        </div>

        <div className="navbar_flex">
          <a href="home">
            <img src="resources/flag.png" className="navbar_img22" />
          </a>
          <img src="resources/govtlogo.png" className="navbar_img1" />

          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInputdata(e.target.value)}
            value={input}
            className="navbar_search1"
          />

          <img src="resources/search1.png" onClick={onClickfunction} className="navbar_btn11" alt="Search Button" />

          <div class="navbar_navbar">
            <div class="dropdown">


            <div ><Link to="/human"  className="Navvar_aboutlink"> Human Right</Link></div>
            <div ><Link to="/about"  className="Navvar_aboutlink">About</Link></div>


              {/* <div className="poltical navbar_bottom">
                Human Right <i className="fa fa-angle-double-down"></i>
              </div> */}
              {/* <div class="dropdown-content">
                <i class="fa fa-angle-up"></i>
                <a href="#"><img src='resources/arrow.png' className='navbar_arrow'/> Right to Equality:</a>
                                    <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right to Freedom: </a>
                                    <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right against Exploitation: </a>
                                     <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right to Freedom of Religion:  </a>
                                    <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Cultural and Educational Rights:  </a>
                                     <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right to Constitutional Remedies:  </a>
                                     <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right to Education:  </a>
                                
              </div> */}
            </div>
          </div>


          {/* <div className="login11">about</div> */}

          
        </div>
        <hr className='Navbar_horizaltal'/>
        <div className="nav">
          <div>
            <select className="backk navbar_bottom">
              {Topics.map((data, i) => (
                <option key={i} value={data.value}>
                  {data.text}
                </option>
              ))}
            </select>
          </div>
          {NavItem.map((item, i) => (
            <span key={i}>
              <Link to={item.link} className="poltical navbar_bottom">
                {item.text}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

