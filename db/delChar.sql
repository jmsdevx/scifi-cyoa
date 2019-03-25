DELETE FROM characters
WHERE id = $1;
SELECT *
FROM characters
WHERE username = $2