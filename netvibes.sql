-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 06 déc. 2021 à 16:25
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `netvibes`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text DEFAULT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `token`) VALUES
(1, 'soultonew2@gmail.com', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvdWx0b25ldzJAZ21haWwuY29tIiwiaWF0IjoxNjM4NDA0OTc1LCJleHAiOjE2Mzg0MTIxNzV9.gvBVImmeVXeGJBqulT5NLSCfvDzXY0qzr74y3E0WGas'),
(2, 'feelladipo@gmail.com', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlZWxsYWRpcG9AZ21haWwuY29tIiwiaWF0IjoxNjM4NDA1OTU1LCJleHAiOjE2Mzg0MTMxNTV9.1GE3P4gNuarWD_GHW-nETQ4AMibay_VqcmV_nQ-MHd4'),
(3, 'salimkoragoukkoinou@gmail.com', '$2a$10$C6kzU9U4fsVffSRNUmJUFuCUxAvnTGYLomjS6N6fmpLZQ2ZxAX0Wa', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbGlta29yYWdvdWtrb2lub3VAZ21haWwuY29tIiwiaWF0IjoxNjM4NDA4MTE0LCJleHAiOjE2Mzg0MTUzMTR9.1WfaRB2hT47pnr3Ot_qGZT3GhGHwI2UzbE79THRhbu8'),
(4, 'salimkoragoukkohdghhsdinou@gmail.com', '$2a$10$Kdg4.NEM3qgk19/sjTZoNeiqmeXj3.HQ3MZZfn2uPC0zP0XBfVvs.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbGlta29yYWdvdWtrb2hkZ2hoc2Rpbm91QGdtYWlsLmNvbSIsImlhdCI6MTYzODQ1NTc0NCwiZXhwIjoxNjM4NDYyOTQ0fQ.bVCqOksCR9Hvu8rOXf88wsaGHXZ8c3yk6y1AMKU-uPA'),
(5, 'feellipo@gmail.com', '$2a$10$2oHC6PVpxS2tTvqIlrVzneC97o0FucLHoEhpETRgXIal44mVmw38e', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlZWxsaXBvQGdtYWlsLmNvbSIsImlhdCI6MTYzODU2NjcwMiwiZXhwIjoxNjM4NTczOTAyfQ.sXUkk3s8JSLSFNa9fx20_loAnxbuoaaZVRqkmwVtamo'),
(6, 'feeler@gmail.com', '$2a$10$VOHB7rvuf04bz3edxuWrFuZxgX7tshBNniDt.ffWDtAiNyn.2mtxG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlZWxlckBnbWFpbC5jb20iLCJpYXQiOjE2Mzg1NjcyMTMsImV4cCI6MTYzODU3NDQxM30.a2MQHf-Lw0qHc3rELyepVeGy52KeTNUcCnr8d_inVvg'),
(7, 'sookl@gmail.com', '$2a$10$AcRMHRmdhUgjRPebMkS0feP/syoq5ss/8yMK1lwfmeLSqHBkRNHRC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvb2tsQGdtYWlsLmNvbSIsImlhdCI6MTYzODU2NzI1MywiZXhwIjoxNjM4NTc0NDUzfQ.Dyp2V1j-zwntHGmqTGtHKJ8gMUlbV_X2kDrFsQyKPJg'),
(8, 'nassiroumoussa118@gmail.com', '$2a$10$wsFMPJVy6tXD82x77bdLVee7YJA./AJGuy5OpHUG9uSouudqJAwry', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hc3Npcm91bW91c3NhMTE4QGdtYWlsLmNvbSIsImlhdCI6MTYzODU2NzM2NywiZXhwIjoxNjM4NTc0NTY3fQ.VzBu4k17zBRpL1PFqTjp1g4vRIHe4eW7zISsE__juso'),
(9, 'kevinsimpson1999@gmail.com', '$2a$10$LH.JLE3MSZVa6CEbNhNq..FC22/B5Mua91K3IvGjiWW4.7vAtJT4S', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtldmluc2ltcHNvbjE5OTlAZ21haWwuY29tIiwiaWF0IjoxNjM4NTY3NTUxLCJleHAiOjE2Mzg1NzQ3NTF9.ed9R8y1vMzPEYoL0QTwc_mjnO5ZZ12TYa48lemanALY'),
(10, 'soultonew259@gmail.com', '$2a$10$08xtNGPpa/7wyjkdW/nSAuh4oKEzGwaxp4iaIMqUgNbdSgm7llH6u', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvdWx0b25ldzI1OUBnbWFpbC5jb20iLCJpYXQiOjE2Mzg1Njc2NDAsImV4cCI6MTYzODU3NDg0MH0.K-k_-3ZJ2woJvHF0CuPwLkibTeaumJ_ISfMjZvphr2E'),
(11, 'soultonew892@gmail.com', '$2a$10$PCZyFYYoYNf.dYPD9YFfvOBFiOj6xKRgDO6HIDVq5jZJ1ugbxjnyW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvdWx0b25ldzg5MkBnbWFpbC5jb20iLCJpYXQiOjE2Mzg1Njk0MDQsImV4cCI6MTYzODU3NjYwNH0.A0C32veGH69TAugTd3Wxhn2t-PuIUpASgx144g53g2c'),
(12, 'soo897@gmail.com', '$2a$10$mNBrk4Xcax2mZPbIRFhS.eUGLCVNGvUXdcaZ8xy5Wug2w98psZlJi', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbzg5N0BnbWFpbC5jb20iLCJpYXQiOjE2Mzg1NzAxNzIsImV4cCI6MTYzODU3NzM3Mn0.H6LmF17Jw0TXTk5dKzEOFaYv5zmvxOlUGFzJCKOuOBA'),
(13, 'nassiroumoussa2222d118@gmail.com', '$2a$10$6ILunJmd6COxFlz.E2oceOdbCvIWnIiJtMH71AAyWorpBHBz0V2f2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hc3Npcm91bW91c3NhMjIyMmQxMThAZ21haWwuY29tIiwiaWF0IjoxNjM4NTcwMTkwLCJleHAiOjE2Mzg1NzczOTB9.CVsUnNZUVhLfOcxq1cXfBssKZ3V3FjMo4cRHVEdfRms'),
(14, 'zedd@gmail.com', '$2a$10$3pzETo2rFp44nlL4Uv3E3eZAlhUNq2Ix082GCeCzcqJ27P5U9lLLq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplZGRAZ21haWwuY29tIiwiaWF0IjoxNjM4NTczMDUzLCJleHAiOjE2Mzg1ODAyNTN9.g0lXfkx1QmsRItsnvca9xWdUbhiF2BY4iLvIKmscpf8'),
(15, 'test@gmail.com', '$2a$10$Tj/o1mWN8bDXCyeuio1M7O0FFZmUECEQTnFLzm/3hqNeR.nFR4zkC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJyckBnbWFpbC5jb20iLCJpYXQiOjE2Mzg1NzMxNjcsImV4cCI6MTYzODU4MDM2N30.iPN_6o1sKDlT72908ramgtUQGe5CxU3m46s1w8idGgA'),
(16, 'feeo@gmail.com', '$2a$10$3TRJIRV/YF27hYdYTn47..zPKvOtKo1i01AvdvOhvRP67stj0WtMy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlZW9AZ21haWwuY29tIiwiaWF0IjoxNjM4NTc2MDMxLCJleHAiOjE2Mzg1ODMyMzF9.sJNtUuAGuv7XOS8MaQ-vMzGdszhZbrKB2_QInQ4u0_A'),
(17, 'test@gmail.com', '$2a$10$hNocEvKNvB6mfPv3s.tbIuzVxFL2zIAFGOWcV4kBwLerCBBCsJMoy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjM4NTc2NDQ1LCJleHAiOjE2Mzg1ODM2NDV9.-PxR-5E3u9d3lWBR6ohNB_vkJKeNN7RnQ3h7sodqDUQ');

-- --------------------------------------------------------

--
-- Structure de la table `widget`
--

CREATE TABLE `widget` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `value` varchar(100) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `widget`
--
ALTER TABLE `widget`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `widget`
--
ALTER TABLE `widget`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `widget`
--
ALTER TABLE `widget`
  ADD CONSTRAINT `widget_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
