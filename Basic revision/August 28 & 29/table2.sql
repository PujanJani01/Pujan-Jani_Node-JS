create table students(
   rollno int primary key,
   name varchar(50)
);

insert into students (rollno, name)
values(101, 'karan'), (102, 'arjun'), (103, 'ram');

select *from students;