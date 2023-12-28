import React, { useState } from "react";

import './Cricket.css';

function CricketGame(){
    // const videoId = 'sx01uJWKnz4';
    const [videoVisibleCricket, setVideoVisibleCricket] = useState(false);

    const handleClickCricket = () => {
        setVideoVisibleCricket(!videoVisibleCricket);
    };
  
    const youtubeVideoIdCricket = 'sx01uJWKnz4'; // Replace with your actual YouTube video ID
  
    return(
        <div>
            <div>
                <div className="Cricket_marquee">
                    <marquee className="Cricket_marqu">Explore the rich world of cricket on this website, delving into the game's history, rules, and player dynamics. Discover how two teams of eleven players compete, with the batting side aiming to score runs and the bowling side working to dismiss batters. Umpires and off-field scorers ensure a fair and well-documented gameplay experience.</marquee>
                </div>
                <img src="https://media.istockphoto.com/vectors/stadium-of-cricket-with-bat-ball-and-trophy-vector-id485210100?k=6&m=485210100&s=170667a&w=0&h=q0ck3QtazmkIdTV-SlrXmj4KI0C7UBttu6eOwq6iEgk=" className="cricket_img"/>
                
            </div>
            <div className="Cricket_bigBox">
                <div className="Cricket_smallBox">
                    <div className="Cricket_imageText">
                        <img src="https://pngimg.com/uploads/cricket/cricket_PNG12.png" className="Cricket_criketimg"/>
                        <h2 className="Cricket_heading">Cricket in India</h2>

                    </div>
                    <div className="Cricket_insidebox">
                            <h4>What is the Significance of Cricket in India?</h4>
                            <p className="Cricket_paragraph">Cricket is one of the foremost sports of modern times. It is a game played with two teams of 11 players. Interestingly India is synonymous with Cricket. Was it always the same? This game originally began out as a sport only played by the British. So, how it became synonymic with India? Isn’t it fascinating? Let’s hear out the story of cricket with its introduction.During the early 17th century, English colonies introduced cricket in North America. Subsequently, in the 18th century, this game became a favourite around the globe. It marked its presence in Australia almost as soon as colonisation started in 1788. Followed by this, the sport reached New Zealand and South Africa in the early years of the 19th century.Here, we will understand the history of cricket including the story of cricket including the spread of cricket, Also, we will understand the representation of cricket along with the laws of cricket. </p>
                            <h4>Belief On Cricket Origination </h4>
                            <p className="Cricket_paragraph">It was also believed that cricket was originated in the earliest 13th century as a game that comprises country boys bowling at a tree stump or at the hurdle gate into a sheep pen which can be seen in the image below:</p>
                            <h4 className="Cricket_paragraph">The Story of Cricket: Invention</h4>
                            <p className="Cricket_paragraph">In the 19th century, cricket was invented in the South-Eastern part of England. The British forwarded the game all around the world. This incorporates their colonies in Africa and Asia. After gaining independence from the rulers, these colonies became assembled in the form of a Commonwealth.Hence, the story of cricket is fundamentally associated with Commonwealth countries. The main countries having cricket as their sport is:</p>
                            <ul className="Crick_list">
                                <li>India</li>
                                <li>Pakistan</li>
                                <li>Sri Lanka</li>
                                <li>Bangladesh</li>
                                <li>Australia</li>
                                <li>New Zealand</li>
                                <li>England</li>
                                <li>West Indies</li>
                                <li>Zimbabwe</li>
                                <li>South Africa</li>
                                <li>Kenya</li>
                                </ul>
                                <p className="Cricket_paragraph">Now, let us go through the past of cricket.</p>
                                <h4  className="Cricket_paragraph">History of Cricket: How Cricket was Originated?</h4>
                                
                                    <p className="Cricket_paragraph">As per expert consensus, cricket is believed to have originated in Saxon or Norman times, possibly invented by children in the Weald, a region of dense woodlands and clearings in south-east England.</p>

                                    <ul className="Crick_list">
                                    <li>In 1611, cricket was first recommended as an adult game, and it was initially described as a boys' sport in the same year.</li>
                                    <li>There's a notion that cricket may have evolved from bowls, with a batsman trying to prevent the ball from reaching its target by hitting it away.</li>
                                    </ul>

                                    <p className="Cricket_paragraph">Village cricket emerged in the mid-17th century, leading to the formation of the first English "county teams" in the second half of the century. These teams hired "local experts" from village cricket as the earliest professionals. The first use of country names by teams occurred in 1709.</p>

                                    <ul className="Crick_list">
                                    <li>In the first half of the 18th century, cricket established itself as the dominant sport in London and the south-eastern counties, slowly gaining popularity in other parts of England. Women's Cricket dates back to 1745, with the first recognized match played in Surrey.</li>
                                    <li>In 1744, the first Laws of Cricket were drafted and later amended, introducing innovations such as lbw, a third stump (the middle stump), and setting the maximum bat width. The "Star and Garter Club" created these codes, and they eventually founded the Marylebone Cricket Club (MCC) at Lord's in 1787, becoming the custodian of the Laws.</li>
                                    </ul>

                                    <p className="Cricket_paragraph">After 1760, bowlers started pitching the ball instead of rolling it along the floor. In response, the instant bat replaced the old "hockey-stick" style of bat. The Hambledon Club in Hampshire played a central role in the sport for about thirty years until the formation of the MCC and the opening of Lord's Cricket Ground in 1787.</p>
                                    <h4 className="Cricket_paragraph">Representation of Cricket </h4>
                                    <p className="Cricket_paragraph">Since the invention of cricket, the story of cricket is usually raised for the following three specialties:</p>

                                    <ul className="Crick_list">
                                        <li>Fair Play</li>
                                        <li>Gentlemanliness</li>
                                        <li>Discipline</li>
                                    </ul>
                                    <h4 className="Cricket_paragraph">Laws of Cricket </h4>
                                    <ul className="Crick_list">
                                        <li>In 1744, the first written ‘Laws of Cricket’ was drawn up.</li>
                                        <li>As per these laws, the principals shall select amongst the gentlemen present two umpires, who shall certainly seek out all disputes.</li>
                                        <li>The stumps were sure to be 22 inches high and the bail across them six inches.</li>
                                        <li>The ball ought to be between five and six ounces, and the 2 sets of stumps 22 yards apart.</li>
                                    </ul>
                                    <h4 className="Cricket_paragraph">Watching the video will provide you with more information, helping you better understand the topic.</h4>
                                     {/* <iframe className="Cricket_youtub"
                                            width="760"
                                            height="355"
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title="YouTube Video"
                                            frameBorder="0"
                                            allowFullScreen
                                        ></iframe>  */}


                                         
 <button className="clickCirclecricket" onClick={handleClickCricket}>
        {videoVisibleCricket ? 'Hide Video' : 'Show Video'}
      </button>

      {videoVisibleCricket && (
        <div className="vedio_BoxCricket">
          <iframe  className="vedioyouTube1Cricket"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeVideoIdCricket}?t=16s`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

                    </div>

                </div>
                <div className="Cricket_whitebox">
                    <h4 className="Cricket_whiteboxHead">Basic Information Cricket in India</h4>
                    <ul className="Crick_list1">
                        <li>Belief On Cricket Origination</li>
                        <li>The Story of Cricket: Invention</li>
                        <li>History of Cricket: How Cricket was Originated?</li>
                        <li>Representation of Cricket</li>
                        <li>Laws of Cricket</li>
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}
export default CricketGame