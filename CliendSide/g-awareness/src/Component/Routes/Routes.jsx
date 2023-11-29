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
// import Tourist from '../Tourist/Tourist';
import HelpLine from '../Helpline/Helplinenumber';
import { getSearchLeader } from '../../redux/ProductRedux/action';
import AboutPage from '../aboutpage';

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
        {/* <Route path='/tourPlace' Component={Tourist} /> */}
        <Route path='/helpLineNo' Component={HelpLine} />
        {/* <Route path='/Aboutpage' Component={AboutPage}/> */}
   
      </Routes>
      <AboutPage/>
      
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
