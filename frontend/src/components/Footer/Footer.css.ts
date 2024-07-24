import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const footerContainer = style({
  borderTop: `1px solid ${vars.color.gray}`,
  padding: 30,
  marginTop: 50

})

export const teamName = style({
  fontSize: 15,
  color: vars.color.fontGray
})

export const githubLink = style({
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'flex'
}) 