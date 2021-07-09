`CREATE VIEW Value
AS SELECT Value as value
FROM Table1
WHERE Id_Client = ${clientId};
SELECT Amount, DocDate as Date, Caption FROM Table2
WHERE Id_Client = ${clientId}
AND 10 < (SELECT * FROM Value)
UNION ALL (SELECT value, '', '' FROM Value)
ORDER BY DocDate DESC`;
