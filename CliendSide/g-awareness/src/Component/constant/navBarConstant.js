export const Topics = [
    {
        value : "topics",
        text : "Topics"
    },
    {
        value :"home",
        text :"Home",
    },
    {
        value : "politicalLeader",
        text : "Poitical Leader"
    },
    {
        value : "governmentBudjet",
        text : "Government Budjet"
    },
    {
        value : "governmentPlans",
        text : "Government Plans"
    },
    {
        value : "governmentOfficeNumbers",
        text : "Government Office Numbers"
    },
    {
        value : "indianMostBeatifulToristPlace",
        text : "Indian Most Beatiful Torist Plance"
    },
    {
        value : "helpLineNumber",
        text : "Help Line Number"
    }
]

export const NavItem = [
    {
        link:"/govt",
        text:"Political leaders"
    },
    {
        link:"/govtBudjet",
        text:"Government Budjet"
    },
    {
        link:"/govtPlans",
        text:"Government Plans"
    },
    // {
    //     link:"/govtOfficeNo",
    //     text:"Government Office Number"
    // },
    {
        link:"/tourPlace",
        text:"Tourist Place"
    },
    {
        link:"/helpLineNo",
        text:"Help Line Numbers"
    },
    // {
    //     link: '/about',
    //     abouttext: 'about',
    //   },
]

// export const aboutlink = [
//     {
//       link: '/about',
//       abouttext: 'about',
//     }
//   ];



export const Languages = ["Urdu", "Telugu", "Hindi", "English"]

export const HeadData = ["Skip main content |", "Dark mode |"]


export const marqueedata =[
    "Our website provides comprehensive  information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively."
]

export const learderCatogories ={
 
    para : [
        {
            api: "",
            text: "President"
        },
        {
            api: "",
            text: "Voic President",
        },
        {
            api:"http://localhost:8080/leader",
            text:"Prime Minister",
        },
        {
            api: "",
            text: "cheif Minister"
        },
        {
            api: "",
            text: "member of parlament.....(MP)"
        },
        {
            api: "",
            text: "member of ligislative assembly....(MLA)"
        },
        {
            api: "",
            text: "Zilla Parishat Territorial Constituencies....(ZPTC)"
        },
        {
            api: "",
            text: "Mandal Parishat Territorial Constituencies....(MPTC )"
        }
    ]
}


export const presidentData = {
        data:[
            "Doctor babu rajendra prasad",
            "(born December 3, 1884, Zeradei, India—died February 28, 1963, Patna)",
            " Indian politician, lawyer, and journalist who was the first president of the Republic of India (1950–62).",
            "Raised in a landowning family of modest means, Prasad was a graduate of the Calcutta Law    that College."
        ]
    
}
export const Quiteindiamomement =[
    {
        image:"resources/Quiteindia.jpg",
        text:"Quite india movment",
        button:"click me"
    },
    {
        image:"resources/nehru.png",
        text:"planing namak sitya",
        button:"click me"
    },
    {
        image:"resources/Mahatma.jpg",
        text:"Quite India",
        button:"click me"
    },
    {
        image:"resources/Nehruandbabu.jpg",
        text:"planing namak sitya",
        button:"click me"
    }

]
  
                



export const Imageslink = ["resources/flag.png","resources/govtlogo.png"]


        


//budget data starting

export const BudgetTopic = {

    budgetPara :[
        {
            budgetApi: "http://localhost:8080/budget", // Update with the correct URL
            budgetText: "Central Government budget",
        },
        {
            budgetApi :"",
            budgetText :"State Government budget",
        },
        {
            budgetApi :"",
            budgetText :"District budget",
        },
        {
            budgetApi :"",
            budgetText :"Mandel budget",
        },
        {
            budgetApi :"",
            budgetText :"Education budget",
        },
        {
            budgetApi :"",
            budgetText :"Total budget",
        },
        {
            budgetApi :"",
            budgetText :"agriculture budget",
        },
        {
            budgetApi :"",
            budgetText :"Railway budget",
        },
    ]
    
}

///plans


