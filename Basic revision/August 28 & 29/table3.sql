create database saeculum;
use saeculum;

create table employees(
   id int primary key auto_increment,  -- primary key makes a column unique and not null
   name varchar(30),
   salary int
);

insert into employees (name, salary)
values('adam', 25000), ('bob', 30000), ('casey', 40000);

select * from employees;

create table temp1(
   id int unique,
   city varchar(30) not null
);

insert into temp1 
values(1, 'Ahemdabad'), (2, 'Mehsana');

insert into temp1(id) values(3);   -- it will give error 'cause city can't be null
insert into temp1(city) values('Rajkot'), ('Surat') , ('Vadodara'); -- id can be null here but it must be unique

select * from temp1;

