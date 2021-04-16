-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: playerx
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (4);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `league`
--

DROP TABLE IF EXISTS `league`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `league` (
  `league_id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `alias` varchar(50) DEFAULT NULL,
  `league_name` varchar(50) DEFAULT NULL,
  `description` text,
  `mantra` tinytext,
  `zip_code` char(6) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`league_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `league`
--

LOCK TABLES `league` WRITE;
/*!40000 ALTER TABLE `league` DISABLE KEYS */;
INSERT INTO `league` VALUES (47,1,'bigdogAliasRQ','Big Dog League','Now is the summer of our discontent.','Never give up. Never surrender.','78909',NULL,NULL),(48,1,'injuredHeads','Injured Head and Shoulders','Tri-tip ham short ribs, t-bone landjaeger shank venison chuck picanha','It\'s just turtles all the way down.','34523',NULL,NULL),(49,1,'bringItOn','Bring It On','Bacon ipsum dolor amet ham buffalo capicola tongue','dont pay the ferryman','78259',NULL,NULL),(50,1,'leagueOfOurOwn','League of Our Own','Frankfurter corned beef pork chop shankle, ham fatback ground round sirloin swine','may the force be with you',NULL,NULL,NULL),(51,1,'weekendWarriors','Weekend Warriors','bacon beef ribs tenderloin alcatra, salami kielbasa tail shank cow corned beef meatball tri-tip','its all the same',NULL,NULL,NULL),(52,1,'unusualSuspects','The Unusual Suspects','Pork belly pig cow, brisket jowl pork loin bacon shoulder swine strip steak buffalo jerky.','seize the day',NULL,NULL,NULL),(53,1,'noGutsNoGlory','No Guts No Glory','Chuck boudin meatloaf, sausage alcatra spare ribs cow bacon jowl tongue. Frankfurter swine tongue pork loin rump pancetta tenderloin pig kevin strip steak chuck turkey leberkas salami','know when to hold em, know when to fold em',NULL,NULL,NULL),(54,1,'injuredHeads','Injured Head and Shoulders','Tri-tip ham short ribs, t-bone landjaeger shank venison chuck picanha','I will survive',NULL,NULL,NULL),(55,1,'bringItOn','Bring It On','Bacon ipsum dolor amet ham buffalo capicola tongue','dont pay the ferryman',NULL,NULL,NULL),(56,1,'leagueOfOurOwn','League of Our Own','Frankfurter corned beef pork chop shankle, ham fatback ground round sirloin swine','its all the same',NULL,NULL,NULL),(57,1,'weekendWarriors','Weekend Warriors','bacon beef ribs tenderloin alcatra, salami kielbasa tail shank cow corned beef meatball tri-tip','its all the same',NULL,NULL,NULL),(58,1,'unusualSuspects','The Unusual Suspects','Pork belly pig cow, brisket jowl pork loin bacon shoulder swine strip steak buffalo jerky.','seize the day',NULL,NULL,NULL),(59,1,'noGutsNoGlory','No Guts No Glory','Chuck boudin meatloaf, sausage alcatra spare ribs cow bacon jowl tongue. Frankfurter swine tongue pork loin rump pancetta tenderloin pig kevin strip steak chuck turkey leberkas salami','know when to hold em, know when to fold em',NULL,NULL,NULL),(60,1,'quietRiot2342','Quiet Riot','We are crazy now','wild wild wild',NULL,NULL,NULL),(61,1,'winOrBooze','Win or Booze','Tri-tip ham short ribs, t-bone landjaeger shank venison chuck picanha','Accept who you are. Unless you’re a serial killer.','32423',NULL,NULL),(62,1,'cerealKillers23423','Cereal Killers','I travel all night just to get back home.','On a steel horse I ride.','67890',NULL,NULL);
/*!40000 ALTER TABLE `league` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `player_id` int(11) NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `username` varchar(50) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `favorite_team` varchar(50) DEFAULT NULL,
  `hated_team` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `at_bat_song` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zip_code` char(6) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (194,1,'stein098098','John','Steinbeck','1902-09-23','Boston Red Sox','Boston Red Sox','steinbeck@leaves.com','More than a Feeling','Boston','Massachusetts','12310','USA','2020-03-05 21:30:47',NULL),(200,1,'clester3423','Catherine','Lester','1968-02-21','San Diego Padres','Seattle Mariners','clester@accenture.com','Jack and Diane','San Antonio','Texas','78259','USA','2020-03-05 18:10:19',NULL),(201,1,'ksimon23423','Karly','Simon','1974-04-30','Baltimore Orioles','Milwaukee Brewers','ksimon@generic.com','Born to Be Wild','Los Angeles','California','23432','USA','2020-03-05 21:18:14',NULL),(202,1,'fscott32424','F Scott','Fitzgerald','1970-04-23','Los Angeles Angels','Arizona Diamondbacks','fscott@generic.com','Enter Sandman','Detroit','Michigan','32423','USA','2020-03-05 21:34:43',NULL),(203,1,'vwolf24324','Virginia','Wolf','1922-09-28','Baltimore Orioles','Miami Marlins','vwolf@generic.com','Another Brick in the Wall','Chicago','Illinois','12310','USA','2020-03-03 17:48:56',NULL),(204,1,'jjoyce0809','James','Joyce','1882-09-23','Los Angeles Dodgers','Los Angeles Angels','joyce@generic.com','All Along the Watchtower','Dublin','','12310','Ireland','2020-03-03 22:17:23',NULL),(205,1,'stein098098','John','Steinbeck','1902-09-23','Atlanta Braves','Chicago White Sox','steinbeck@generic.com','More than a Feeling','Boston','Massachusetts','12310','USA','2020-03-03 17:56:09',NULL),(206,1,'mcassidy23432','Megan','Cassidy','1975-02-03','San Francisco Giants','San Francisco Giants','mcassidy@pets.com','Sympathy for the Devil','New York City','New York','34234','USA','2020-02-26 20:21:31',NULL),(207,1,'rjuarez23423','Rick','Juarez','1955-02-03','Tampa Bay Rays','Toronto Blue Jays','rjuarez@@bailbonds.com','Freebird','San Antonio','Texas','53454','USA','2020-02-26 20:22:09',NULL),(208,1,'ksimon23423','Karly','Simon','1974-04-23','Baltimore Orioles','Chicago Cubs','ksimon@@generic.com','Born to Be Wild','Los Angeles','California','23432','USA',NULL,NULL),(209,1,'fscott32424','F Scott','Fitzgerald','1970-04-23','Los Angeles Dodgers','Atlanta Braves','fscott@@generic.com','Enter Sandman','Detroit','Michigan','32423','USA',NULL,NULL),(210,1,'vwolf24324','Virginia','Wolf','1922-09-23','Baltimore Orioles','Oakland Athletics','vwolf@generic.com','Another Brick in the Wall','Chicago','Illinois','12310','USA','2020-03-03 21:21:39',NULL),(211,1,'jjoyce0809','James','Joyce','1882-09-23','Minnesota Twins','Miami Marlins','joyce@@generic.com','All Along the Watchtower','Dublin','','12310','Ireland',NULL,NULL),(212,1,'stein098098','John','Steinbeck','1902-09-23','Atlanta Braves','Chicago Cubs','steinbeck@@generic.com','More than a Feeling','Boston','Massachusetts','12310','USA',NULL,NULL),(214,1,'dave23424','Dave','Motson','2020-02-27','Boston Red Sox','','dmotson@er.com','','','','','','2020-02-26 22:06:02','2020-02-27 04:06:02'),(218,1,'here234234','John','Mellencamp','2020-02-16','Boston Red Sox','Atlanta Braves','mellencamp@smalltown.com','','','','','','2020-02-28 22:25:04','2020-02-29 04:25:04'),(219,1,'there34234','Eddy','Van Halen','2020-02-18','Boston Red Sox','Atlanta Braves','eddie@vh.com','Jump','','','','','2020-02-28 22:27:03','2020-02-29 04:27:03'),(220,1,'jb2342','Jack','Black','2020-02-12','Baltimore Orioles','','jblack@here.com','','','','','','2020-02-28 22:32:11','2020-02-29 04:32:11');
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-05 15:43:19
