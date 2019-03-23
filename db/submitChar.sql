INSERT INTO characters
    (username, color, race, archetype, fear, pet, family, charname)
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8);
SELECT *
FROM characters
WHERE username=$1;