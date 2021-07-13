`SELECT ss.Id_Client, ss.DocDate, Amount =
CASE
WHEN sum < t1.Value THEN ss.Amount
WHEN sum-Amount < t1.Value THEN t1.Value + ss.Amount - sum
END, ss.Caption
FROM (SELECT Id_Client, DocDate, Amount, Caption,
SUM(Amount) OVER(PARTITION BY Id_Client ORDER BY DocDate DESC, Caption DESC) AS sum FROM Table2) AS ss
LEFT JOIN Table1 as t1 ON t1.Id_Client = ss.Id_Client
WHERE ss.sum < t1.Value
OR ss.sum-ss.Amount < t1.Value
ORDER BY ss.Id_Client, ss.DocDate DESC`;
