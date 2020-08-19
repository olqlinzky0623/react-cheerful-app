import styled from "styled-components";

const BoxContainer = styled.div(props => `
    display: flex;
    flex-wrap: wrap;
    ${props.justify &&` justify-content: ${props.justify}; `};
    ${props.direction &&` flex-direction: ${props.direction}; `};
    ${props.align &&` align-items: ${props.align} `};
    ${props.gap &&` gap: calc(${props.theme.spacing(props.gap)} - 8px); `};
    ${props.spacing &&` padding: ${props.spacing} `};
`)

const BoxItem = styled.div(props => `
    display: flex;
    justify-content: center;
    align-items: center;
    ${ ['xs','sm','md','lg','xl'].filter(k => props[k])
        .map(k => props.theme.breakpoints.up(k)(`
            flex-basis: ${(8.3 * props[k]).toFixed(2)}%;
        `))
        .join(`\n`)
    }
`)
export {
    BoxContainer, BoxItem
}