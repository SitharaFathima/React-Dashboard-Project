import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Board() {

const datas = [
    {
        id:1,
        title: 'Basic Chemistry 111',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: '../assets/images/rectangle 4.jpg',
        icon: '../assets/images/woman (4) 1.png',
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'

    },
    {
        id:2,
        title: 'Mechanics in Physics',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: '../assets/images/rectangle 20693',
        icon: '../assets/images/woman (3).png',
        name: 'By Prof Kennai',
        period: '8.30,13th March 2020'

    },
    {
        id:3,
        title: 'Focusv on Words',
        description: 'This part of chemistry deals with atomic structure and molecular structure.',
        image: '../assets/images/rectangle 20694.jpg',
        icon: '../assets/images/man.png',
        name: 'By Prof Steven Joe',
        period: '3 days ago'

    }
]

  return (
    <Container>
        {datas.map((item) => (
            <Card>
                <Item>
                    <Image src={Item.image} />
                </Item>
                <Text>{Item.title}</Text>
                <Description>{Item.description}</Description>
                <Box>
                    <Profile><Girl src={Item.icon} /></Profile>
                    <Content>
                        <Name>{Item.name}</Name>
                        <Period>{Item.period}</Period>
                    </Content>
                </Box>
            </Card>
        ))};
    </Container>
  ) 
}

const Container = styled.div`
    background-color: green;
`;
const Card = styled.div`

`;
const Item = styled.div`

`;
const Image = styled.img`

`;
const Text = styled.h2`

`;
const Description = styled.p`

`;
const Box = styled.div`

`;
const Profile = styled.div`

`;
const Girl = styled.img`

`;
const Content= styled.div`

`;
const Name = styled.h3`

`;
const Period = styled.p`

`;

export default Board