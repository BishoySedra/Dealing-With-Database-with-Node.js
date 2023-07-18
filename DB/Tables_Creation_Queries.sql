create database task_2;

use task_2;

create table users(
	id int primary key auto_increment,
    user_name varchar(255),
    email varchar(255)
);

create table posts(
	id int primary key auto_increment,
    title varchar(255),
    content varchar(255),
    user_id int,
    foreign key(user_id) references users(id)
);

create table tags(
	id int primary key auto_increment,
    tag_name varchar(255)
);

CREATE TABLE tagsofposts (
  post_id INT,
  tag_id INT,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (tag_id) REFERENCES tags(id),
  UNIQUE (post_id, tag_id)
);