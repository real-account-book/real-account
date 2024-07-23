import { style, globalStyle } from "@vanilla-extract/css";

export const scrollableContainer = style({
  // 스크롤이 필요한 컨테이너의 기본 스타일
  // height: '300px', // 예시 높이, 필요에 따라 조정
  maxHeight: '500px',
  overflowY: 'auto',
});

globalStyle(`${scrollableContainer}::-webkit-scrollbar`, {
  width: '5px',
});

globalStyle(`${scrollableContainer}::-webkit-scrollbar-track`, {
  background: 'rgba(0, 0, 0, 0.05)', // 반투명한 트랙,
});

globalStyle(`${scrollableContainer}::-webkit-scrollbar-thumb`, {
  background: 'rgba(0, 0, 0, 0.1)', // 반투명한 스크롤바
  borderRadius: '5px',
});

globalStyle(`${scrollableContainer}::-webkit-scrollbar-thumb:hover`, {
  background: 'rgba(0, 0, 0, 0.3)', // 호버 시 더 진한 색상
});

export const lowerContainer = style({
  display: `flex`,
  justifyContent: 'space-between',
  padding: '20px 10px'
});

export const addHistoryButton = style({
  display: `flex`,
});