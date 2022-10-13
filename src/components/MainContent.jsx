import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Board from './Board';
function MainContent() {
  return (
    <>
    <Container>
        <Header />
        <Lessons>
            <SectionOne><Board /></SectionOne>
            {/* <SectionTwo>2</SectionTwo>
            <SectionThree>3</SectionThree> */}
            <SectionFour>4</SectionFour>
            <SectionFive>5</SectionFive>
        </Lessons>
    </Container> 
    </>
  )
}
const Container = styled.div`
    width: 80%;
    padding: 20px 30px;
`;
const Lessons = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-gap: 10px;
`;
const SectionOne = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;

`;
// const SectionTwo = styled.div`

// `;
// const SectionThree = styled.div`

// `;
const SectionFour = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;

`;const SectionFive = styled.div`
    grid-column-start: 3;
    grid-column-end: 5;

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