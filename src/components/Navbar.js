import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink tof="/home">Home</MenuLink>
        <MenuLink to="/sheduler">Sheduler</MenuLink>
        <MenuLink to="/technology">Technology</MenuLink>
        <MenuLink to="/rewards">Rewards</MenuLink>
        <MenuLink to="/notes">Notes</MenuLink>
        <MenuLink to="/submission">Submission</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled(NavLink)`
  padding: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #9E9696;
  transition: all 0.3s ease-in;
  font-size: 14px;

  &:hover {
    color: #000;
  }
`;

const Nav = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media all and (max-width: 640px) {
    overflow: hidden;
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background-color: #fff;
    z-index: 7;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media all and (max-width: 640px) {
    display: flex;
    margin-top: 30px;
  }
`;












// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { AiOutlineClose } from 'react-icons/ai';
// import { NavLink } from "react-router-dom";


// const Bar = [
//     {
//         title: "Home",
//         grayIcon: require("../assets/images/component 114.svg").default,
//         BlackIcon: require("../assets/images/home.svg").default,
//         link: "/home",
//     },
//     {
//         title: "Sheduler",
//         grayIcon: require("../assets/images/food-site.svg").default,
//         BlackIcon: require("../assets/images/sheduler.svg").default,

//         link: "/sheduler",
//     },
//     {
//         title: "Technology",
//         grayIcon: require("../assets/images/component 115.svg").default,
//         BlackIcon: require("../assets/images/technology.svg").default,

//         link: "/technology",
//     },
//     {
//         title: "Rewards",
//         grayIcon: require("../assets/images/component 114.svg").default,
//         BlackIcon: require("../assets/images/rewards.svg").default,
//         link: "/rewards",
//     },
//     {
//         title: "Notes",
//         grayIcon: require("../assets/images/component 115.svg").default,
//         BlackIcon: require("../assets/images/notes.svg").default,
//         link: "/notes",
//     },
//     {
//         title: "Submission",
//         grayIcon: require("../assets/images/component 118.svg").default,
//         BlackIcon: require("../assets/images/submisssion.svg").default,
//         link: "/submission",
//     },
// ];

// function Mobilemenu() {

// const [title, setTitle] = useState("");
// const [extendNavbar, setExtendNavbar] = useState(false);
   
//    return (
//     <Div>
         
//         <Close> 
//             <AiOutlineClose />
//         </Close>
//         <MenuItems>
//             {Bar.map((val, key) => (
//                 <NavbarLink
//                     to={val.link}
//                     key={key}
//                     onClick={() => setTitle(val.title)}
//                 >
                   
//                     <Icons>
//                         <Icon id="not" src={val.grayIcon} />
//                         <Icon id="active" src={val.BlackIcon} />
//                     </Icons>
//                     <Text id="title">{val.title}</Text>
//                 </NavbarLink>
//             ))}
//         </MenuItems>
//     </Div>
//   )
// }

// const Div = styled.div`
//     background: #fff;
// 	width: 290px;
// 	top: 0;
// 	bottom: 0;
// 	left: 0;
// 	z-index: 4;
// 	position: fixed;
// 	padding: 30px 42px ;
// 	display: none;
   
// `;
// const Close = styled.div`
//     margin-bottom: 50px;
// `;
// const MenuItems = styled.ul`

// `;
// const NavbarLink = styled(NavLink)`
//     display: flex;
//     align-items: center;
//     margin-bottom: 45px;
//     cursor: pointer;
//     color: #9e9696;
//     &.active {
//         color: #000;
//     }
//     &.active #active {
//         display: block;
//     }
//     &.active #not {
//         display: none;
//     }
//     & #not {
//         display: block;
//     }
   

// `;
// const Icons = styled.button`
//     margin-right: 25px;
//     display: inline-block;
//     width: 20px;
//     cursor: pointer;

// `;
// const Icon = styled.img`
//     width: 100%;
//     display: none;
// `;
// const Text = styled.h3`
//     font-size: 14px;

// `;
// export default Mobilemenu