import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';


function Board() {

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
 

    
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
            slidesToScroll: 2,
            initialSlide: 2
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
};
const datas = [
    {
        id:1,
        title: 'Basic Chemistry 111',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/rectangle 4.jpg'),
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
        image: require('../assets/images/rectangle 20694.jpg'),
        icon: require('../assets/images/man.png'),
        name: 'By Prof Steven Joe',
        period: '3 days ago'

    },
    {
        id:1,
        title: 'Basic Chemistry 111',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/rectangle 4.jpg'),
        icon: require('../assets/images/woman (4) 1.png'),
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'

    },
    {
        id:3,
        title: 'Focusv on Words',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/rectangle 20694.jpg'),
        icon: require('../assets/images/man.png'),
        name: 'By Prof Steven Joe',
        period: '3 days ago'
    },
    {
        id:1,
        title: 'Basic Chemistry 111',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/rectangle 4.jpg'),
        icon: require('../assets/images/woman (4) 1.png'),
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'
    },
    {
        id:1,
        title: 'Basic Chemistry 111',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/rectangle 4.jpg'),
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
        title: 'Basic Chemistry 111',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: require('../assets/images/rectangle 4.jpg'),
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
                <One>
                    <FaAngleLeft />
                </One>
                <One>
                    <FaAngleRight />
                </One>
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
const Container = styled.div`

`;

const Topbox = styled.div`
    margin: 35px 30px 30px 0;
    display: flex;
    justify-content: space-between;
`;
const New = styled.h2`
    font-size: 20px;
    color: #000;
`;
const Arrowimg = styled.div`

`;
const One = styled.span`
    display: inline-block;
    color: gray;
    font-size: 30px;
    
`;
const Cards = styled.div`

`;
const Card = styled.div`
width: 90%;
    
    box-shadow: -1px 3px 7px -1px #9e9696;
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
`;
const Description = styled.p`
    font-size: 12px;
    margin-bottom: 20px;
    color: #9e9696;
    font-weight: bolder;
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
`;
const Period = styled.p`
    font-size: 12px;
    color: #9e9696;
    font-weight: 600;
`;

export default Board