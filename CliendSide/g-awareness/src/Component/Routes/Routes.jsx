import { Route, Routes } from 'react-router';
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Leader from "../LeaderPage/leaderpage";

function Link() {
  return (
    <div className="App">
         <Navbar/>
        <Leader/>
        <Footer/> 
        
         <Routes>
          <Route path="/" exact Component={Home}/>
           <Route path="/Prime-miniter"/>
           <Route path="/President"/>
           <Route path="/vice-president"/>
           <Route path="/MP"/>
           <Route path="/MLA"/>
           <Route path="/ZPTC"/>
           <Route path="/MPTC"/>
           
        </Routes> 
    </div>
  );
}

export default Link
