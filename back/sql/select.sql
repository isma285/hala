-- SELECT client.*
-- FROM hala.client;

-- 01: selectioner toutes les offres jointure typehebergement / destination
-- SELECT offres.*, typehebergement.tyhotelapart,destination.ville,destination.photo
-- FROM
--  hala.offres
-- JOIN
--  hala.typehebergement
-- ON
--  offres.typehebergement_id = typehebergement.id
-- JOIN
--  hala.destination
-- ON
--  offres.destination_id = destination.id
-- WHERE 
--     typehebergement.tyhotelapart = "Hôtel"
;

-- 02: selectioner toutes les destinations tendances
-- SELECT destination.ville,destination.tendance
-- FROM hala.destination
-- WHERE destination.tendance = 1
-- ;

-- 03: selectioner les destinations promotions
-- SELECT offres.promotion ,destination.ville,destination.photo
-- FROM hala.offres
-- JOIN
--  hala.destination
-- ON
--  offres.destination_id = destination.id
-- WHERE offres.prix != offres.promotion
-- ;

-- 04: selectioner toutes les destinations
-- SELECT destination.ville
-- FROM hala.destination;

SELECT offres.*, destination.*
FROM hala.offres
JOIN
 hala.destination
ON
 offres.destination_id = destination.id
WHERE offres.id = 2
\G




 