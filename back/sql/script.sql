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
    password VARCHAR(50) NOT NULL,
    adrsse  VARCHAR(50) NOT NULL,
    birthay DATE,
    email  VARCHAR(50) NOT NULL,
    nmrtlfn TINYINT(10) NOT NULL
);

CREATE TABLE hala.typehebergement(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tyhotelapart VARCHAR(20) NOT NULL
);

CREATE TABLE hala.destination(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    ville VARCHAR (50) NOT NULL,
    image VARCHAR (5) NOT NULL,
    textdescription VARCHAR (500),
    tendance BOOLEAN NOT NULL

);

CREATE TABLE hala.offres(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    namedestination VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    datedepart DATE,
    prix TINYINT (4),
         typehebergement_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (typehebergement_id) REFERENCES hala.typehebergement(id),
    guide BOOLEAN NOT NULL,
    promention TINYINT(2),
         destination_id TINYINT UNSIGNED NOT NULL, 
    FOREIGN KEY (destination_id) REFERENCES hala.destination(id)
         
);


CREATE TABLE hala.client_offres( 
     offres_id TINYINT UNSIGNED NOT NULL,
    client_id MEDIUMINT UNSIGNED NOT NULL,
    FOREIGN KEY(offres_id) REFERENCES hala.offres(id),
    FOREIGN KEY(client_id) REFERENCES hala.client(id),
    PRIMARY KEY(offres_id, client_id)
);


