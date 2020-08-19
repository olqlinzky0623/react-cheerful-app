import styled from 'styled-components'

export const List = styled.nav(props => `
    display: flex;
    ${props.component === "nav" && `width: 100%;` }
    color: ${props.color ? props.theme.palette.primary[props.color] : props.theme.palette.primary};
    background: ${props.transparent ? 'transparent': props.theme.palette.background.paper};
    justify-content: ${props.justify || 'auto'};
    align-items: ${props.align || 'auto'};
`) 


export const ListItem = styled.li(props => `
    display: flex;
`)

