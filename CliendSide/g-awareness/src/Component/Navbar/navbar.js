import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar1">
                <div> 
                    <div className="line1">
                        <select id="cars">
                                <option value="saab">Urdu</option>
                                <option value="vw">Telugu</option>
                                <option value="audi" selected>Hindi</option>
                                <option value="audi" selected>English</option>
                        </select>
                        <div className="skip"><p>skip main content |</p></div>

                        <div className="Dark">
                            <p className="mood">Dark Mode |</p>

                        </div>
                        
                             {/* <p className="about">about</p>
                         */}
                    </div>
                        <div className="flex">
                                <img src="resources/flag.png" className="img22"/>
                                <img src="resources/govtlogo.png" className="img1"/>
                                 <input type="text" placeholder="search" className="search1"></input><br/>
                                {/* <img src="resources/search1.png" className="btn11"/> */}
                                {/* <div className="image"></div> */}
                                <span className="sign11">sign up</span>
                                <span className="login11">login</span>
                                <div className="login11">about</div>
                            
                        </div>
                        <hr/>
                        <div className="nav">
                            {/* <span img src="resources/navbarc.png" className="img3">Topic</span> */}

                            <div>
                                    <select className="backk bottom">
                                        <option value="">Topics</option>
                                        <option value="option1">poltical leader</option>
                                        <option value="option2">Government budjet</option>
                                        <option value="option3">Government plans</option>
                                        <option value="option3">Government office numbers</option>
                                        <option value="option3">indian most beatiful torist place</option>
                                        <option value="option3">Help_line number</option>
                                    </select>
                            </div>
                                        <span className="poltical bottom">Political leaders</span> 
                                        <span className="poltical bottom">Government budjet</span> 
                                        <span className="poltical bottom">Government plans</span>
                                        <span className="poltical bottom">Government office number</span>
                                        <span className="poltical bottom">Tourist place</span>
                                        <span className="poltical bottom">Help_line numbers</span>
                        </div>
                            
                    </div>
        </nav>
            
    )
}
export default Navbar;
