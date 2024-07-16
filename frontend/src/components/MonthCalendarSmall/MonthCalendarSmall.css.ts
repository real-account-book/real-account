import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  width: 300,
  borderRadius: '30px' // token.borderRadiusLG에 해당하는 CSS 변수를 사용
});

// export const calendarWrapper = style({});

// globalStyle(`${calendarWrapper} .ant-picker-cell-inner, ${calendarWrapper} .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner`, {
//   background: 'transparent',
//   color: 'rgba(0, 0, 0, 0.88)',
//   fontWeight: 'normal'
// });