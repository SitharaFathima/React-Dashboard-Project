import React from 'react';
import styled from 'styled-components';
import Woman from "../assets/images/woman (4) 1.png";
import { AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';
import Navbar from './Navbar';


function Header() {


  return (
    <Head>
        <Hamberger>
            <Navbar />
        </Hamberger>
        <Items>
            <Item>
                <Box>
                    <Round><Two>2</Two></Round>
                    <AiOutlineBell />
                </Box> 
            </Item>
            <Item>
                <AiOutlineSetting />
            </Item>
            <Item>
                <Profile src={Woman} />
            </Item>
        </Items>
    </Head>
  )
}

const Head = styled.header`
   display:flex;
    justify-content: flex-end;
   @media all and (max-width: 640px){
        padding: 0 20px;
        justify-content: space-between;
    }
`;
const Hamberger = styled.div`
   display: none;
   @media all and (max-width: 640px){
        display: block;
    }
`;
const Items = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media all and (max-width: 640px){
        display: none;
    }
`;
const Item = styled.li`
    margin-right: 10px;
    width: 25px;
`;
const Round = styled.div`
   width: 8px;
   height: 8px;
   background-color: #1C40FA;
   border-radius: 50px;
   margin: 0 auto;
   position: absolute;
   top:-1px;
   right: 8px;
`;
const Box = styled.div`
   position: relative;
`;
const Two = styled.h6`
   font-size: 8px;
   text-align: center;
`;
const Profile = styled.img`
    width: 100%;
    display: block;
    border: 1px solid #000;
    border-radius: 50px;
`;
export default Header