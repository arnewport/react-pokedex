drop database if exists pokemon_database;
create database pokemon_database;
use pokemon_database;

create table pokemon (
    id int primary key auto_increment,
    japanese_name varchar(50) not null
);

insert into pokemon 
		(japanese_name) 
	values
		('フシギダネ'),
        ('フシギソウ'),
        ('フシギバナ'),
        ('ヒトカゲ'),
        ('リザード'),
        ('リザードン'),
        ('ゼニガメ'),
        ('カメール'),
        ('カメックス');
        