import { createGlobalTheme, style } from "@vanilla-extract/css";
import { globalFontFace, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(":root", {
  color: {
    year: 'rgba(155, 166, 250, 1)',
    first: 'rgba(105, 121, 248, 1)',
    second: 'rgba(155, 166, 250, 1)',
    third: 'rgba(205, 210, 253, 1)',
    gray: 'rgba(228, 228, 228, 1)',
    unselected: 'rgba(229, 229, 229, 1)',
    utils: 'rgba(105, 118, 235, 1)',
    utilText: 'rgba(22, 26, 65, 0.53)',
    margin: 'auto',
  },
  border: {
    basic: `10px`
  }
});

export const main = style({
  maxWidth: `780px`,
  minWidth: `640px`,  
  margin: `auto`
})

globalFontFace('Noto Sans', {
  src: 'url("/static/fonts/NotoSans-Regular.ttf") format("truetype")',
  fontWeight: 'normal',
  fontStyle: 'normal'
});

globalFontFace('Noto Sans', {
  src: 'url("/static/fonts/NotoSans-Bold.ttf") format("truetype")',
  fontWeight: 'bold',
  fontStyle: 'normal'
});

globalStyle('body', {
  fontFamily: 'Noto Sans, sans-serif'
});