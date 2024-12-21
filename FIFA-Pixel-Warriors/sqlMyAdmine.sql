CREATE DATABASE shiMatch;

CREATE TABLE nationalite (
    id_nationalite INT PRIMARY KEY AUTO_INCREMENT,
    nom varchar(100),
    continent varchar(100)
);

CREATE TABLE club(
    id_club INT PRIMARY KEY AUTO_INCREMENT,
    nom varchar(100),
    logo varchar(255),
    date_create DATE
);


CREATE TABLE PLAYER(
    id_player INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255),
    img VARCHAR(244),
    positionplayer varchar(200),
    rating INT CHECK (rating >= 1 AND rating <= 100) ,
    pace INT CHECK  (pace >= 1 AND pace <= 100),
    shooting INT CHECK (shooting >= 1 AND shooting <= 100),
    passing INT CHECK (passing >= 1 AND passing <= 100),
    dribbling INT CHECK (dribbling >= 1 AND dribbling <= 100),
    defending INT CHECK (defending >= 1 AND defending <= 100),
    physical INT CHECK (physical >= 1 AND physical <= 100),
    diving INT CHECK (physical >= 1 AND physical <= 100),
    handling INT CHECK (handling >= 1 AND handling <= 100),
    kicking INT CHECK (kicking >= 1 AND kicking <= 100),
    reflexes INT CHECK (reflexes >= 1 AND reflexes <= 100),
    speed INT CHECK (speed >= 1 AND speed <= 100),
    positioning INT CHECK (positioning >= 1 AND positioning <= 100),
    id_club INT ,
    FOREIGN KEY (id_club) REFERENCES club(id_club),
    id_nationalite INT,
    FOREIGN KEY (id_nationalite) REFERENCES nationalite(id_nationalite)
);