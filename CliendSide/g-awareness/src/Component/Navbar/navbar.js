
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { HeadData, Languages, NavItem, Topics, aboutlink } from '../constant/navBarConstant';

function Navbar({ input, setInputdata, onClickfunction }) {
  return (
    <nav className="navbar_navbar1">
      <div>
        <div className="navbar_line11">
          <select id="navbar_cars">
            {Languages.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          {HeadData.map((item, i) => (
            <div className={`skip ${item === "Skip main content |" ? null : "Dark"}`}>
              <p className={item === "Skip main content |" ? null : "mood"}>{item}</p>
            </div>
          ))}
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
              <button class="dropbtn">
                Human Right <i className="fa fa-angle-double-down"></i>
              </button>
              <div class="dropdown-content">
                <i class="fa fa-angle-up"></i>
                <a href="#"><img src='resources/arrow.png' className='navbar_arrow'/> Right to Equality:</a>
                                    <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right to Freedom: </a>
                                    <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right against Exploitation: </a>
                                     <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right to Freedom of Religion:  </a>
                                    <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Cultural and Educational Rights:  </a>
                                     <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right to Constitutional Remedies:  </a>
                                     <a href="#"> <img src='resources/arrow.png' className='navbar_arrow'/>Right to Education:  </a>
                                
              </div>
            </div>
          </div>

          {/* <div className="login11">about</div> */}
          {aboutlink.map((item, index) => (
            <div key={index} className='login11'>
              {item.abouttext}
            </div>
      ))}
        </div>
        <hr />
        <div className="nav">
          <div>
            <select className="backk bottom">
              {Topics.map((data, i) => (
                <option key={i} value={data.value}>
                  {data.text}
                </option>
              ))}
            </select>
          </div>
          {NavItem.map((item, i) => (
            <span key={i}>
              <Link to={item.link} className="poltical bottom">
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

