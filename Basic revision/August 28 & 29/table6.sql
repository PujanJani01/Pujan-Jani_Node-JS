use saeculum;

create table students(
   id int primary key,
   name varchar(30),
   age int check (age >=18 and age <=22)        
   # constraint check (age >=18 and age <=22)   -- another way to set condition
);

insert into students values('2201', 'Jay', 20);
insert into students values('2202', 'Jay', 18);

insert into students values('2203', 'Savan', 17);  -- it wil give error cause we set condition on age 
insert into students values('2204', 'Vansh', 23);  -- it is also not satisfing the condition

insert into students values('2205', 'Birva', 22); -- it will work as it satisfies the condition

select * from students;