-- phpMyAdmin SQL Dump
-- version 5.2.1deb1ubuntu0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 15, 2023 at 05:39 PM
-- Server version: 8.0.34-0ubuntu0.23.04.1
-- PHP Version: 8.1.12-1ubuntu4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `taskName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `selectedDate` datetime NOT NULL,
  `selectedTime` varchar(5) NOT NULL,
  `priority` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `imageUrl`, `taskName`, `description`, `selectedDate`, `selectedTime`, `priority`) VALUES
(12, 'https://res.cloudinary.com/dg047twga/image/upload/v1697365966/uctwpjvbfu16vqic8kgt.jpg', 'Study', 'I will study today', '2023-10-16 14:24:34', '22:10', 'high'),
(13, 'https://res.cloudinary.com/dg047twga/image/upload/v1697366051/ktb5snaokb1pyqe85z8n.jpg', 'FootBall', 'I will play football today', '2023-10-14 12:32:51', '11:11', 'medium'),
(14, 'https://res.cloudinary.com/dg047twga/image/upload/v1697366122/ypxmeasjytmtebn7mkuh.jpg', 'Swimming', 'I want to do swimming today ', '2023-10-15 07:04:52', '06:11', 'low');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
