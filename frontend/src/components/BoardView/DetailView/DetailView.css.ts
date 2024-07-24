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

export const dataBox = style({
  padding: '4px 0 4px 10px'
})

export const dateText = style({
  fontSize: 14,
  margin: '2px px',
  color: 'rgba(58, 58, 73, 0.7)'
})

export const contents = style({
  display: `flex`,
  justifyContent: `initial`,
  margin: '2px 0 2px 0',
  fontSize: 17
});

export const category = style({
  fontSize: 14,
  color: 'rgba(221, 154, 25, 0.8)',
  margin: '2px 0 1px 6px'
})

export const minusPrice = style({
  color: 'rgba(255, 0, 0, 0.75)',
  fontSize: 16
})

export const plusPrice = style({
  color: 'rgba(31, 26, 229, 0.8)',
  fontSize: 16
})

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