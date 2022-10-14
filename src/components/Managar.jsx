import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Managar() {
  return (
    <Manager>
        <Top>
            <Text>Assignment Manager</Text>
            <List>
                <Item><Line exact to="/" activeClassName="active-link">pending</Line></Item>
                <Item><Line exact to="/" activeClassName="active-link">completed</Line></Item>
                <Item><Line exact to="/" activeClassName="active-link">submitted</Line></Item>
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
                        <Yellow>Resume</Yellow>
                    </Right>
                </Main>
                <Main>
                    <Left>
                        <Basic>Mental Math I</Basic>
                        <Final>Class test I Due tomorrow</Final> 
                    </Left>
                    <Right>
                        <Violet>Start</Violet>
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
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
`;
const List = styled.ul`
   display: flex;
   margin-bottom: 54px;
`;
const Item = styled.li`
    margin-right: 40px;
`;
const Line = styled(NavLink)`
    color: #9E9696;
    font-size: 12px;
        &:hover {   
            color: #000;
            border-bottom: 3px solid #1C40FA;
        }
`;
const Card = styled.div`
    padding: 70px 40px 20px;
    box-shadow: -1px 3px 7px -1px #9e9696;
`;
const Main = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;
const Left = styled.div`

`;
const Right = styled.div`

`;
const Box = styled.div`
    display: flex;
`;
const Basic = styled.h3`
    font-size: 12px;
    font-weight: 700;
    color: #000;
    margin-bottom: 15px;
    font-family: 600;
    margin-right: 35px;
`;
const Filler = styled.div`
    display:flex;
`;
const Blue = styled.div`
    width: 60px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 10px;
    background-color: #1C40FA;
`;
const Gray = styled.div`
    width: 60px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 10px;
    background-color: #9e9696;
`;
const Final = styled.p`
     color: #9E9696;
     font-size: 12px;
`;
const Yellow = styled.button`
    font-size: 12px;
    color: yellow;
    text-align: center;
    cursor: pointer;
    padding: 12px 20px;
    border-radius: 5px;
    border: 2px solid yellow;
    width: 100px;
`;
const Violet = styled.button`
    font-size: 12px;
    color: #5CFB;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    padding: 12px 20px;
    border: 2px solid #5CFB;
    width: 100px;
`;
export default Managar