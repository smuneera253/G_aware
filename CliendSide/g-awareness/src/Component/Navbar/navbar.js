import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { HeadData, Languages, NavItem, Topics ,Imageslink} from '../constant/navBarConstant';

function Navbar(){
    return(
        <nav className="navbar1">
                <div> 
                    <div className="line1">
                        <select id="cars">
                            {
                                Languages.map((item,i) =><option key={i} value={item}>{item}</option>)
                            }
                        </select>
                        {
                            HeadData.map((item, i) =>(
                                <div className={`skip ${item == "Skip main content |" ? null : "Dark"}`}>
                                    <p className={item== "Skip main content |" ? null : "mood"}>{item}</p>
                                </div>
                            ))
                        }
                    </div>
                        <div className="flex">
                        
                         {/* {
                            Imageslink.map((item,i)=>
                             <img className="img22"src={item} className="img1" src={item}/>)
                        }  */}
                                <img src="resources/flag.png" className="img22"/>
                                <img src="resources/govtlogo.png" className="img1"/>
                                 <input type="text" placeholder="search" className="search1"></input><br/>
                                <img src="resources/search1.png" className="btn11"/>
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
                                        {
                                            Topics.map((data,i) => <option key={i} value={data.value}>{data.text}</option>)
                                        }
                                    </select>
                            </div>
                            {
                                NavItem.map((item,i) => (
                                    <span>
                                        <Link to={item.link} className='poltical bottom'>
                                            {item.text}
                                        </Link>
                                    </span>
                                ))
                            }
                        </div>
                            
                    </div>
        </nav>
            
    )
}
export default Navbar;