export const Govtplans = {
    plansparagraph:[
        {
            plansApi:"http://localhost:8080/plans",
            plansText:"Andhara Pradesh",
        },
        {
            plansApi:"",
            plansText:"Kernataka",
        },
        {
            plansApi:"",
            plansText:"Tamil Nadu",
        },
        {
            plansApi:"",
            plansText:"Goa",
        },
        {
            plansApi:"",
            plansText:"Delhi",
        },
        {
            plansApi:"",
            plansText:"Punjab",
        },
        {
            plansApi:"",
            plansText:"Gujarat",
        },
        {
            plansApi:"",
            plansText:"Rajastan",
        },
        {
            plansApi:"",
            plansText:"Odisha",
        },
        {
            plansApi:"",
            plansText:"Jammu and kashmir",
        },
        {
            plansApi:"",
            plansText:"Kolkata",
        },
        {
            plansApi:"",
            plansText:"Madhya Pradesh",
        },
        {
            plansApi:"",
            plansText:"Kerala",
        },
        {
            plansApi:"",
            plansText:"Maharashtra",
        },
        {
            plansApi:"",
            plansText:"Telangana",
        },
        {
            plansApi:"",
            plansText:"Utter Pradesh",
        },
        {
            plansApi:"",
            plansText:"Sikkim",
        },
        {
            plansApi:"",
            plansText:"Himalchal Pradesh",
        },
    ]
}


 export const data = [
    {
      question: "what is budgetin government..?",
      answer: "In government, a budget is a financial plan that allocates public funds to programs and services, promoting transparency, accountability, economic growth, job creation, and social development. ",
    },
    {
      question: "How many categories of budgets are there?",
      answer: "Government budgets typically have several categories to organize and allocate funds effectively. While the specific categories may vary between countries and levels of government, common budget categories include",
    },
    {
      question: "Categories names..?",
      answer: "Revenue,Expenditures,Debt Service,Social Services,Defense,Public Safety,Infrastructure,General Public Services,Contingency or Reserve,Transfers and Grants",
    },
    {
      question: "How do you calculate the budget at the state central level?",
      answer: "Calculating the budget at the state or central government level involves a detailed process that typically follows these steps,Revenue Estimation,Expenditure Planning,Debt Management,Social Services Allocation,Defense and Security,Public Safety and Justice,Infrastructure Investment,Administration and General Services,Contingency Planning,Transfers and Grants,Budget Review and Approval,Implementation and Monitoring ",
    },
  ];


 // Helipline numbers


 export const HelipButton = {
    HelipButtonData:[
        {
            helpApi:"http://localhost:8080/help",
            helpText:"Clickhear"
        }
    ]
 }



 ///TOURIST DATA

 

 export const TouristButton ={
    TouristButtonData : [
        {
            touristApi:"http://localhost:8080/tour",
            touristText:"Andhara Pradesh",
        },
        {
            touristApi:"",
            touristText:"Kernataka",
        }
        
    ]
 }


//  human right question


export const rightToEqualityAnswer = [
    'Article 14 ensures equality before the law.',
    'Article 15 prohibits discrimination on grounds of religion, race, caste, sex, or place of birth.',
    'Article 16 guarantees equality of opportunity in matters of public employment.',
    'Article 17 abolishes untouchability.',
    'Article 18 abolishes titles except military and academic distinctions.',
    'The right to equality means that everyone should be treated the same way and should have the same opportunities. It doesn\'t matter where someone comes from, what they believe, or how they look—everyone should be treated fairly. This right ensures that there should be no unfair discrimination, and all individuals have an equal chance to succeed in life. It\'s like saying, "We should all have the same basic rights and chances no matter who we are."',
  ];




  export const rightToFreadomAnswer = [
    'Article 19 provides citizens with the right to freedom of speech and expression,',
    'assembly, association, movement, residence, and profession',
    'Article 20 protects a person against ex post facto laws.',
    'Article 21 guarantees the right to life and personal liberty.',
    'Article 22 provides protection against arrest and detention in certain cases.',
    '',
  ];

  export const rightAgainstExploitationAnswer = [
    'Article 23 prohibits traffic in human beings and forced labor.',
    'Article 24 prohibits child labor.',
    'The right against exploitation ensures that no person, especially children, is subjected to forced labor or exploitation.',
  ];
  export const rightToFreedomOfReligionAnswer = [
    'Article 25 guarantees freedom of conscience and the right to freely profess, practice, and propagate religion.',
    'Article 26 provides for the freedom to manage religious affairs.',
    'Article 27 prohibits the use of state funds for religious purposes.',
    'Article 28 deals with freedom as to attendance at religious instruction or religious worship in certain educational institutions.',
    'The right to freedom of religion ensures that individuals have the freedom to follow and practice the religion of their choice.',
  ];
  export const culturalAndEducationalRightsAnswer = [
    'Article 29 protects the interests of minorities by allowing them to conserve their language, script, or culture.',
    'Article 30 provides the right of minorities to establish and administer educational institutions.',
    'Cultural and educational rights aim to preserve the cultural identity and educational interests of minorities.',
  ];

  export const rightToConstitutionalRemediesAnswer = [
    'Article 32 provides the right to move the Supreme Court for the enforcement of fundamental rights.',
    'The right to constitutional remedies ensures that individuals can seek legal remedies if their fundamental rights are violated.',
  ];
  
  export const rightToEducationAnswer = [
    'The Right to Education Act, enacted in 2009, is a significant step towards making education a fundamental right for children between the ages of 6 and 14.',
    'It mandates free and compulsory education for this age group in India.',
    'The goal is to provide an inclusive, equitable, and quality education system that prepares individuals for the demands of the modern world.',
  ];



//   fundamental duties


export const fundamentalDuties=[
    '1.To abide by the Constitution and respect its ideals and institutions, the National Flag, and the National Anthem.',
    '2.To cherish and follow the noble ideals that inspired the national struggle for freedom.',
    '3.To uphold and protect the sovereignty, unity, and integrity of India.',
    '4.To defend the country and render national service when called upon to do so.',
    '5.To promote harmony and the spirit of common brotherhood among all the people of India transcending religious, linguistic, and regional or sectional diversities. To renounce practices derogatory to the dignity of women.',
    '6.To value and preserve the rich heritage of our composite culture.',
    '7.To protect and improve the natural environment including forests, lakes, rivers, and wildlife, and to have compassion for living creatures.',
    '8.To develop the scientific temper, humanism, and the spirit of inquiry and reform.',
    '9.To safeguard public property and to abjure violence.',
    '10.To strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavor and achievement.',
]












  
  





