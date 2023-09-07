DROP DATABASE IF EXISTS hala;
CREATE DATABASE hala;

CREATE TABLE hala.admin(
    id MEDIUMINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email  VARCHAR(50) NOT NULL
);


CREATE TABLE hala.client(
     id MEDIUMINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    adrsse  VARCHAR(50) NOT NULL,
    birthay DATE,
    email VARCHAR(50) NOT NULL,
    passeword VARCHAR(50) NOT NULL,
    nmrtlfn VARCHAR(10) NOT NULL
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
    datedepart DATE,
    datederotour DATE,
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

INSERT INTO hala.client
VALUES
( NULL, 'fekih','Abdel','75-paris,france', '2004-02-22','abdel@gmail.com','*****', '0655998899'),

( NULL, 'lokmane','fekih','75-paris,france', '2004-02-22','lok@gmail.com','*****', '0655998899')
;

INSERT INTO hala.typehebergement
VALUES 
(NULL, 'Hôtel'),
(NULL, 'Appartement')
;

INSERT INTO hala.destination
VALUES 
(NULL, 'Rome', 'rome.png','Si vous vous demandez pourquoi Rome est lune des villes les plus romantiques du monde, il nous faut bien sûr évoquer la légende entourant lun de ses monuments les plus emblématiques, la Fontaine de Trevi. Avec ses 26 mètres de haut, cet édifice monumental est la plus haute fontaine de la ville.', 0 ),

(NULL,'Santorin', 'santorini.png','Avec ses plages de sable blanc, ses magnifiques couchers de soleil et ses hôtels de luxe, lîle de santorin vous garantit des vacances inoubliables', 1 ),

(NULL,'Alger', 'santorini.png','Avec ses plages de sable blanc, ses magnifiques couchers de soleil et ses hôtels de luxe, lîle de santorin vous garantit des vacances inoubliables', 1 ),

(NULL,'Paris', 'santorini.png','Avec ses plages de sable blanc, ses magnifiques couchers de soleil et ses hôtels de luxe, lîle de santorin vous garantit des vacances inoubliables', 1 )
;

INSERT INTO hala.offres
VALUES 
(NULL, '2023-11-10','2023-11-20', 875 , 1, 780, 1, 1),
(NULL,'2024-01-20','2024-01-30', 875 , 0, 875, 2, 2)
;

INSERT INTO hala.client_offres
VALUES
    (1, 1),
    (1, 2),
    (2, 2)
;