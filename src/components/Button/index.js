import styled from "styled-components"

export default styled.button(props => `
    color: ${props.color ? 
        props.theme.palette[props.color]: 
        props.theme.palette.primary
    };
    background: ${props.transparent ? 
        'transparent' : 
        props.theme.palette.background.paper
    };
    border: ${props.outlined ?
        `1px ${props.theme.palette.primary} solid`:
        'none'
    };
    min-width: ${props.theme.spacing(5)};
    padding: ${props.theme.spacing(1)};
    border-radius: ${props.theme.border.default};
    text-align: center;
    outline: none;
    transition: background 0.3s ease;
    &:hover{
        cursor: pointer;
        ${props.hover && `background: ${props.theme.adjustHexOpacity(props.theme.palette.primary, 0.2)};`}
    }
`)
