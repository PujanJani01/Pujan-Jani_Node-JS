use saeculum;

insert into cities
values
(1, 'Ahmedabad'), 
(2, 'Mehsana');

insert into cities(city)
values('Rajkot'),('Surat'),('Vadodara');

SELECT * FROM cities;

UPDATE cities 
SET id = 5
WHERE city = 'Vadodara';

select emp_name
from emp 
inner join department
on emp_id = dep_id;






