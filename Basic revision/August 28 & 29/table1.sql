CREATE DATABASE college;                 # it gives error if database exists
CREATE DATABASE if not exists college;   -- it gives warning 

drop database company;                 /* it gives error if database deosn't exists*/
drop database if exists company;       -- it gives warning 

use college;

create table student (
   id int primary key,
   name varchar(50),
   age int not null
);

insert into student values(1, 'Pujan', 18);
insert into student values(2, 'Deepak', 18);
                     
insert into student values(3, 'Sunil', 18), (4, 'Jainil', 18);

select *from student;