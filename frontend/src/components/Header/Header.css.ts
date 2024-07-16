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
  padding: 10
});

export const priceContainer = style({
  display: `flex`,
  justifyContent: `space-between`
});

export const addButton = style({
  display: `flex`,
});