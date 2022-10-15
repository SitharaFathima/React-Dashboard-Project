import React from 'react'
import Sidebar from '../../Sidebar'
import styled from 'styled-components';


function Notes() {
  return (
    <>
      <Container>
        <Sidebar />
        <Header>Technology</Header >
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
export default Notes