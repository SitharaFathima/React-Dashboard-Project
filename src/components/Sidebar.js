import React, { useState } from "react";
import styled from "styled-components";
import Logocomp from "../assets/images/logo-comp.png";
import Rectangle from "../assets/images/Rectangle 20.jpg";
import { NavLink } from "react-router-dom";

const Bar = [
    {
        title: "Home",
        grayIcon: require("../assets/images/Component 114.svg").default,
        BlackIcon: require("../assets/images/home.svg").default,
        link: "/home",
    },
    {
        title: "Sheduler",
        grayIcon: require("../assets/images/Food-Site.svg").default,
        BlackIcon: require("../assets/images/sheduler.svg").default,

        link: "/sheduler",
    },
    {
        title: "Technology",
        grayIcon: require("../assets/images/Component 115.svg").default,
        BlackIcon: require("../assets/images/technology.svg").default,

        link: "/technology",
    },
    {
        title: "Rewards",
        grayIcon: require("../assets/images/Component 114.svg").default,
        BlackIcon: require("../assets/images/rewards.svg").default,
        link: "/rewards",
    },
    {
        title: "Notes",
        grayIcon: require("../assets/images/Component 115.svg").default,
        BlackIcon: require("../assets/images/notes.svg").default,
        link: "/notes",
    },
    {
        title: "Submission",
        grayIcon: require("../assets/images/Component 118.svg").default,
        BlackIcon: require("../assets/images/submisssion.svg").default,
        link: "/submission",
    },
];

function Sidebar() {
    const [title, setTitle] = useState("");
     
    return (
        <Container>
            <Top>
                <Logo>
                    <LogoImage src={Logocomp} />
                </Logo>
                <Div>
                    <MenuItems>
                        {Bar.map((val, key) => (
                            <NavbarLink
                                to={val.link}
                                key={key}
                                onClick={() => setTitle(val.title)}
                            >
                                <Icons>
                                    <Icon id="not" src={val.grayIcon} />
                                    <Icon id="active" src={val.BlackIcon} />
                                </Icons>
                                <Text id="title">{val.title}</Text>
                            </NavbarLink>
                        ))}
                    </MenuItems>
                </Div>
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
    );
}

const Container = styled.div`
    width: 20%;
    box-shadow: -1px 3px 10px 2px #9e9696;
    padding-bottom: 30px;
    padding-right: 5px;
    @media all and (max-width: 1280px){
        padding-right: 0px;
    }
    @media all and (max-width: 980px){
        width: 25%;
    }
    @media all and (max-width: 640px){
        display: none;
    } 
`;
const Top = styled.div`
    padding: 20px 0px 60px 80px;
    @media all and (max-width: 1380px){
        padding: 20px 0px 35px 50px;
    }
    @media all and (max-width: 1280px){
        padding: 20px 0px 0px 30px;
    }
    @media all and (max-width: 768px){
        padding: 20px 0px 70px 20px;
    }
`;
const Logo = styled.h1`
    width: 30%;
    margin-left: 25px;
    margin-bottom: 80px;
    @media all and (max-width: 1380px){
        width: 40%;  
    }
    @media all and (max-width: 1280px){
        width: 50%; 
    }
    @media all and (max-width: 980px){
        margin-bottom: 110px;
        margin-top: 60px;
    }  
`;
const LogoImage = styled.img`
    display: block;
    width: 100%;
`;
const Div = styled.div``;
const MenuItems = styled.ul``;
const NavbarLink = styled(NavLink)`
    display: flex;
    align-items: center;
    margin-bottom: 45px;
    cursor: pointer;
    color: #9e9696;
    &.active {
        color: #000;
    }
    &.active #active {
        display: block;
    }
    &.active #not {
        display: none;
    }
    & #not {
        display: block;
    }
    @media all and (max-width: 980px){
        margin-bottom: 65px;
    }
`;
const Icons = styled.button`
    margin-right: 25px;
    display: inline-block;
    width: 20px;
    cursor: pointer;
    @media all and (max-width: 768px){
        width: 18px;
        margin-right: 15px;
    }
`;
const Icon = styled.img`
    width: 100%;
    display: none;
`;
const Text = styled.h3`
    font-size: 14px;
    @media all and (max-width: 768px){
        font-size: 12px;
    }
`;
const Bottom = styled.div`
    display: flex;
    justify-content: end;
`;
const Premium = styled.div`
    padding: 22px;
    box-shadow: -2px 4px 5px #9e9696;
    width: 85%;
    @media all and (max-width: 1380px){
        width: 90%;
    }
    @media all and (max-width: 1080px){
        width: 100%;
        box-shadow: none;
    }
`;
const ImageContainer = styled.div`
    width: 130px;
    margin: 0 auto;
    @media all and (max-width: 768px){
        width: 100px;
    }
`;
const Image = styled.img`
    width: 100%;
    display: inline-block;
`;
const Bluecard = styled.button`
    background-color: #1c40fa;
    padding: 12px 15px;
    border-radius: 5px;
    color: #fff;
    display: block;
    width: 60%;
    margin: 0 auto 15px;
    font-size: 12px;
    cursor: pointer;
    @media all and (max-width: 1380px){
        width: 75%;
        margin-top: 10px;
    }
    
    @media all and (max-width: 768px){
        width: 100%;
    }
`;
const Whitecard = styled.button`
    background-color: #f8fafb;
    padding: 12px 15px;
    border-radius: 5px;
    color: #1c40fa;
    width: 60%;
    margin: 0 auto;
    display: block;
    font-size: 12px;
    cursor: pointer;
    @media all and (max-width: 1380px){
        width: 75%;
    }
    @media all and (max-width: 768px){
        width: 100%;
    }
`;


export default Sidebar;
