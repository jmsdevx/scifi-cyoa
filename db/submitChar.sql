INSERT INTO characters
    (username, color, race, archetype, pet, fear, family)
VALUES
    ($1, $2, $3, $4, $5, $6, $7);
SELECT *
FROM characters
WHERE username=$1;