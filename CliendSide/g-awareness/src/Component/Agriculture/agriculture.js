import React from "react";
import './agriculture.css';
// import Navbar from "./Navbar/navbar";

function Agriculture(){
    return(
       
            <div>
                 {/* <Navbar/> */}
                 <div>
                    <img className="agriculture_img" src="https://indianfarmers.org/wp-content/uploads/2023/07/Agriculture-in-India-930x576.jpg"/>
                    <div className="Agriculture_side">
                        <div>
                            <h1 className="Agriculture_heading">Agriculture in India: A Comprehensive Guide </h1>
                            <img className="agriculture_img2" src="https://cdn.shortpixel.ai/spai/q_lossy+w_834+h_556+to_auto+ret_img/cosmosmagazine.com/wp-content/uploads/2020/02/180606-agriculture-full.jpg"/>
                            <p className="Agriculture_paragraph">Welcome to our comprehensive guide on agriculture in India. As a country with a rich agricultural history, India has a lot to offer in terms of farming techniques, practices, and innovations. This guide aims to provide you with a detailed overview of the Indian agricultural sector, including its significance to the economy, major crops grown, farming techniques, sustainable practices, and technological advancements.With a population of over 1.3 billion and growing, agriculture remains a critical sector in India, providing employment to millions of people and contributing significantly to the country’s GDP. In this guide, we will explore the challenges faced by the Indian agricultural sector and the various initiatives taken by the government to promote and support agriculture.Whether you’re a farmer, an agriculture enthusiast, or someone interested in learning more about Indian agriculture, this guide has something for everyone. So, let’s dive into the world of Indian agriculture and discover the fascinating and diverse practices that make it one of the most vital industries in the country.</p>
                            <h1 className="Agriculture_heading2">The Importance of Agriculture in India</h1>
                            <p className="Agriculture_paragraph">Agriculture is the backbone of the Indian economy, contributing significantly to the country’s GDP and employment. The sector employs over 50% of the country’s population and has been the main source of livelihood for several decades.India is known for its diverse agricultural practices, thanks to its varied geography, climate, and soil conditions. The country is one of the largest producers of several crops, including rice, wheat, pulses, and cotton.</p>
                            <h1 className="Agriculture_heading3">The Significance of the Agricultural Sector</h1>
                            <p className="Agriculture_paragraph">The agricultural sector plays a crucial role in India’s economic growth and development. Apart from contributing to the country’s GDP, it also provides raw materials for several industries, including food processing, textiles, and paper. The sector also helps in generating foreign exchange by exporting various agricultural products, such as tea, coffee, and spices.</p>
                            <h1 className="Agriculture_heading3">Agricultural Practices in India</h1>
                            <p className="Agriculture_paragraph">India has a rich tradition of various agricultural practices, such as mixed farming, crop rotation, and intercropping. The country has also made significant strides in adopting modern agricultural practices, including precision agriculture, use of genetically modified crops, and mechanization.Despite the progress, the sector still faces several challenges that need to be addressed to ensure sustainable growth. Factors such as climate change, water scarcity, and market fluctuations continue to affect Indian agriculture and require innovative solutions.</p>
                            
                            <h1 className="Agriculture_heading3">Organic Farming</h1>
                            <img src="https://miro.medium.com/max/2160/1*NGXeDOP9Ww2PGQDAcyhhdg.jpeg" className="agri_Organic"/>

                            <p className="Agriculture_paragraph">Organic farming is a production system that relies on using natural methods to grow crops without the use of synthetic chemicals. In India, organic farming has been gaining popularity due to the growing demand for organic produce. Many farmers in India have converted to organic farming to improve soil fertility and reduce environmental pollution. Organic farming also promotes the use of traditional farming practices and preserving biodiversity.</p>
                            <div className="Agriculture_point">
                                <div >
                                    
                                    <h3>Advantages of Organic Farming	</h3>
                                    <ul className="Agriculture_Environmental">
                                        <li>Environmental sustainability</li>
                                        <li>Improved soil fertility</li>
                                        <li>Reduced use of synthetic fertilizers and pesticides</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="Agriculture_Challenges">Challenges of Organic Farming</h3>
                                    <li className="Agriculture_list">Higher production costs</li>
                                    <li className="Agriculture_list">Increased labor requirements</li>
                                    <li className="Agriculture_list">Limited market for organic produce</li>
                                </div>
                                
                            </div>
                            <div className="agri_textandimg">
                            <h4 className="agri_more">More information</h4>
                            <img src="https://static.thenounproject.com/png/634848-200.png" className="agri_textarrow"/>

                            </div>
                            <div className="agri_morevedio">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/qkqtcXuogu4"
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                </div>

                        </div>





                        
                         <div className="agriculture_box">

                            <h3 className="Agriculture_basic">Agriculture basic information</h3>
                            <div>
                                <ul >
                                    <li>
                                        <li className="Agriculture_info"><p >What  is agriculture..?</p></li>
                                        <li className="Agriculture_info"><p >The Importance of Agriculture in India</p></li>
                                        <li className="Agriculture_info"><p >Agricultural Practices in India</p></li>
                                        <li  className="Agriculture_info"><p>Key Factors Affecting Indian Agriculture</p></li>
                                        <li className="Agriculture_info"><p >Major Agricultural Crops in India</p></li>
                                        <li  className="Agriculture_info"><p>Organic Farming</p></li>
                                        <li  className="Agriculture_info"><p>Use of Modern Technologies</p></li>
                                    </li>
                                </ul>
                            </div>


                            </div>
                    </div>
                    

                 </div>
            </div>
    );
}
export default Agriculture