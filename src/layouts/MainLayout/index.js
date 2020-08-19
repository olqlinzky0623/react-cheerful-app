import React from 'react'
import {BoxContainer} from 'components'
import {TopBar, Sidebar, Content} from './components'
import styled from 'styled-components'

const BoxWrapper = styled(BoxContainer)(props => `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 
        "header"
        "main"
        "footer";
`)

const UserLayout = () => {
    return (
        <BoxWrapper>
            <TopBar/>
            <Sidebar/>
            <Content/>
        </BoxWrapper>
    )
}

export default UserLayout
