create table emp(
   emp_id int primary key auto_increment,
   emp_name varchar(30),
   emp_sal int
);
insert into emp(emp_name, emp_sal)
values 
('Abhay', 25000),
('Bishwa', 21000),
('Manan', 24000);

create table dept(
   dep_id int primary key auto_increment,
   dep_name varchar(30),
   dep_loc varchar(30)
);
insert into dept(dep_name, dep_loc)
values 
('IT', 'Banglore'),
('Production', 'Mumbai'),
('Marketing', 'Delhi');

create table emp_dep(
	empid int primary key,
    depid int,
	foreign key (empid) references emp(emp_id),
    foreign key (depid) references dept(dep_id)
);
insert into emp_dep(empid, depid)
values 
(1,2),
(2,3),
(3,1);

select * from emp;
select * from dept;
select * from emp_dep;