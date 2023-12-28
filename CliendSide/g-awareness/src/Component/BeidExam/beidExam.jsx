import React from "react";
import './BeidExam.css';

function BeidExam(){
    const videoId = 'wdxW4UUI1Tg';

    return(
        <div>
            <div>
                
                <div className="beid_marque">
                    <marquee className="beid_marquee">This website provides comprehensive information about B.Ed, stating that it stands for Bachelor of Education. According to NCTE, completing B.Ed is a requirement for teaching higher education in schools. B.Ed is a 2-year professional course, emphasizing theory, assignments, fieldwork, and research.</marquee>
                </div>
                            <img src="https://1.bp.blogspot.com/-mQ0LqRhvSo0/Xyp__-IFduI/AAAAAAAACZU/nIw2K6VYdjkgfOgZBFHHx-7eo4DnwrhAwCLcBGAsYHQ/s2048/Webp.net-compress-image.jpg" alt="Exam" class="beid_image"/>

                            {/* <div class="content-below">
                            <p><b>Bachelor of Education(B.ED) Exam</b></p>
                </div> */}

                <div className="beid_bigbox">

                    <div className="beid_smallbox">
                    <h3 id="beid_Bachelor">Bachelor of Education(B.ED) Exam Basic Information</h3>

                        <p className="beid_paragaph2">This comprehensive list of B.Ed entrance exams serves as a valuable resource for aspiring educators, providing insights into the diverse range of entrance examinations and their respective admission processes. The B.Ed degree is imperative for individuals aspiring to teach students across primary, secondary, and higher secondary sections. Candidates are required to participate in one of the B.Ed entrance exams, as colleges offering B.Ed programs select candidates based on their performance in these entrance examinations. It is noteworthy that candidates holding both bachelor's and master's degrees are eligible to appear for these exams, highlighting the inclusivity of educational qualifications for prospective educators. The successful completion of these exams opens avenues for individuals to pursue a fulfilling career in teaching.</p>
                        <img src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-teaching-skills-1605625101.jpg" className="beid_teacher"/>
                        
                        <p id="beid_paragaph"><b>The syllabus for B.Ed entrance exams may vary slightly between different universities and institutions. However, the general syllabus often includes the following key areas:</b></p>
                        <ul className="beid_underlist">
                                <li><strong>Generbeid_paragaphal English and Comprehension:</strong> This section assesses the candidate's proficiency in the English language, covering grammar, vocabulary, and reading comprehension.</li>
                                
                                <li><strong>General Knowledge:</strong> Questions related to current affairs, general awareness, and issues of national and international importance.</li>
                                
                                <li><strong>Teaching Aptitude:</strong> Evaluation of the candidate's understanding of teaching methods, learning processes, and their overall aptitude for a career in education.</li>
                                
                                <li><strong>Reasoning Ability:</strong> Assessment of logical and analytical reasoning skills, involving problem-solving and critical thinking.</li>
                                
                                <li><strong>Subject-specific Content:</strong> Questions related to the chosen subject of specialization, incorporating topics from the candidate's academic background.</li>
                                
                                <li><strong>Quantitative Aptitude:</strong> Evaluation of basic mathematics skills, including numerical ability and data interpretation.</li>
                         </ul>
                         <h3 className="beid_Bachelor1">In this YouTube video, you will receive basic information about the B.Ed. exam.</h3>

                        <iframe className="beid_youtub"
                            width="600"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        
                    </div>
                                    
                    <div className="beid_whitebox">
                        <h3 className="beid_full">Full Syllabus</h3>
                        <ul className="beid_syllabus">
                            <li>English proficiency, grammar, vocabulary.</li>
                            <li>Current affairs, general awareness.</li>
                            <li>Teaching methods, learning processes, education career aptitude.</li>
                            <li>Logical, analytical skills, problem-solving.</li>
                            <li>Subject-specific content, academic background.</li>
                            <li>Basic mathematics, numerical ability.</li>
                            {/* <div className="skiMainContent"> */}

                                {/* </div> */}
                            </ul>
                            <div className="beidExam_skip">
                                <img src="https://webstockreview.net/images/arrow-png-images-3.png" className="beid_icon"/>
                            <a className='beidcontent_skip' href="#beid_paragaph">Skip to main Content</a>

                            </div>

                           


                        

                    </div>
                </div>
              
            </div>
        </div>
    );
}
export default BeidExam