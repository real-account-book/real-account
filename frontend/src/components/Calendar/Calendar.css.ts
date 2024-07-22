import { style } from '@vanilla-extract/css';

export const calendarContainer = style({
  width: '1000px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  margin: '20px auto',
  fontFamily: "'Roboto', sans-serif",
});

export const calendarBody = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridGap: '1px',
  backgroundColor: '#ddd',
});

export const calendarDay = style({
  backgroundColor: '#fff',
  padding: '30px',
  textAlign: 'left',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
});

export const calendarDayNames = style({
  color: '#ffffff',
  backgroundColor: '#b37feb',
  padding: '10px',
  textAlign: 'center',
  fontWeight: 'bold',
});