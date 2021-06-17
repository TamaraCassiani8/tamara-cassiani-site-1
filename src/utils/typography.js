import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
kirkhamTheme.headerColor = '#0e245c'
kirkhamTheme.headerFontFamily = ["Work Sans", "sans-serif"]
kirkhamTheme.bodyFontFamily = ["Quattrocento Sans", "sans-serif"]


const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm


/*import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
fairyGatesTheme.headerColor = '#0e245c'


const typography = new Typography(fairyGatesTheme)

export default typography
export const rhythm = typography.rhythm*/


/*I need to play with elements and fonts. 
For example, I'd like to add Google fonts, 
or even to use the typography 'fairy gates' theme (because of the name of course) 
but that one changes the alignment of Home and About 
and I can't cope with misalignment*/





