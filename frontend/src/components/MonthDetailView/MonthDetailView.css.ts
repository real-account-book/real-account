import { style } from "@vanilla-extract/css";

export const detailContainer = style({
  marginTop: 20,
});

export const titleBar = style({
  display: `flex`,
  justifyContent: `space-between`,
  padding: 20,
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
});

export const datePicker = style({
  display: 'flex',
  alignItems: 'center',
})