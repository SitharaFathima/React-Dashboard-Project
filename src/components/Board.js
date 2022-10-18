import React, { useState } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <One className={className}
        onClick={onClick}>
            <FaAngleLeft />
        </One>   
    );
}
 
function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <Two className={className}
        onClick={onClick}>
        <FaAngleRight />
        </Two>
     
    );
  }
function Board() {

const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

const datas = [
    {
        id:1,
        title: 'Basic Chemistry III',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/Rectangle 4.jpg'),
        icon: require('../assets/images/woman (4) 1.png'),
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'

    },
    {
        id:2,
        title: 'Mechanics in Physics',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/physics.png'),
        icon: require('../assets/images/woman (3).png'),
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'

    },
    {
        id:3,
        title: 'Focusv on Words',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/Rectangle 20694.jpg'),
        icon: require('../assets/images/man.png'),
        name: 'By Prof Steven Joe',
        period: '3 days ago'

    },
    {
        id:1,
        title: 'Basic Chemistry III',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/Rectangle 4.jpg'),
        icon: require('../assets/images/woman (4) 1.png'),
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'

    },
    {
        id:3,
        title: 'Focusv on Words',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/Rectangle 20694.jpg'),
        icon: require('../assets/images/man.png'),
        name: 'By Prof Steven Joe',
        period: '3 days ago'
    },
    {
        id:1,
        title: 'Basic Chemistry III',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/Rectangle 4.jpg'),
        icon: require('../assets/images/woman (4) 1.png'),
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'
    },
    {
        id:1,
        title: 'Basic Chemistry III',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/Rectangle 4.jpg'),
        icon: require('../assets/images/woman (4) 1.png'),
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'
    },
    {
        id:2,
        title: 'Mechanics in Physics',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/physics.png'),
        icon: require('../assets/images/woman (3).png'),
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'
    },
    {
        id:1,
        title: 'Basic Chemistry III',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/Rectangle 4.jpg'),
        icon: require('../assets/images/woman (4) 1.png'),
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'
    },
]

return (
    <Container>
        <Topbox>
            <New>New Lessons Board</New>
            <Arrowimg>
              
               
            </Arrowimg>
        </Topbox>


    <Slider {...settings}>
        {datas.map((item) => (
            <Cards>
            <Card>
                <Item>
                    <Image src={item.image} alt="item.title" />
                </Item>
                <Containeres>
                    <Text>{item.title}</Text>
                    <Description>{item.description}</Description>
                    <Box>
                        <Profile><Girl src={item.icon} /></Profile>
                        <Content>
                            <Name>{item.name}</Name>
                            <Period>{item.period}</Period>
                        </Content>
                    </Box>
                </Containeres>
            </Card>
        </Cards> 
        ))}
    </Slider>
</Container>
  ) 
}

export default Board;

const Container = styled.div`
   
`;

const Topbox = styled.div`
    margin: 35px 30px 30px 0;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 640px){
      margin-top: 50px;
    }
`;
const New = styled.h2`
    font-size: 20px;
    color: #9e9696;
    @media all and (max-width: 480px){
        font-size: 18px;
    }
`;
const Arrowimg = styled.div`
    position : relative;
`;
const One = styled.button`
    position: absolute;
    display: inline-block;
    color: #9e9696;
    font-size: 30px;
    top: -57px;
    right: 87px;
    @media all and (max-width: 480px){
        font-size: 20px;
    }
    @media all and (max-width: 360px){
        right: 51px;
    }
`;
const Two = styled.button`
    position: absolute;
    top: -57px;
    left: 1041px;
    display: inline-block;
    color: #9e9696;
    font-size: 30px;
    @media all and (max-width: 1380px){
        left: 850px;
    }
    @media all and (max-width: 1280px){
        left: 710px;
    }
    @media all and (max-width: 1080px){
        left: 650px;
    }
    @media all and (max-width: 980px){
        left: 450px;
    }
    @media all and (max-width: 768px){
        left: 350px;
    }
    @media all and (max-width: 640px){
        left: 350px;
    }
    @media all and (max-width: 480px){
        left: 220px;
        font-size: 20px;
    }
       
`;

const Cards = styled.div`

`;
const Card = styled.div`
    width: 90%; 
    box-shadow: -1px 0px 4px -2px #9e9696;
    @media all and (max-width: 768px){
        width: 95%;
    }
    @media all and (max-width: 640px){
        margin-bottom: 30px;
        width: 85%;
    }
    @media all and (max-width: 480px){
        left: 220px;
        font-size: 20px;
    }
   
       
`;
const Item = styled.div`
    width: 100%; 
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
const Containeres = styled.div`
    padding: 30px 10px;
`;
const Text = styled.h3`
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: bolder;
    @media all and (max-width: 980px){
        font-size: 12px;
    }
    @media all and (max-width: 768px){
        font-size: 10px;
    }
    @media all and (max-width: 480px){
        font-size: 14px;
    }
`;
const Description = styled.p`
    font-size: 12px;
    margin-bottom: 20px;
    color: #9e9696;
    font-weight: bolder;
    @media all and (max-width: 768px){
        font-size: 11px;
    }
    @media all and (max-width: 480px){
        font-size: 12px;
    }
`;
const Box = styled.div`
    display: flex;
    align-items: center;
`;
const Profile = styled.div`
    width: 25px;
    margin-right: 10px;
`;
const Girl = styled.img`
    width: 100%;
    display: block;
`;
const Content= styled.div`

`;
const Name = styled.h3`
    font-size: 12px;
    @media all and (max-width: 980px){
        font-size: 11px;
    }
    @media all and (max-width: 768px){
        font-size: 8px;
    }
    @media all and (max-width: 640px){
        font-size: 10px;
    }
`;
const Period = styled.p`
    font-size: 12px;
    color: #9e9696;
    font-weight: 600;
    @media all and (max-width: 980px){
        font-size: 10px;
        font-weight: 400;
    }
    @media all and (max-width: 768px){
        font-size: 8px;
    }
    @media all and (max-width: 640px){
        font-size: 10px;
    }
    
`;

