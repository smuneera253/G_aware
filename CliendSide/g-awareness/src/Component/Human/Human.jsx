import React, { useState } from "react";
import './Human.css';
import { culturalAndEducationalRightsAnswer, fundamentalDuties, rightAgainstExploitationAnswer, rightToConstitutionalRemediesAnswer, rightToEducationAnswer, rightToEqualityAnswer, rightToFreadomAnswer, rightToFreedomOfReligionAnswer } from "../../Component/constant/navBarConstant";

// import { rightToEqualityAnswer,rightAgainstExploitationAnswer,rightToFreedomOfReligionAnswer, } from "../../public/Human";
// import * as constants from './constants';


function Human(){

    const ToggleQA = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleAnswer = () => {
          setIsOpen(!isOpen);
        };

        const videoId = 'yourYouTubeVideoId';

    
    return (
        <div className="Human_mainBox">
          <h2 className="Human_Question"onClick={toggleAnswer}>{question}</h2>
          {isOpen && (
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {answer.map((point, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          )}
        </div>
      );
    }
    return(
        <div>
            <div>
                <img src="https://media.istockphoto.com/id/1248523239/vector/concept-of-solidarity-with-a-group-of-people-who-form-a-human-chain-to-demonstrate.jpg?s=2048x2048&w=is&k=20&c=Kp_32clZ3v7XCrwJ0biZlFfdokzR0aVNu1iFdcTmAHs=" className="Human_right"/>


                <div className="Human_rightBoxmodel">
                  

                <div className="Human_answer">
                  <div className="Human_ClickArow">
                       <h1 className="Human_Click">Fundamental Rights</h1>
                       <img className="Human_arrowImage" src="https://tse3.mm.bing.net/th?id=OIP.89GXqSCV_FbgVbLKsZheqAHaHa&pid=Api&P=0&h=180"/>

                  </div>
                  <p className="Human_paragraph">Fundamental rights" refer to a set of rights that are considered essential for the overall development and well-being of individuals. These rights are typically enshrined in a country's constitution or a similar legal document, and they are meant to safeguard the basic liberties and freedoms of citizens. The recognition and protection of fundamental rights vary from one country to another, but they often include principles such as freedom of speech, the right to equality, the right to life and liberty, and protection against discrimination.</p>

                

                    <ToggleQA className='Human_QuesBox' question="What is Right to Equality?" answer={rightToEqualityAnswer} />
                    <ToggleQA className='' question="What is Right to Freedom?" answer={rightToFreadomAnswer} />
                    <ToggleQA className='' question="What is Right against Exploitation?" answer={rightAgainstExploitationAnswer} />
                    <ToggleQA className='' question="What is Right to Freedom of Religion?" answer={rightToFreedomOfReligionAnswer} />
                    <ToggleQA className='' question="What is Cultural and Educational Rights ?" answer={culturalAndEducationalRightsAnswer} />
                    <ToggleQA className='' question="What is Right to Constitutional Remedies  ?" answer={rightToConstitutionalRemediesAnswer} />
                    <ToggleQA className='' question="What is Right To Education (Article 21A) - A ?" answer={rightToEducationAnswer} />
                    {/* <img className="imgae_human" src="https://2.bp.blogspot.com/-RA9g7cqi74M/WEsrMq4AjHI/AAAAAAAACbY/mbuogoxhtkYyVePknZpfS_Tb007poE8sQCLcB/s1600/HumanRightsHands.png"/> */}


                    </div>


                    <div className="Human_box1">
                            <h1 className="Human_Fundamental">Basic Aware Of Fundamental rights</h1>
                                    <ul className="Human_info">
                                        <li>Right to Equality </li>
                                        <li>Right to Freedom </li>
                                        <li>Right against Exploitation </li>
                                        <li>Right to Freedom of Religion </li>
                                        <li>Cultural and Educational Rights </li>
                                        <li>Right to Constitutional Remedies </li>
                                        <li>Right To Education (Article 21A) </li>
                                    </ul>
                                    
                                  
                    </div>
                    
                    
                   
                </div>
                <div className="Human_Duties">
                <div className="Human_ClickArow">
                       <h1 className="Human_Click">Fundamental Duties</h1>
                       <img className="Human_arrowImage" src="https://tse3.mm.bing.net/th?id=OIP.89GXqSCV_FbgVbLKsZheqAHaHa&pid=Api&P=0&h=180"/>

                  </div>

                  <p className="Human_paragraph">The Fundamental Duties are a set of moral and civic obligations that are mentioned in the Constitution of India. Unlike Fundamental Rights, which are focused on the rights of individuals, Fundamental Duties highlight the responsibilities of citizens towards the nation. These duties were added to the Constitution by the 42nd Amendment in 1976. Here are the Fundamental Duties as mentioned in Article 51A:</p>
                     <ToggleQA question="How many fundamental duties are there?"  answer={fundamentalDuties} className="Ans"/>

                </div>

            </div>
        </div>
    );
}
export default Human