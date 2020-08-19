import React from 'react'
import styled from 'styled-components'
import {Drawer, Paper} from 'components'


const PaperEdit = styled(Paper)(props => `
    margin: auto;
    height: 100%;
`)



export default function Test({handle: {toggle, setToggle}}) {
    const handler = () => {
        setToggle(!toggle)
    }
    return (
        <React.Fragment>
        <button onClick={handler}>Click</button>
        <Drawer open={toggle}>
            <button onClick={handler}>Click</button>
            <PaperEdit justify="center" align="center">
                
            </PaperEdit>
          
        </Drawer>
        </React.Fragment>
        
        // <Root>
        // <ButtonEdit>Button Edited</ButtonEdit>
        // <Button hover >Click</Button>
        //     Hello World
        //     <Paper>Ini Kertas</Paper>
        // </Root>
    )
}
