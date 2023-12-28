import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Leader from "../LeaderPage/index";
// import { Home } from '../Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../Home/Home';
import Budget from '../budget/budget';
import GovtPlans from '../governmentplans/govtplans';
import GovtOffice from '../officenumber/govtoffice';
import Tourist from '../Tourist/Tourist';
import HelpLine from '../Helpline/Helplinenumber';
import { getSearchLeader } from '../../redux/ProductRedux/action';
import AboutPage from '../aboutpage';
import UpscJob from '../Jobs/UPSC';
import Human from '../Human/Human';
import Railways from '../Railway/Railway';
import BeidExam from '../BeidExam/beidExam';
import Neet from '../NEET/neet';
import CbiInformation from '../CBI/Cbi';
import Agriculture from '../Agriculture/agriculture';
import Army from '../Army/Army';
import CricketGame from '../Cricket/Cricket';
import QuietIndia from '../QuiteIndia/QuietIndia';
import Satyagrah from '../Satyagraha/Satyagrah';

import Fighter from '../freedom/ffighters';









function Routefunction() {

  const { LeaderData } = useSelector((state) => state.leader);
  const dispatch = useDispatch()


  
  const [inputdata, setInputdata] = useState("");

  const onClickfunction = () => {
    dispatch(getSearchLeader(inputdata))
  }
  console.log(LeaderData)

  
  return (
    <div className="App">


      <Navbar input={inputdata} setInputdata={setInputdata} onClickfunction={onClickfunction} />
      {/* <Home/> */}
      <Routes>
        <Route path="/home" exact Component={Home} />
        <Route path="/Govt" element={<Leader LeaderData={LeaderData} />} />
        <Route path="/President" Component={Leader} />
        <Route path="/vice-president" Component={Leader} />
        <Route path="/MP" Component={Leader} />
        <Route path="/MLA" Component={Leader} />
        <Route path="/ZPTC" Component={Leader} />
        <Route path="/MPTC" Component={Leader} />
        {/* <Route path='/govtBudjet' Component={Budget} /> */}
        <Route path='/govtBudjet' element={<Budget />} />
        <Route path='/govtPlans' Component={GovtPlans} />
        <Route path='/govtOfficeNo' Component={GovtOffice} />
        <Route path='/tourPlace' Component={Tourist} />
        <Route path='/helpLineNo' Component={HelpLine} />
        <Route path='/about' Component={AboutPage}/>
        <Route path='/human' Component={Human}/>
        <Route path="/upse" element={<UpscJob/>} />
        <Route path="/rail" element={<Railways/>} />
        <Route path="/beid" element={<BeidExam/>} />
        <Route path="/Neet" element={<Neet/>} />
        <Route path="/Cbi" element={<CbiInformation/>} />
        <Route path="/agri" element={<Agriculture/>} />
        <Route path="/army" element={<Army/>} />
        <Route path="/Cricket" element={<CricketGame/>} />
        <Route path="/quit" element={<QuietIndia/>} />
        <Route path="/satya" element={<Satyagrah/>} />
        <Route path="/fighet" element={<Fighter/>} />











   
      </Routes>
      {/* <AboutPage/> */}
      {/* <Fighter/> */}
      
      <Footer />


    </div>
  );
}

export default Routefunction





// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Footer from "../Footer/footer";
// import Navbar from "../Navbar/navbar";
// import Leader from "../LeaderPage/index";
// // import { Home } from '../Home/Home';
// import { useDispatch, useSelector } from 'react-redux';
// import Home from '../Home/Home';
// import Budget from '../budget/budget';
// import GovtPlans from '../governmentplans/govtplans';
// import GovtOffice from '../officenumber/govtoffice';
// import Tourist from '../Tourist/Tourist';
// import HelpLine from '../Helpline/Helplinenumber';
// import { getSearchBudget, getSearchLeader } from '../../redux/ProductRedux/action';

// function Routefunction() {

//   const { LeaderData,budgetData } = useSelector((state) => state.leader,state.budget);
//   const dispatch = useDispatch()


  
//   const [inputdata, setInputdata] = useState("");

//   const onClickfunction = () => {
//     dispatch(getSearchLeader,getSearchBudget(inputdata))
//   }
//   console.log(LeaderData)
//   console.log(budgetData)

  
//   return (
//     <div className="App">


//       <Navbar input={inputdata} setInputdata={setInputdata} onClickfunction={onClickfunction} />
//       {/* <Home/> */}
//       <Routes>
//         <Route path="/home" exact Component={Home} />
//         <Route path="/Govt" element={<Leader LeaderData={LeaderData} />} />
//         <Route path="/President" Component={Leader} />
//         <Route path="/vice-president" Component={Leader} />
//         <Route path="/MP" Component={Leader} />
//         <Route path="/MLA" Component={Leader} />
//         <Route path="/ZPTC" Component={Leader} />
//         <Route path="/MPTC" Component={Leader} />
//         {/* <Route path='/govtBudjet' Component={Budget} /> */}
//         <Route path='/govtBudjet' element={<Budget />} />

//         <Route path='/govtPlans' Component={GovtPlans} />
//         <Route path='/govtOfficeNo' Component={GovtOffice} />
//         <Route path='/tourPlace' Component={Tourist} />
//         <Route path='/helpLineNo' Component={HelpLine} />
   
//       </Routes>
//       <Footer />


//     </div>
//   );
// }

// export default Routefunction
