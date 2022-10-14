import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Board from './Board';
import Managar from './Managar';
import Live from './Live';


function MainContent() {
  return (
    <>
    <Container>
        <Header />
        <Lessons>
            <SectionOne><Board /></SectionOne>
            <Sectiontwo>
               <Managar />
            </Sectiontwo>
            <Sectionthree><Live /></Sectionthree>
        </Lessons>
    </Container> 
    </>
  )
}
const Container = styled.div`
    width: 80%;
    padding: 20px 30px 20px 30px;
`;
const Lessons = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr;
    grid-gap: 40px;
    margin-left: 20px;
`;
const SectionOne = styled.div`
   grid-column-start: 1;
    grid-column-end: 3;

`;
const Sectiontwo = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;

`;const Sectionthree = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;

`;
export default MainContent




{/* <Top>
<Heading>New Lessons Board</Heading>
<Arrow><Left /></Arrow>
<Arrow><Right /></Arrow>
</Top>
<Board>
<Chemistry>
    <Card>
        <Buret />
    </Card>
    <Text>Basic Chemistry 1111</Text>
    <Paragraph></Paragraph>
</Chemistry>
</Board> */}