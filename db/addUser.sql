INSERT INTO users
    (username, hash, inprogress)
VALUES
    ($1, $2, $3);
SELECT *
FROM users
WHERE username=$1;