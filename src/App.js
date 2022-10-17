import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Notes from "./components/screens/notes/Notes";
import Rewards from "./components/screens/rewards/Rewards";
import Sheduler from "./components/screens/sheduler/Sheduler";
import Submission from "./components/screens/submission/Submission";
import Technology from "./components/screens/technology/Technology";
import { Helmet } from 'react-helmet';



function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainContainer>
                                <Sidebar />
                                <MainContent />
                            </MainContainer>
                        }
                    />
                    <Route
                        path="/home"
                        element={
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
    padding: 4px 8px 0px;
`;
export default App;
