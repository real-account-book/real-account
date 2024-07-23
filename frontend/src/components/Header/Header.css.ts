import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const header = style({
  display: `flex`,
  justifyContent: `space-between`,
  width: `60%`,
  maxWidth: 770,
  minWidth: 680,
  margin: `auto`,
  marginTop: 30,
  marginBottom: 30,
  border: `1px solid ${vars.color.gray}`,
  borderRadius: vars.border.basic,
  padding: 11
});

export const headerTitle = style({
  width: '15%',
  textAlign: 'center'
})

export const priceContainer = style({
  display: `flex`,
  justifyContent: `space-between`,
  width: '40%'
});

export const blueText = style({
  color: `blue`,
  marginRight: '20px',
});

export const redText = style({
  color: `red`,
  marginRight: '20px',
});

export const addButton = style({
  display: `flex`,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  width: '15%',
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