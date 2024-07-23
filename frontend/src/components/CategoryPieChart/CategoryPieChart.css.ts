import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const assetImageContainer = style({
  width: '55%',
  position: 'relative'
})

export const assetImage = style({
  width: 280
})

export const assetTextBox = style({
  position: 'absolute',
  bottom: '8%',
  right: '4%',
  width: 250,
  lineHeight: 1.5
})

export const assetFirstText = style({
  fontSize: 25,
  fontWeight: 600,
  color: 'rgba(68, 64, 72, 0.87)',
})

export const assetSecondText = style({
  fontSize: 18,
  color: vars.color.fontGray
})

export const addButtonBox = style({
  margin: '5px 0 0 0'
})

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