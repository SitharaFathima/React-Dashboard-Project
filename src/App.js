import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Home from './components/screens/home/Home';
import Notes from './components/screens/notes/Notes';
import Rewards from './components/screens/rewards/Rewards';
import Sheduler from './components/screens/sheduler/Sheduler';
import Submission from './components/screens/submission/Submission';
import Technology from './components/screens/technology/Technology';


function App() {
  return (
    <div className="App">
      
  <Router>
    <Routes>
      <Route path="/" element={
        <MainContainer>
          <Sidebar />
          <MainContent />
        </MainContainer> 
        }
      />
        <Route path="/sheduler" element={<Sheduler />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/submission" element={<Submission />} />
    </Routes>
  </Router>
      
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  padding: 4px 8px 50px;
`;
export default App;








// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }














// Font Family :poppins
// link:https://www.fontspace.com/poppins-font-f32764

// Font Size - 
// H1 :20px
// H2 :16px
// H3 :14px
// H4 :12px

// Colours -
// Black:000000
// Grey:9E9696
// Blue:5C75FB
// Blue dark:1C40FA
// Green :0BD752
// Green circle:59F195
// White :F8FAFB