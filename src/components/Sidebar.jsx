import React from 'react';
import styled from 'styled-components';



function Sidebar() {
  return (
    <Container>
        <Logo>
          <LogoImage src="Logo" />
        </Logo>
    </Container>
  )
}

const Container = styled.div`

`;
const Logo = styled.h1`

`;
const LogoImage = styled.img`

`;
export default Sidebar