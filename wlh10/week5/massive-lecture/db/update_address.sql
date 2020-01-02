UPDATE wlh10
SET address = $1
WHERE id = $2;

SELECT * FROM wlh10
ORDER BY id;