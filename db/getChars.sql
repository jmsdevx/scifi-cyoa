SELECT *
FROM characters
WHERE username=$1
ORDER BY id DESC