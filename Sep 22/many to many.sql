
create table students(
   stud_rollno int primary key,
   stud_name varchar(50),
   stud_age int
);
insert into students
values
(1, 'pujan', 18),
(2, 'deepak', 18),
(3, 'jainil', 18),
(4, 'sunil', 19),
(5, 'sachin', 18);

create table subjects(
   sub_id int primary key,
   sub_name varchar(50),
   sub_credit int
);
insert into subjects
values
(1, 'maths', 4),
(2, 'physics', 4),
(3, 'chemistry', 4),
(4, 'biology', 4),
(5, 'computer', 4);

create table stud_sub(
   stud_rollno int,
   sub_id int,
   primary key (stud_rollno,  sub_id),
   foreign key (stud_rollno) references students(stud_rollno),
   foreign key (sub_id) references subjects(sub_id)
);
insert into stud_sub
values
(1,1),
(1,2),
(1,5),
(2,1),
(2,5),
(3,5),
(4,3),
(5,4);

select * from students;
select * from subjects;
select * from stud_sub order by stud_rollno asc;