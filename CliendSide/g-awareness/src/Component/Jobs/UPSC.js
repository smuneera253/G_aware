import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import Slider from 'react-slick';
import './UPSC.css';

function UpscJob(){


const divStyleUPSC = {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px',
    // width:'400px',
  };
  
  const slideImagesUpsc = [
    {
      url: 'https://i.pinimg.com/originals/47/f8/c4/47f8c4fac4e3528213547699f5a5e406.png',
    },
    {
      url: 'https://wallpapers.com/images/hd/work-for-success-upsc-oq93zp6crtj2bgc4.jpg',
    },
    {
      url: 'https://1.bp.blogspot.com/-Gp7rrVQTwmI/XurbkT2-7gI/AAAAAAAAFoQ/Rj0ICirNQSQjlDm-r_bE5MRpBhCfsiYHQCK4BGAsYHg/s856/upsc%2Bmotivate%2Bimage%2Bforr%2Bblog.png',
    },
    {
      url: 'https://iasbaba.com/wp-content/uploads/2018/02/If.jpg',
    }
  ];
    return(


        <div>

            {/* <div className="bon_ups"> */}
{/*             
            <Slide >
              {slideImagesUpsc.map((slideImagesUpsc, i) => (
                <div key={i}>
                  <div style={{ ...divStyleUPSC, backgroundImage: `url(${slideImagesUpsc.url})` }} ></div>
                </div>
              ))}
            </Slide> */}
            <img src="https://i.pinimg.com/originals/47/f8/c4/47f8c4fac4e3528213547699f5a5e406.png" className="UPSC_MAinImg"/>
      
              {/* </div> */}


              <div className="Upsc_mainWhiteBox">
                <h4 className="Upsc_whiteboxheading1">Basic Information About UPSC Exam</h4>

                <div className="whitebox_upsclist">
                    <ul className="upsc_listboxwhite1">
                      <li> General Studies Paper-I Syllabus</li>
                      <li> General Studies Paper-II Syllabus</li>
                      <li>UPSC IAS Main Exam Pattern & Syllabus</li>
                      <li>Important Points</li>
                      <li>Indian Languages</li>
                      <li>II.Paper-I: Essay</li>
                      <li>III. Paper-II: General Studies-I</li>
                    </ul>


                    <ul className="upsc_listboxwhite2">
                      <li>IV. Paper-III: General Studies-II</li>
                      <li>V. Paper-IV: General Studies-III</li>
                      <li>UPSC IAS Main Exam Pattern & Syllabus</li>
                      <li>Important Points</li>
                      <li>Indian Languages</li>
                      <li>II.Paper-I: Essay</li>
                      <li>III. Paper-II: General Studies-I</li>
                    </ul>
                </div>
                <div className="skiMainContent">
                <a  href="#UPSC_MAinBoxHead4">Skip to main Content</a>

                </div>

                
              </div>
              <div className="UPSC_MainBox">
                    <h1 className="UPSC_MAinBoxHead">UPSC Exam Sylabus</h1>
                    <p className="UPSC_paraghaph">The UPSC syllabus is designed to assess candidates' knowledge, aptitude, and analytical abilities, and it comprises two stages: the Preliminary Examination (Prelims) and the Main Examination (Mains), followed by an interview/personality test. The UPSC Syllabus for Prelims includes two compulsory papers: General Studies Paper-I and General Studies Paper-II (also known as the CSAT or Civil Services Aptitude Test). These papers cover a wide range of subjects, including history, geography, economics, polity, environment, science, and current affairs.</p>
                    <h1 className="UPSC_MAinBoxHead2">UPSC IAS Preliminary Exam Pattern & Syllabus</h1>
                    <p className="UPSC_paraghaph">The first stage of the exam, i.e., the Civil Services Preliminary Exam is only a screening test and is conducted to shortlist candidates for the Main Examination. Marks secured in the Preliminary Exam are not taken into account while preparing the final merit.Preliminary Exam consists of two papers of objective type carrying a maximum of 400 marks.</p>
                    <div className="UPSC_listBOX">
                        <ol className="UPSE_List">
                          <li>No. of Papers</li>
                          <li>Type of Questions</li>
                          <li>Total Maximum Marks</li>
                          <li >Duration of Exam</li>
                          <li className="UPSCE_Duration">Negative Marking</li>
                          <li>Medium of Exam</li>
                        </ol>
                        <ul className="UPSE_List2">
                          <li>2 compulsory papers</li>
                          <li>Objective (MCQ) type</li>
                          <li>400 (200 each paper)</li>
                          <li>2 hrs. each (20 minutes per hour extra time for blind candidates & candidate with Locomotor Disability & Cerebral Palsy [minimum 40% impairment])</li>
                          <li>1/3rd of the marks assigned to a question</li>
                          <li>Bilingual (Hindi & English)</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="UPSC_MAinBoxHeading">1. General Studies Paper-I Syllabus</h1>
                        <p className="UPSC_line">It has 100 questions broadly covering the following topics, carrying a maximum of 200 marks to be solved in 2 hours.</p>
                        <ul id="UPSE_List3">
                          <li>Current events of National & International importance.</li>
                          <li>History of India & Indian National Movement.</li>
                          <li>Indian & World Geography – Physical, Social, Economic Geography of India & the World.</li>
                          <li>Indian Polity & Governance – Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.</li>
                          <li>Economic & Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector Initiatives, etc.</li>
                          <li>General issues on Environmental ecology, Bio-diversity & climate change – that do not require subject specialization.</li>
                          <li>General Science.</li>
                        </ul>
                    </div>
                    <div>
                      <h1 className="UPSC_MAinBoxHeading">2. General Studies Paper-II Syllabus</h1>
                      <p className="UPSC_line">It comprises of 80 questions from the following topics carrying a maximum of 200 marks to be solved in 2 hours.</p>
                      <ul className="UPSE_List">
                        <li>Comprehension</li>
                        <li>Interpersonal skills including communication skills.</li>
                        <li>Logical reasoning & analytical ability.</li>
                        <li>Decision making & problem solving.</li>
                        <li>General mental ability.</li>
                        <li>Basic numeracy (numbers & their relations, orders of magnitude, etc.) (Class X level), Data interpretation (charts, graphs, tables, data sufficiency, etc. – Class X level)</li>
                        
                      </ul>
                      <p className="UPSC_line">General Studies Paper-II of IAS Exam is a qualifying paper with minimum qualifying marks fixed at 33%.</p>
                      <p className="UPSC_line">It is mandatory for a candidate to appear in both the Papers of IAS Prelim Exam for the purpose of evaluation.</p>
                    </div>
                    <div>
                      <h1  id="UPSC_MAinBoxHead4">UPSC IAS Main Exam Pattern & Syllabus</h1>
                      <p className="UPSC_line">Civil Services Main Examination consists of written examination and interview (personality test).</p>
                      <p className="UPSC_line">Civil Services Main Examination consists of following papers divided into 2 categories – qualifying & papers to be counted for merit.</p>
                    </div>

                    <div id="upsc_table1">
                        <table>
                            <tr>
                              <th className="Upsce_Header">Qualifying Papers</th>
                              <th className="Upsce_Header1">About</th>
                              <th className="Upsce_Header">Marks</th>
                            </tr>
                            <tr>
                              <td>Paper-A</td>
                              <td>One of the Indian Language to be selected by the candidate from the Languages included in the Eighth Schedule to the Constitution</td>
                              <td>300</td>
                            </tr>
                            <tr>
                              <td>Paper-B</td>
                              <td>English</td>
                              <td>300</td>
                            </tr>
                            <tr>
                              <td>Paper-I</td>
                              <td>Essay</td>
                              <td>250</td>
                            </tr>
                            <tr>
                              <td>Paper-II</td>
                              <td>General Studies-I (Indian Heritage and Culture, History and Geography of the World and Society)</td>
                              <td>250</td>
                            </tr>
                            <tr>
                              <td>Paper-III</td>
                              <td>General Studies-II (Governance, Constitution, Polity, Social Justice and International relations)</td>
                              <td>250</td>
                            </tr>
                            <tr>
                              <td>Paper-IV</td>
                              <td>Genera Studies-III (Technology, Economic Development, Bio-diversity, Environment, Security and Disaster Management)</td>
                              <td>250</td>
                            </tr>
                            <tr>
                              <td>Paper-V</td>
                              <td>General Studies-IV (Ethics, Integrity and Aptitude)</td>
                              <td>250</td>
                            </tr>
                            <tr>
                              <td>Paper-VI</td>
                              <td>Optional Subject – Paper 1</td>
                              <td>250</td>
                            </tr>
                            <tr>
                              <td>Paper-VII</td>
                              <td>Optional Subject – Paper 2</td>
                              <td>250</td>
                            </tr>
                            <tr>
                              <td>Sub Total (Written Test)</td>
                              <td></td>
                              <td>1750</td>
                            </tr>
                            <tr>
                              <td>Personality Test</td>
                              <td></td>
                              <td>275</td> 
                            </tr>
                            <tr>
                              <td>Grand Total</td>
                              <td></td>
                              <td>2025</td>
                            </tr>
                        </table>
                    </div>
                    <div className="UPSC_importantpoint">
                        <h3 className="UPSC_MAinBoxHead5">Important Points:</h3>
                        <ul className="UPSE_List">
                          <li>The papers on Indian languages and English (Paper A and paper B) will be of qualifying nature and the marks obtained in these papers will not be counted for ranking.</li>
                          <li>The papers on Indian languages and English (Paper A and paper B) will be of Matriculation or equivalent standard.</li>
                          <li>The papers on Essay, General Studies and Optional Subject of only such candidates will be taken cognizance who attain 25% marks in ‘Indian Language’ and 25% in ‘English’ as minimum qualifying standards in these qualifying papers.</li>
                          <li>Marks obtained by the candidates for the Paper I-VII only will be counted for merit ranking.</li>
                          <li>The question papers for the main examination will be of conventional (essay) type and each paper will be of 3 hour duration.</li>
                          <li>Candidates will have the option to answer all the question papers, except the Qualifying Language Papers, Paper-A and Paper-B, in any one of the languages included in the Eighth Schedule to the Constitution of India or in English.</li>
                          <li>The question papers (other than the literature of language papers) will be set in Hindi and English only.</li>
                          <li>Compensatory time of twenty minutes per hour shall be permitted for the Blind candidates and the candidates with locomotor disability and cerebral palsy where dominant (writing) extremity is affected to the extent of slowing the performance of function (minimum of 40% impairment) in both the Civil Services (Preliminary) as well as in the Civil Services (Main) Examination.</li>



                        </ul>
                        <h3 className="UPSC_MAinBoxHead5">Indian Languages:</h3>
                        <ul className="UPSE_List">
                          <li>Comprehension of given passages.</li>
                          <li>Precise Writing.</li>
                          <li>Usage and Vocabulary.</li>
                          <li>Short Essays.</li>
                          <li>Translation from English to the Indian Language and vice-versa.</li>
                        </ul>
                        <h3 className="UPSC_MAinBoxHead5">II.Paper-I: Essay</h3>
                        <p className="UPSCE_Candidates">Candidates may be required to write essays on multiple topics.</p>
                        <p className="UPSCE_Candidates">They will be expected to keep closely to the subject of the essay to arrange their ideas in orderly fashion, and to write concisely. Credit will be given for effective and exact expression.</p>

                        <h3 className="UPSC_MAinBoxHead6">III. Paper-II: General Studies-I</h3>
                        <h4 className="UPSE_india">Indian Heritage and Culture, History and Geography of the World and Society.</h4 >
                          <ul className="UPSE_List">
                            <li>Indian Culture will cover the salient aspects of Art Forms, literature, and Architecture from ancient to modern times.</li>
                            <li>Modern Indian history from about the middle of the eighteenth century until the present - significant events, personalities, issues.</li>
                            <li>The Freedom Struggle — its various stages and important contributors/contributions from different parts of the country.</li>
                            <li>Post-independence consolidation and reorganization within the country.</li>
                            <li>History of the world will include events from the 18th century such as the industrial revolution, world wars, redrawal of national boundaries, colonization, decolonization, political philosophies like communism, capitalism, socialism, etc. — their forms and effect on society.</li>
                            <li>Salient features of Indian Society, Diversity of India.</li>
                            <li>Role of women and women’s organization, population and associated issues, poverty and developmental issues, urbanization, their problems and their remedies.</li>
                            <li>Effects of globalization on Indian society.</li>
                            <li>Social empowerment, communalism, regionalism & secularism.</li>
                            <li>Salient features of the world’s physical geography.</li>
                            <li>Distribution of key natural resources across the world (including South Asia and the Indian sub-continent); factors responsible for the location of primary, secondary, and tertiary sector industries in various parts of the world (including India).</li>
                            <li>Important Geophysical phenomena such as earthquakes, Tsunami, Volcanic activity, cyclone, etc., geographical features and their location-changes in critical geographical features (including water-bodies and ice-caps) and in flora and fauna and the effects of such changes.</li>
                          </ul>

                          <h2 className="UPSC_MAinBoxHead6">IV. Paper-III: General Studies-II</h2>
                          <h3 className="UPSE_india">Governance, Constitution, Polity, Social Justice and International relations.</h3>

                         <ul className="UPSE_List">
                            <li>Indian Constitution:
                              <ul>
                                <li>Historical underpinnings, evolution, features, amendments, significant provisions, and basic structure.</li>
                              </ul>
                            </li>

                            <li>Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure, devolution of powers and finances up to local levels and challenges therein.</li>

                            <li>Separation of powers between various organs dispute redressal mechanisms and institutions.</li>

                            <li>Comparison of the Indian constitutional scheme with that of other countries.</li>

                            <li>Parliament and State legislatures:
                              <ul className="UPSE_List">
                                <li>Structure, functioning, conduct of business, powers & privileges, and issues arising out of these.</li>
                              </ul>
                            </li>

                            <li>Structure, organization, and functioning of the Executive and the Judiciary:
                              <ul>
                                <li>Ministries and Departments of the Government; pressure groups and formal/informal associations and their role in the Polity.</li>
                              </ul>
                            </li>

                            <li>Salient features of the Representation of People’s Act.</li>

                            <li>Appointment to various Constitutional posts, powers, functions, and responsibilities of various Constitutional Bodies.</li>

                            <li>Statutory, regulatory, and various quasi-judicial bodies.</li>

                            <li>Government policies and interventions for development in various sectors and issues arising out of their design and implementation.</li>

                            <li>Development processes and the development industry:
                              <ul>
                                <li>The role of NGOs, SHGs, various groups and associations, donors, charities, institutional and other stakeholders.</li>
                              </ul>
                            </li>

                            <li>Welfare schemes for vulnerable sections of the population by the Centre and States and the performance of these schemes; mechanisms, laws, institutions and Bodies constituted for the protection and betterment of these vulnerable sections.</li>

                            <li>Issues relating to development and management of Social Sector/Services relating to Health, Education, Human Resources.</li>

                            <li>Issues relating to poverty and hunger.</li>

                            <li>Important aspects of governance, transparency and accountability, e-governance- applications, models, successes, limitations, and potential; citizens charters, transparency & accountability and institutional and other measures.</li>

                            <li>Role of civil services in a democracy.</li>

                            <li>India and its neighborhood- relations.</li>

                            <li>Bilateral, regional and global groupings and agreements involving India and/or affecting India’s interests.</li>

                            <li>Effect of policies and politics of developed and developing countries on India’s interests, Indian diaspora.</li>

                            <li>Important International institutions, agencies and fora - their structure, mandate.</li>
                          </ul >
                          <h2 className="UPSC_MAinBoxHead6">V. Paper-IV: General Studies-III</h2>
                          <h3  className="UPSE_india">Technology, Economic Development, Bio diversity, Environment, Security and Disaster Management</h3>
                          <ul className="UPSE_List">
                                  <li>Indian Economy and issues relating to planning, mobilization of resources, growth, development, and employment.</li>

                                  <li>Inclusive growth and issues arising from it.</li>

                                  <li>Government Budgeting.</li>

                                  <li>Major crops - cropping patterns in various parts of the country.</li>
                                  
                                  <li>Different types of irrigation and irrigation systems.</li>
                                  
                                  <li>Storage, transport, and marketing of agricultural produce and issues and related constraints.</li>
                                  
                                  <li>E-technology in the aid of farmers.</li>

                                  <li>Issues related to direct and indirect farm subsidies and minimum support prices.</li>
                                  
                                  <li>Public Distribution System - objectives, functioning, limitations, revamping.</li>
                                  
                                  <li>Issues of buffer stocks and food security.</li>
                                  
                                  <li>Technology missions.</li>
                                  
                                  <li>Economics of animal-rearing.</li>

                                  <li>Food processing and related industries in India - scope and significance.</li>
                                  
                                  <li>Location, upstream and downstream requirements, supply chain management.</li>

                                  <li>Land reforms in India.</li>

                                  <li>Effects of liberalization on the economy, changes in industrial policy, and their effects on industrial growth.</li>

                                  <li>Infrastructure: Energy, Ports, Roads, Airports, Railways, etc.</li>

                                  <li>Investment models.</li>

                                  <li>Science and Technology - developments and their applications and effects in everyday life.</li>

                                  <li>Achievements of Indians in science & technology; indigenization of technology and developing new technology.</li>

                                  <li>Awareness in the fields of IT, Space, Computers, robotics, Nano-technology, bio-technology and issues relating to intellectual property rights.</li>

                                  <li>Conservation, environmental pollution, and degradation, environmental impact assessment.</li>

                                  <li>Disaster and disaster management.</li>

                                  <li>Linkages between development and spread of extremism.</li>

                                  <li>Role of external state and non-state actors in creating challenges to internal security.</li>

                                  <li>Challenges to internal security through communication networks, role of media and social networking sites in internal security challenges, basics of cyber security; money-laundering and its prevention.</li>

                                  <li>Security challenges and their management in border areas - linkages of organized crime with terrorism.</li>

                                  <li>Various Security forces and agencies and their mandate.</li>
                                </ul>
                                <h3 className="UPSC_MAinBoxHead6">VI. Paper-V: General Studies-IV</h3>
                                <h3 className="UPSE_india">Ethics, Integrity and Aptitude</h3>
                                <ul className="UPSE_List">
                                  <li>Ethics and Human Interface:
                                    <ul>
                                      <li>Essence, determinants, and consequences of Ethics in human actions.</li>
                                      <li>Dimensions of ethics.</li>
                                      <li>Ethics in private and public relationships.</li>
                                    </ul>
                                  </li>

                                  <li>Human Values:
                                    <ul className="UPSE_List">
                                      <li>Lessons from the lives and teachings of great leaders, reformers, and administrators.</li>
                                      <li>Role of family, society, and educational institutions in inculcating values.</li>
                                    </ul>
                                  </li>

                                  <li>Attitude:
                                    <ul className="UPSE_List">
                                      <li>Content, structure, function.</li>
                                      <li>Influence and relation with thought and behavior.</li>
                                      <li>Moral and political attitudes.</li>
                                      <li>Social influence and persuasion.</li>
                                    </ul>
                                  </li>

                                  <li>Aptitude and Foundational Values for Civil Service:
                                    <ul>
                                      <li>Integrity, impartiality, and non-partisanship.</li>
                                      <li>Objectivity, dedication to public service.</li>
                                      <li>Empathy, tolerance, and compassion towards the weaker sections.</li>
                                    </ul>
                                  </li>

                                  <li>Emotional Intelligence:
                                    <ul>
                                      <li>Concepts and their utilities.</li>
                                      <li>Application in administration and governance.</li>
                                    </ul>
                                  </li>

                                  <li>Contributions of Moral Thinkers and Philosophers:
                                    <ul>
                                      <li>From India and the world.</li>
                                    </ul>
                                  </li>

                                  <li>Public/Civil Service Values and Ethics in Public Administration:
                                    <ul className="UPSE_List">
                                      <li>Status and problems.</li>
                                      <li>Ethical concerns and dilemmas in government and private institutions.</li>
                                      <li>Laws, rules, regulations, and conscience as sources of ethical guidance.</li>
                                      <li>Accountability and ethical governance.</li>
                                      <li>Strengthening of ethical and moral values in governance.</li>
                                      <li>Ethical issues in international relations and funding.</li>
                                      <li>Corporate governance.</li>
                                    </ul>
                                  </li>

                                  <li>Probity in Governance:
                                    <ul className="UPSE_List">
                                      <li>Concept of public service.</li>
                                      <li>Philosophical basis of governance and probity.</li>
                                      <li>Information sharing and transparency in government.</li>
                                      <li>Right to Information, Codes of Ethics, Codes of Conduct.</li>
                                      <li>Citizen’s Charters, Work culture, Quality of service delivery.</li>
                                      <li>Utilization of public funds, challenges of corruption.</li>
                                    </ul>
                                  </li>

                                  <li>Case Studies on the above issues.</li>
                                </ul>

                                <h4 className="upse_moreinformationvedio">In this video, you will receive basic information.</h4>

                                <div className="upse_vedioyoutub">

                                <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/G5STfWKbF0E?start=88"
                                        frameborder="0"
                                        allowfullscreen
                                      ></iframe>
                                </div>

                          

                    </div>

              </div>
        </div>
        
    );
}
export default UpscJob