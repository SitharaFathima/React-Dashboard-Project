import React from 'react';
import styled from 'styled-components';

function Manager() {
  return (
    <Manager>
        <Top>
            <Text>Assignment Manager</Text>
            <List>
                <Item>pending</Item>
                <Item>completed</Item>
                <Item>submitted</Item>
            </List>
            <Card>
                <Items>
                    <Left>

                    </Left>
                    <Right>
                        <Resume>Resume</Resume>
                    </Right>
                </Items>
            </Card>
            
        </Top>
    </Manager>
  )
}

export default Manager