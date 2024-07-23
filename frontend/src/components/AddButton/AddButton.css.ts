import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const addButton = style({
  display: `flex`,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#f0f0f0',
    borderRadius: '30px'
  },
});

export const buttonIcon = style({
  color: 'white',
  backgroundColor: vars.color.second,
  borderRadius: '100%',
  marginRight: 6,
  padding: 2
})

export const buttonText = style({
  color: 'rgba(22, 26, 65, 0.53)',
  paddingTop: 2,
  fontSize: 14,
})