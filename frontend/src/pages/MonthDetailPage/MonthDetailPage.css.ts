import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const container = style({

});

export const titleBar = style({
  display: `flex`,
  justifyContent: `space-between`,
  padding: 7,
});

export const titleBox = style({
  display: 'flex',
  justifyContent: 'space-between'
})

export const title = style({
  fontSize: 30,
  marginRight: 20,
})

export const sideTitle = style({
  fontSize: 17,
  paddingTop: 8,
  color: vars.color.fontGray
})

export const bodyContents = style({
  display: `flex`,
  justifyContent: `space-between`
});

export const addButton = style({
  display: `flex`,
  border: 'none',
  background: 'transparent',
  color: 'rgba(22, 26, 65, 0.53)',
  fontSize: 15,
  cursor: 'pointer',
  alignItems: 'center'
});

export const buttonFont = style({
  marginRight: 5,
})