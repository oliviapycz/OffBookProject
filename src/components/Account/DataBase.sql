CREATE TABLE `users` (
	`id_user` INT PRIMARY KEY NOT NULL,
    `name_user` text(50) NOT NULL,
    `email_user` varchar(255) NOT NULL,
    `password_user` varchar(255) NOT NULL,
    `picture_path_user` varchar(255)
)
