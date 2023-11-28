import { Route, Routes } from 'react-router';
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Leader from "../LeaderPage/leaderpage";
import { Home } from '../Home/Home';

function Link() {
  return (
    <div className="App">
         <Navbar/>
         <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/Govt" Component={Leader}/>
            <Route path="/President" Component={Leader}/>
            <Route path="/vice-president" Component={Leader}/>
            <Route path="/MP" Component={Leader}/>
            <Route path="/MLA" Component={Leader}/>
            <Route path="/ZPTC" Component={Leader}/>
            <Route path="/MPTC" Component={Leader}/>
          </Routes>  
        <Footer/> 

    </div>
  );
}

export default Link
