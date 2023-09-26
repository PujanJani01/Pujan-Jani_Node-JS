create table employees(
  emp_no int primary key,
  emp_name varchar(30),
  dept_no int
);
insert into employees
values
(101, 'varun', 1),
(102, 'amrit', 2),
(103, 'ravi', 1);

create table departments(
  dept_no int primary key,
  dept_name varchar(30),
  dept_loc varchar(30)
);
insert into departments
values
(1, 'IT', 'delhi'),
(2, 'HR', 'hydrabad'),
(3, 'Finance', 'pune');

insert into employees(emp_no, emp_name)
values(104, 'nitin');

select * from employees;
select * from departments;

# left outer join

select emp_no, emp_name, dept_name, dept_loc
from employees as emp
left join departments as dept
on emp.dept_no = dept.dept_no;

# right outer join

select emp_no, emp_name, dept_name, dept_loc
from employees as emp
right join departments as dept
on emp.dept_no = dept.dept_no;

# full outer join

select emp_no, emp_name, dept_name, dept_loc
from employees as emp
left join departments as dept
on emp.dept_no = dept.dept_no
union
select emp_no, emp_name, dept_name, dept_loc
from employees as emp
right join departments as dept
on emp.dept_no = dept.dept_no;

# left exclusive join

select emp_no, emp_name, dept_name, dept_loc
from employees as emp
left join departments as dept
on emp.dept_no = dept.dept_no
where dept.dept_no is null;

# right exclusive join

select emp_no, emp_name, dept_name, dept_loc
from employees as emp
right join departments as dept
on emp.dept_no = dept.dept_no
where emp.dept_no is null;