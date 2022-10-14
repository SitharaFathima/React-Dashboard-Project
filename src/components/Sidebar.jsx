import React from 'react';
import styled from 'styled-components';
import Logocomp from "../assets/images/logo-comp.png";
import Rectangle from "../assets/images/rectangle 20.jpg";
import {Link,  NavLink } from 'react-router-dom';


function Sidebar() {
  return (
    <Container>
        <Top>
            <Logo>
                <LogoImage src={Logocomp} />
            </Logo>
            <MenuItems>
                <NavbarLink to="/">
                    <Icons>
                        <Icon src={require("../assets/images/component 114.svg").default} />
                    </Icons>
                    <Text>Home</Text>
                </NavbarLink>
                <NavbarLink to="/sheduler">
                    <Icons>
                        <Icon src={require("../assets/images/food-site.svg").default} />
                    </Icons>
                    <Text>Sheduler</Text>
                </NavbarLink>
                <NavbarLink to="/technology">
                    <Icons>
                        <Icon src={require("../assets/images/component 115.svg").default} />
                    </Icons>
                    <Text>Technology</Text>
                </NavbarLink>
                <NavbarLink to="/rewards">
                    <Icons>
                        <Icon src={require("../assets/images/component 114.svg").default} />
                    </Icons>
                    <Text>Rewards</Text>
                </NavbarLink>
                <NavbarLink to="/notes">
                    <Icons> 
                    <Icon src={require("../assets/images/component 115.svg").default} />
                    </Icons>
                    <Text>Notes</Text>
                </NavbarLink>
                <NavbarLink to="/submission">
                    <Icons>
                        <Icon src={require("../assets/images/component 118.svg").default} />
                    </Icons>
                    <Text>Submission</Text>
                </NavbarLink>
            </MenuItems>
        </Top>       
        <Bottom>
            <Premium>
                <ImageContainer>
                    <Image src={Rectangle} />
                </ImageContainer>   
                <Bluecard>Buy Premium</Bluecard>
                <Whitecard>Learn more</Whitecard>
            </Premium>
        </Bottom>  
    </Container>
  )
}

const Container = styled.div`
    width: 20%;
    box-shadow: -1px 3px 10px 2px #9E9696;   
    padding-bottom: 30px;
    padding-right: 5px;
`;
const Top = styled.div`
    padding: 20px 0px 60px 80px;
`;
const Logo = styled.h1`
    width: 30%;
    margin-left: 25px;
    margin-bottom: 80px;
`;
const LogoImage = styled.img`
    display: block;
    width: 100%;
`;
const MenuItems = styled.div`
`;
const NavbarLink = styled(NavLink)`
    display: flex;
    align-items: center;
    margin-bottom: 45px;
    &:hover {      
        color: #000;
    }
 `;
const Icons = styled.div`
    margin-right: 25px;
    width: 20px;
`;
const Icon = styled.img`
    width: 100%;
    display: block;
`;
const Text = styled.h3`
    font-size: 14px;
    color: #9E9696;
`;
const Bottom = styled.div`
   display: flex;
   justify-content: end; 
`;
const Premium = styled.div`
    padding:22px;
    box-shadow: -2px 4px 5px #9E9696;
    width: 85%;
`;
const ImageContainer = styled.div`
    width: 130px;
    margin: 0 auto;
`;
const Image = styled.img`
    width: 100%;
    display: inline-block;
`;
const Bluecard = styled.button`
    background-color: #1C40FA;
    padding: 12px 15px;
    border-radius: 5px;
    color: #fff;
    display: block;
    width: 60%;
    margin: 0 auto 15px;
    font-size: 12px;
    cursor: pointer;
`;
const Whitecard = styled.button`
    background-color: #F8FAFB;
    padding: 12px 15px;
    border-radius: 5px;
    color: #1C40FA;
    width: 60%;
    margin: 0 auto;
    display: block;
    font-size: 12px;
    cursor: pointer;
`;


export default Sidebar 