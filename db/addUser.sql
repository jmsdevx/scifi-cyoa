INSERT INTO users
    (username, hash)
VALUES
    ($1, $2);
SELECT *
FROM users
WHERE username=$1;