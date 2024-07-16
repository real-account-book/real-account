import { style } from "@vanilla-extract/css";
import { vars } from "../../../App.css.ts";

export const card = style({
  border: `1px solid ${vars.color.gray}`,
  borderRadius: '10%',
  padding: 15,
  display: `flex`,
  justifyContent: 'space-between',
});

export const leftContainer = style({

});

export const rightContainer = style({
  display: `flex`,
});

export const contents = style({
  display: `flex`,
  justifyContent: `initial`,
});

export const buttons = style({
  height: `50%`,
  borderRadius: `100%`,
  position: `relative`,
  top: `25%`,
  marginRight: 10
})