import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const categoriesContainer = style({
  padding: 10,
  maxHeight: '300px',
  overflowY: 'auto',
});

export const categoryBox = style({
  margin: 10,
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${vars.color.gray}`
})

export const addCategoryButton = style({
  color: 'rgba(22, 26, 65, 0.53)',
  paddingTop: 2,
  fontSize: 15,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  margin: '10px 0px',
  display: 'flex',

  ':hover': {
    backgroundColor: '#f0f0f0',
    borderRadius: '30px'
  },
})

export const addCategoryText = style({
  margin: '3px 0 0 0'
})