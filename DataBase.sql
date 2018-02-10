CREATE DATABASE IF NOT EXISTS OffBookProject;

CREATE TABLE `users` (
	`id_user` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name_user` text(50) NOT NULL,
    `email_user` varchar(255) NOT NULL,
    `password_user` varchar(255) NOT NULL,
    `picture_path_user` varchar(255)
);

CREATE TABLE `books` (
	`id_book` INT PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    `name_book` text(100) NOT NULL,
    `author_book` text(100) NOT NULL,
    `year_book` INT(4) NOT NULL,
    `picture_path_book` varchar(255)
);

CREATE TABLE `user_books` (
	`book_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  FOREIGN KEY (id_book) REFERENCES books(id_book),
	FOREIGN KEY (id_user) REFERENCES users(id_user)
);

INSERT INTO
  `users`(
    `name_user`,
    `email_user`,
    `password_user`,
    `picture_path_user`
  )
VALUES(
  'olivia',
  'olivia@gmail.com',
  'password',
  'path/to/avatar.jpg'
)

INSERT INTO
  `books`(
    `name_book`,
    `author_book`,
    `year_book`,
    `picture_path_book`
  )
VALUES(
  'Au bonheur des dames',
  'Emile Zola',
  '1892',
  'path/to/book.jpg'
)

INSERT INTO `user_books`(`id_book`, `id_user`) VALUES ('1', '1')

SELECT * FROM `books`, `user_books` WHERE `user_id` =1 AND `id_book` = `book_id`

//

SELECT * FROM `books`
INNER JOIN `list_books`
WHERE list_books.list_id = 2
AND list_books.book_id = books.id_book
