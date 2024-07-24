import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const detailContainer = style({
  marginTop: 20,
});

export const titleBar = style({
  display: `flex`,
  justifyContent: `space-between`,
  padding: 20,
  borderBottom: `1px solid ${vars.color.gray}`
});

export const title = style({
  fontSize: 20,
  fontWeight: 600
})

export const dropDownBox = style({
  display: `flex`,
  gap: 30,
})

export const detailDateBar = style({
  display: `flex`,
  justifyContent: `space-between`,
  padding: '10px 20px',
  borderBottom: `1px solid ${vars.color.gray}`
});

export const datePicker = style({
  display: 'flex',
  alignItems: 'center',
})