import React from 'react'
import Sidebar from '../../Sidebar'
import styled from 'styled-components';


function Sheduler() {
  return (
    <>
      <Container>
        <Sidebar />
        <Header>Sheduler</Header >
      </Container>
    </>
  )
}
const Container = styled.div`
  display: flex;
`;
const Header = styled.div`
  width: 80%;
`;
export default Sheduler