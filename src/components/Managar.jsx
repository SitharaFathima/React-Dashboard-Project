import React from 'react';
import styled from 'styled-components';

function Managar() {
  return (
    <Manager>
        <Top>
            <Text>Assignment Manager</Text>
            <List>
                <Item><Line>pending</Line></Item>
                <Item><Line>completed</Line></Item>
                <Item><Line>submitted</Line></Item>
            </List>
            <Card>
                <Main>
                    <Left>
                        <Box>
                            <Basic>Basic Physics I</Basic>
                            <Filler>
                                <Blue></Blue>
                                <Gray></Gray>
                            </Filler>   
                        </Box>
                        <Final>Final assessment I Due 14th March 2020</Final>
                    </Left>
                    <Right>
                        <Resume><Yellow>Resume</Yellow></Resume>
                    </Right>
                </Main>
                <Main>
                    <Left>
                        <Basic>Mental Math I</Basic>
                        <Final>Class test I Due tomorrow</Final> 
                    </Left>
                    <Right>
                        <Resume><Violet>Start</Violet></Resume>
                    </Right>
                </Main>
            </Card>    
        </Top>
    </Manager>
  )
}

const Manager = styled.div`

`;
const Top = styled.div`

`;
const Text = styled.h2`
    color: #000;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 25px;
`;
const List = styled.ul`
   display: flex;
   margin-bottom: 40px;
`;
const Item = styled.li`
    margin-right: 40px;
`;
const Line = styled.h4`
    color: #9E9696;
    font-size: 12px;
        &:hover {
            width: 56px;
            color: #000;
            border-bottom: 3px solid #1C40FA;
    }
`;
const Card = styled.div`

`;
const Main = styled.div`

`;
const Left = styled.div`

`;
const Right = styled.div`

`;
const Box = styled.div`

`;
const Basic = styled.h3`

`;
const Filler = styled.div`

`;
const Blue = styled.div`

`;
const Gray = styled.div`

`;
const Final = styled.p`

`;
const Resume = styled.div`

`;
const Yellow = styled.h4`

`;
const Violet = styled.h4`

`;
export default Managar