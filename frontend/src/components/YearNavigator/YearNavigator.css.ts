import { style } from '@vanilla-extract/css';

export const purpleBox = style({
  width: '400px',
  height: '50px',
  backgroundColor: '#d3adf7',
  borderRadius: '8px', 
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px auto',
});

export const alphabet = style({
  color: '#ffffff',
  fontWeight: 'bold',
});

export const button = style({
  color: '#ffffff',
  backgroundColor: '#d3adf7',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  padding: '5px 10px',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: '#722ed1',
  }
});

