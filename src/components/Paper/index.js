import styled from "styled-components";

export default styled.div(props => `
    display: flex;
    justify-content: ${props.justify ? props.justify : 'auto'};
    align-items: ${props.align ? props.align : 'auto'};
    background: ${props.transparent ? 
        'transparent' : 
        props.theme.palette.background.paper };
    ${props.padding && `padding: ${props.theme.spacing(props.padding)};`}
`)