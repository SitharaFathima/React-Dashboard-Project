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