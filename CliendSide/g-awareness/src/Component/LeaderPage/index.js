import React, { useState } from "react";
import './leaderpage.css'
import { learderCatogories, marqueedata } from "../constant/navBarConstant";
import { useDispatch, useSelector } from "react-redux";
import { getAllleader } from "../../redux/ProductRedux/action";
import Pagenation from "../pagenation";


// import { Navbar } from "../Navbar/navbar";



function Leader({ LeaderData }) {
    const [click, setClick] = useState(false);
    const dispatch = useDispatch();

    const fetchLeaderData = (url) => {
        setClick(true);
        dispatch(getAllleader(url))
    }











    

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = LeaderData.slice(firstPostIndex, lastPostIndex)

    return (
        <div>
            {
                marqueedata.map((item) => (
                    <p>
                        <marquee className="phara">{item}</marquee>
                    </p>
                ))
            }

            <div className="leader_main">
                <div className="leader1 shad ">
                    <div className="leader2 ">
                        <img src="resources/people.png" className="people" />

                        <h2 className="leader_bottom1">Poltical leaders</h2>

                    </div>
                    <div>
                        <ul className="fixing">
                            {
                                learderCatogories.para.map((item, i) => (
                                    <li key={i}>
                                        <p  className="PM CM pmcolor" onClick={() => fetchLeaderData(item.api)} > {item.text}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* <img src="resources/people.png" className="people" /> */}
                        <div>
                            <img src="resources/right.png" className="cusor" />
                            <Pagenation totalPosts={LeaderData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />

                        </div>


                    </div>

                </div>
                <div className="leader_main2">

                    {
                        (click && currentPosts) && currentPosts
                            ?.map(({ pm_id, name, starting_date, ending_date, image }) => (

                                <div class="data color">


                                    <div key={pm_id} class="leaderData">
                                        <div >
                                            <img src={image} alt="no image" className="pmImage" />
                                            <div className="pm_name">
                                                <p className="pmName">Name</p>
                                                <div className="pmName">{name}</div>
                                            </div>

                                            <div className="pm_name">
                                                <p className="pmName">starting_date</p>
                                                <div className="pmName">{starting_date}</div>
                                            </div>

                                            <div className="pm_name">
                                                <p className="pmName">ending_date</p>
                                                <div className="pmName">{ending_date}</div>

                                                <a href="https://en.wikipedia.org/wiki/List_of_office-holders_in_the_Government_of_India"><button className="btn colorbtn">view all</button></a>
                                            </div>

                                        </div>


                                    </div>

                                </div>


                            ))


                    }

                    {!click && <div className="changeData">
                        <img src="resources/cat.png" className="gift" />
                        <p className="cat">click any data........</p>
                    </div>}

                </div>


            </div>

            <div className="MAIN4">
                <b><p className="import">important plans</p></b>
                <p className="import1">The prasident of collaborate others and making the plans </p>
               
                <div className="MAINbox6 ">
                    <div className="plan1 ">
                        <div className="plan2 color1 ">

                            <img src="resources/Quiteindia.jpg" className="photo" />
                            <p className="move">Quit india movement</p>
                            <a href="https://en.wikipedia.org/wiki/Quit_India_Movement"><button className="allbox btnquite">click me</button></a>

                        </div>

                        <div className="plan3 color1">
                            <img src="resources/nehru.png" className="photo" />
                            <p className="move">Satyagraha</p>
                            <a href="https://en.wikipedia.org/wiki/Satyagraha"><button className="allbox btnquite">click me</button></a>
                        </div>

                        <div className="plan3 color1">
                            <img src="resources/freedom1.webp" className="photo" />
                            <p className="move">Freedom fighters</p>
                            <a href="https://testbook.com/ias-preparation/freedom-fighters-of-india"><button className="allbox btnquite">click me</button></a>
                        </div>

                        <div className="plan3 color1">
                            <img src="resources/Nehruandbabu.jpg" className="photo" />
                            <p className="move">All-India Muslim League</p>
                            <a href="https://www.britannica.com/biography/Aga-Khan-III"><button className="allbox btnquite">click me</button></a>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    );

}

export default Leader;

