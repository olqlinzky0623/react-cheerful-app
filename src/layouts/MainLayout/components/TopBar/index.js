import React from 'react'
import styled from 'styled-components'
import {BoxContainer, List, Button} from 'components'

const BoxWrapper = styled(BoxContainer)(props => `
    grid-area: header;
`)
const TopBar = () => {
    return (
       <BoxWrapper justify="space-between" direction="row" spacing="0px 15px" color="primary"> 
            <h1>CheerfulNime</h1>
            <List component="ul" transparent align="center">
                <Button hover transparent >click</Button>
            </List>
       </BoxWrapper>
    )
}

export default TopBar
