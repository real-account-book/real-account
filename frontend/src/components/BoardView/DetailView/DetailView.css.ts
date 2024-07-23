import { style } from "@vanilla-extract/css";
import { vars } from "../../../App.css.ts";

export const card = style({
  border: `1px solid ${vars.color.gray}`,
  borderRadius: '1%',
  padding: 15,
  display: `flex`,
  justifyContent: 'space-between',
  margin: '15px 0'
});

export const leftContainer = style({
  display: 'flex'
});

export const contents = style({
  display: `flex`,
  justifyContent: `initial`,
});

export const memoButton = style({
  height: `50%`,
  border: 'none',
  backgroundColor: 'transparent',
  margin: '0 15px',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      color: `${vars.color.utils}`
    }
  }
})

export const rightContainer = style({
  display: `flex`,
  gap: 10
});

export const updateButton = style({
  height: `30px`,
  width: '30px',
  borderRadius: `100%`,
  border: 'none',
  position: `relative`,
  top: `25%`,
  marginRight: 10,
  cursor: 'pointer',
  color: 'rgba(93, 95, 239, 1)',
  backgroundColor: 'rgba(93, 95, 239, 0.15)',
})

export const deleteButton = style({
  height: `30px`,
  width: '30px',
  borderRadius: `100%`,
  border: 'none',
  position: `relative`,
  top: `25%`,
  marginRight: 10,
  cursor: 'pointer',
  color: 'rgba(255, 0, 0, 1)',
  backgroundColor: 'rgba(255, 0, 0, 0.1)',
})