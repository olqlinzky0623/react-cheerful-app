import styled from "styled-components";
const Background = styled.div(props => `
    display: block;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    color: ${props.theme.palette.primary};
    background: ${props.theme.palette.background.paper};
    clip-path: circle(0% at 0% 0%);
    transition: all 0.5s ease-out;
    ${props.open && `
        clip-path: circle(100% at 30% 30%);
    `}
`)

export default Background
