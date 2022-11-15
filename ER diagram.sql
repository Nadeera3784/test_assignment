CREATE TABLE `person` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(50) UNIQUE NOT NULL
);

CREATE TABLE `student` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `person_id` int NOT NULL,
  `student_number` varchar(100) UNIQUE NOT NULL
);

CREATE TABLE `professor` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `person_id` int NOT NULL,
  `salary` varchar(255) NOT NULL
);

CREATE TABLE `address` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `person_id` int NOT NULL,
  `street` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL
);

CREATE TABLE `vehicle` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `person_id` int NOT NULL,
  `model` varchar(255) NOT NULL,
  `plate_number` varchar(255) UNIQUE NOT NULL
);

CREATE TABLE `drive` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `person_id` int NOT NULL,
  `vehicle_id` int NOT NULL,
  `date` date NOT NULL,
  `distance` float NOT NULL
);

CREATE INDEX `student_index_0` ON `student` (`person_id`);

CREATE INDEX `professor_index_1` ON `professor` (`person_id`);

CREATE INDEX `address_index_2` ON `address` (`person_id`);

CREATE INDEX `vehicle_index_3` ON `vehicle` (`person_id`);

CREATE INDEX `drive_index_4` ON `drive` (`person_id`, `vehicle_id`);

ALTER TABLE `student` ADD FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE `professor` ADD FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE `address` ADD FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE `vehicle` ADD FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE `drive` ADD FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE `drive` ADD FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
