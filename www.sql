-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for new
CREATE DATABASE IF NOT EXISTS `new` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `new`;

-- Dumping structure for table new.user1
CREATE TABLE IF NOT EXISTS `user1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table new.user1: ~5 rows (approximately)
INSERT INTO `user1` (`id`, `email`, `username`, `password_hash`) VALUES
	(1, 'yyyy111@gmail.com', '.lll', '$2a$08$gbX6R83qZ6flJVGcoB96XeTlOcfHhqfS3uC/4FfNfut99ZFDxax.2'),
	(2, 'mmm@gmail.com', 'mm', '$2a$08$KUw2m0mhjpYCBa7aWqT4Iuejvq3Cr6j3bfMl5B/89ywwjdEwp9HKa'),
	(3, 'nnn@gmail.com', 'nn', '$2a$08$7zzvC.aQKIYI4k8WxBu0WeE/qZhWr2LgXVFLHPXxA5CRSIeV4pAkG'),
	(4, 'nn@gmail.com', 'n', '$2a$08$NNQI1hRjglB.Ymx6/YNqUefP5gzOSWp2oc0pzJrVHqHA8NTjR8Csa'),
	(5, 'na@gmail.com', 'na', '$2a$08$wooDETt5FRuXyVfkUyK9kO5gsS3neM5RSOmE5uPliTTwEvRve8P.C');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
