import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
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
  padding: 4px 8px 20px;
`;
export default App;











