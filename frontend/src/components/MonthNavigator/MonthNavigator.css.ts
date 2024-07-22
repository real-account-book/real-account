import { style } from '@vanilla-extract/css';

export const purpleBoxSecond = style({
  width: '400px',
  height: '50px',
  backgroundColor: '#9254de',
  borderRadius: '8px', 
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px auto',
  fontWeight: 'bold',
});

export const alphabet = style({
  color: '#ffffff',
});

export const button = style({
  color: '#ffffff',
  backgroundColor: '#9254de',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  padding: '5px 10px',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: '#722ed1',
  }
});

