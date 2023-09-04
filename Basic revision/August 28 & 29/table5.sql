use saeculum;

create table emp(
  emp_id int primary key auto_increment,
  emp_name varchar(50),
  emp_sal int default 20000
);

insert into emp values(1, 'Abhay', 25000), (2, 'Bishwa', 21000);
insert into emp(emp_name) values('Rajesh');  -- here we didn't entered salary so it will take salary 20000 as default

select * from emp;