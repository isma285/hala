DROP DATABASE IF EXISTS hala;
CREATE DATABASE hala;

CREATE TABLE hala.admin(
    id MEDIUMINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(150) NOT NULL
);
-- INSERT INTO hala.admin
-- VALUES
-- ( NULL, 'lo','lo' ,'l@l.l','l');


-- créer la table rôle 
CREATE TABLE hala.role(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE hala.client(
    id MEDIUMINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    role_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY(role_id) REFERENCES hala.role(id)
);


CREATE TABLE hala.typehebergement(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tyhotelapart VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE hala.destination(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    ville VARCHAR (50) NOT NULL,
    photo VARCHAR (50) NOT NULL,
    textdescription VARCHAR (500),
    tendance BOOLEAN NOT NULL

);

CREATE TABLE hala.offres(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    aeroport VARCHAR (50) NOT NULL,
    datedepart DATE,
    dateretour DATE,
    prix SMALLINT,
    guide BOOLEAN NOT NULL,
    promotion SMALLINT,
    typehebergement_id TINYINT UNSIGNED NOT NULL,
    destination_id TINYINT UNSIGNED NOT NULL, 
    FOREIGN KEY (destination_id) REFERENCES hala.destination(id),
    FOREIGN KEY (typehebergement_id) REFERENCES hala.typehebergement(id)
);


CREATE TABLE hala.client_offres( 
    client_id MEDIUMINT UNSIGNED NOT NULL,
    offres_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY(offres_id) REFERENCES hala.offres(id),
    FOREIGN KEY(client_id) REFERENCES hala.client(id),
    PRIMARY KEY(offres_id, client_id)
);

INSERT INTO hala.role
VALUES 
    (NULL,'admin'),
    (NULL,'client')
;

INSERT INTO hala.client
VALUES
( NULL, 'isma','isma','admin@admin.com','$argon2i$v=19$m=16,t=2,p=1$UE5HNjY4cmpTNWVxWGt6Ng$skcGVwo20s9glKYuq15ENA',1),
( NULL, 'fekih','Abdel','abdel@gmail.com','$argon2i$v=19$m=16,t=2,p=1$bFZ4U1kzNlBtbjJQM2cwQQ$1WPFdUIejNIseo60AQXYiQ',2),
( NULL, 'lokmane','m','lok@gmail.com','lokmane',2)
;
-- isma
-- abdel


-- insertion de données


INSERT INTO hala.typehebergement
VALUES 
(NULL, 'Hôtel'),
(NULL, 'Appartement')
;

INSERT INTO hala.destination
VALUES 
-- thailande
(NULL, 'Rome', 'thailande-maison.webp','Si vous vous demandez pourquoi Rome est lune des villes les plus romantiques du monde, il nous faut bien sûr évoquer la légende entourant lun de ses monuments les plus emblématiques, la Fontaine de Trevi. Avec ses 26 mètres de haut, cet édifice monumental est la plus haute fontaine de la ville.', 2 ),

-- maldive
(NULL,'Santorin', 'thailandehotel.jpg','Avec ses plages de sable blanc, ses magnifiques couchers de soleil et ses hôtels de luxe, lîle de santorin vous garantit des vacances inoubliables', 2 ),
-- singapour
(NULL,'Bali', 'dubai-apart.jpg','Avec ses plages de sable blanc, ses magnifiques couchers de soleil et ses hôtels de luxe, lîle de santorin vous garantit des vacances inoubliables', 2 ),

-- italy
(NULL,'Paris', 'thailandehotel.jpg','Avec ses plages de sable blanc, ses magnifiques couchers de soleil et ses hôtels de luxe, lîle de santorin vous garantit des vacances inoubliables', 2 ),
-- dubai
(NULL,'Paris', 'grece-hotel.jpg','Avec ses plages de sable blanc, ses magnifiques couchers de soleil et ses hôtels de luxe, lîle de santorin vous garantit des vacances inoubliables', 2 ),
-- indonesie
(NULL,'Paris', 'maldives-apart.jpg','Avec ses plages de sable blanc, ses magnifiques couchers de soleil et ses hôtels de luxe, lîle de santorin vous garantit des vacances inoubliables', 6 ),
-- grece
(NULL,'Paris', 'maldives-apart.jpg','Avec ses plages de sable blanc, ses magnifiques couchers de soleil et ses hôtels de luxe, lîle de santorin vous garantit des vacances inoubliables', 1 )
;

INSERT INTO hala.offres
VALUES 
(NULL,'Roissy CDG ', '2023-11-10','2023-11-20', 875 , 1, 780, 1, 1),
(NULL,'Orly', '2023-11-10','2023-11-20', 875 , 1, 780, 2, 1),
(NULL, 'Bauvais','2023-11-10','2023-11-20', 875 , 1, 780, 2, 1),
(NULL,'Marseille','2024-01-20','2024-01-30', 875 , 0, 875, 2, 1),
(NULL,'Orly', '2023-11-10','2023-11-20', 875 , 1, 780, 2, 2),
(NULL, 'Bauvais','2023-11-10','2023-11-20', 875 , 1, 780, 2, 3)

;

INSERT INTO hala.client_offres
VALUES
    (1, 1),
    (1, 2),
    (2, 2)
;