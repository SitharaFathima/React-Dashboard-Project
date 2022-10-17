import React from 'react';
import styled from 'styled-components';

function Live() {
  return (
    <Session>
        <Maincontent>
            <Conteny>
                <Heading>Live session</Heading>
                <Ball></Ball>
            </Conteny>
            <Main>
                <Card>
                    <Lecture>Ongoing Lecture</Lecture>
                </Card>
                <Force>
                    <Momentum>
                        <Paragraph>
                            <Para>Force and momentum revision </Para>
                            <Physics><Span>Physics</Span> Pro Lee Dan Qi</Physics>
                        </Paragraph>
                        <Bluebox>
                            <Right><Arrow><Image src={require("../assets/images/component 116.svg").default} /></Arrow></Right>
                            <Left><Text>join</Text></Left>
                        </Bluebox>      
                    </Momentum>
                    <Bottom>
                        <Mass>
                            <Item><Round><Tick src={require("../assets/images/check circle_1.svg").default} /></Round>Force and unit</Item>
                            <Item><Round><Tick src={require("../assets/images/check circle_.svg").default} /></Round>Mass and acceleration</Item>
                            <Item><Round><Tick src={require("../assets/images/check circle_.svg").default} /></Round>Gain of Momentum</Item>
                        </Mass>
                        <Mass>
                            <Item>03:40<Time>min</Time></Item>
                            <Item>06:08<Time>min</Time></Item>
                            <Item>09:30<Time>min</Time></Item>                           
                        </Mass>
                        <Mass>
                            <Item><Medium>Medium</Medium></Item>
                            <Item><Hard>Hard</Hard></Item>
                            <Item><Medium>Medium</Medium></Item>
                        </Mass>
                    </Bottom>
                </Force>
            </Main>   
        </Maincontent>
    </Session>
  )
}

const Session = styled.div`

`;
const Maincontent = styled.div`
   
`;
const Conteny = styled.div`
    display: flex;
    
`;
const Main = styled.div`
    box-shadow: -1px 3px 7px -1px #9e9696;
`;
const Heading = styled.h2`
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
    margin-right: 15px;
`;
const Ball = styled.div`
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: #0BD752;
    border-radius: 50px;
`;
const Card = styled.div`
    padding: 20px 0;
    border-bottom: 2px solid  #9e9696;
`;
const Lecture = styled.h3`
    font-size: 14px;
    margin-left: 40px;
`;
const Force = styled.div`
    padding: 22px 40px 0px;
    @media all and (max-width: 1280px){
        padding: 22px 20px 0px;
    }
    @media all and (max-width: 1080px){
        padding: 22px 10px 0px;
    }
    @media all and (max-width: 980px){
        padding: 22px 40px 0px;
    }
    @media all and (max-width: 480px){
        padding: 22px 10px 0px;
    }
`;
const Momentum = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #9e9696;
`;
const Paragraph = styled.div`
    margin-bottom: 20px;
`;
const Para = styled.p`
    font-size: 14px;
    color: #000;
    @media all and (max-width: 480px){
        font-size: 12px;
    }
`;
const Text = styled.h4`
    font-size: 14px;
    color: #fff;
    text-align: center;
`;
const Time = styled.span`
    color: #9e9696;
    font-size: 12px;
`;
const Physics = styled.h4`
    font-size: 12px;
    color: #000;
`;
const Span = styled.span`
    color: #1C40FA;
`;
const Bluebox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const Right = styled.button`
    width: 30px;
    height: 30px;
    background-color: #1C40FA;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    @media all and (max-width: 360px){
        width: 25px;
        height: 30px;
    }
`;
const Arrow = styled.span`
    width: 20px;
    margin: auto;
    display: inline-block;
`;
const Image = styled.img`
    width: 100%;
    display: block;
    margin-top: 4px;
`;
const Left = styled.button`
    width: 65px;
    height: 30px;
    padding: 8px 20px;
    background-color: #516BFE;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    @media all and (max-width: 360px){
        width: 55px;
        height: 30px;
    }
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
`;
const Mass = styled.div`
    
`;
const Item = styled.h5`
    font-size: 12px;
    margin-bottom: 25px;
    @media all and (max-width: 480px){
        font-size: 11px;
    }
    @media all and (max-width: 360px){
        font-size: 10px;
    }
`;
const Round = styled.span`
    display: inline-block;
    width: 13px;
    margin-right: 15px;
    @media all and (max-width: 480px){
        margin-right: 5px;
    }
`;
const Tick = styled.img`
    width: 100%;
    display: block;
`;
const Medium = styled.button`
    padding: 5px 15px;
    background-color: #D9D9D9;
    border-radius: 3px;
    font-size: 10px;
    width: 70px;
    @media all and (max-width: 360px){
        padding: 5px 10px;
        width: 45px;
        font-size: 8px;
    }
`;
const Hard = styled.button`
    padding: 5px 15px;
    border-radius: 3px;
    font-size: 10px;
    width: 70px;
    background-color:#9E9596;
    text-align: center;
    @media all and (max-width: 360px){
        padding: 5px 10px;
        width: 45px;
        font-size: 8px;
    }
`;

export default Live