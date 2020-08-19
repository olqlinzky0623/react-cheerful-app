import light from './components/light'
import dark from './components/dark'

const data = {
    colors: {red: '#fa163f',purple: '#6f4a8e',green: '#21bf73',blue: '#3282b8',yellow: '#ffcd3c'},
    key: {'xs': 0,'sm': 600,'md': 960,'lg': 1280,'xl': 1920}
}
const theme = (type, color = 'purple') => ({
    palette: {
        white: "#fff",
        black: "#292727",
        primary: data.colors[color],
        ...type === 'light' ? light : dark
    }, 
    border: {
        default: "4px",
        shape: "0px",
    },
    spacing: (num = 1) => `${8 * num}px`,
    breakpoints: {
        up : val => style => `@media screen and (min-width: ${data.key[val]}px){ ${style} }` ,
        down : val => style => `@media screen and (max-width: ${data.key[val]}px){ ${style} }`    
    },
    adjustHexOpacity: (color, opacity) => {
        const r = parseInt(color.slice(1, 3), 16)
        const g = parseInt(color.slice(3, 5), 16)
        const b = parseInt(color.slice(5, 7), 16)
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
    }
})

export default theme