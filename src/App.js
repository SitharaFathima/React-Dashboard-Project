import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Sidebar />
        <MainContent />
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  padding: 4px 8px;
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