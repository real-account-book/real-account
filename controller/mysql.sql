// 월별 입금 합계
SELECT MONTH(uploaded_at) AS `Month`,
sum(plus)
FROM accountbook.asset_plus 
GROUP BY `Month` 

// 현재날짜 기준 한달전 입금 조회
SELECT * FROM accountbook.asset_plus
WHERE uploaded_at BETWEEN DATE_ADD(now(), interval -1 month) AND NOW();

// 특정 월별 조회
SELECT * FROM accountbook.asset_plus
WHERE YEAR(uploaded_at) = 2024 AND MONTH(uploaded_at) = 06;


    