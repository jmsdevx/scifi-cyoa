UPDATE characters
SET color = $2, race = $3, archetype = $4, fear = $5, pet = $6, family = $7, charname = $8
WHERE id = $1;
