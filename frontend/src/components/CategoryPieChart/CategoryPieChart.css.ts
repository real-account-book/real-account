import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const categoryMaxBox = style({
  borderRadius: '5%',
  padding: 10,
  color: 'white',
  backgroundColor: vars.color.second,
})

export const categoryIcon = style({
  paddingTop: 5,
  margin: '0px 15px 0px 10px'
})

export const categoryPrice = style({
  fontSize: 25,
})

export const categoryName = style({
  display: 'flex'
})