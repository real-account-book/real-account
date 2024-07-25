import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css.ts";

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '75%',
  maxWidth: 770,
  minWidth: 680,
  margin: 'auto',
  marginTop: 30,
  marginBottom: 30,
  border: `1px solid ${vars.color.gray}`,
  borderRadius: vars.border.basic,
  padding: '0px', 
  height: '44px', 
});

export const headerTitle = style({
  width: '15%',
  textAlign: 'center',
  fontSize: '14px', 
});

export const priceContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '40%',
  fontSize: '14px',  
});

export const blueText = style({
  color: 'blue',
  marginRight: '20px',
});

export const redText = style({
  color: 'red',
  marginRight: '20px',
});

export const addButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  width: '15%',
  padding: '5px',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  }
});

export const buttonIcon = style({
  color: 'white',
  backgroundColor: vars.color.second,
  borderRadius: '100%',
  marginRight: 6,
  padding: 2,
  width: '16px',
  height: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const buttonText = style({
  color: 'rgba(22, 26, 65, 0.53)',
  fontSize: '14px',
});